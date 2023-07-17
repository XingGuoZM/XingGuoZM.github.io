import React, { createContext, useEffect, useReducer, ReactElement } from "react";

const symModalId = Symbol("ModalId");

interface IModalContext {
  theme?: string;
}

const initialState: IModalContext = {};

const ModalContext = createContext(initialState);

enum TypeEnum {
  Show = 'show',
  Hide = 'hide',
}

const reducer = (state = initialState, action) => {
  const { id } = action.payload || {};
  switch (action.type) {
    case TypeEnum.Show:
      return { ...state, [id]: { ...state[id] } };
    case TypeEnum.Hide:
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};
const showAction = (id: string) => ({ type: TypeEnum.Show, payload: { id } });

const hideAction = (id: string) => ({ type: TypeEnum.Hide, payload: { id } });

let dispatch;
const modalsCallback = {};
const hideModalsCallback = {};
const Store = new Map();

let uidSeed = 0;
const getModalId = (modal) => {
  if (!modal[symModalId]) modal[symModalId] = `modal_${uidSeed++}`;
  return modal[symModalId];
};
function register(id: string, modal: ReactElement, props) {
  Store.set(id, { id, Comp: () => modal(props) });
}
const promisifyCallback = (callback, modalId: string) => {
  let theResolve, theReject;
  const promise = new Promise((resolve, reject) => {
    theResolve = resolve;
    theReject = reject;
  });

  callback[modalId] = {
    resolve: theResolve,
    reject: theReject,
    promise
  };
  return callback[modalId].promise;
};
function show(modal, props) {
  const modalId = getModalId(modal);
  register(modalId, modal, props);
  dispatch(showAction(modalId, modal));
  return promisifyCallback(modalsCallback, modalId);
}
function hide(modal) {
  const modalId = getModalId(modal);
  dispatch(hideAction(modalId, modal));
  delete hideModalsCallback[modalId];
  return promisifyCallback(hideModalsCallback, modalId);
}

function Provider({ children, value }) {
  const arr = useReducer(reducer, { ...initialState });
  const modalIds = Object.keys(arr[0]);
  dispatch = arr[1];
  const toRender = modalIds.map((id) => ({ id, Comp: Store.get(id).Comp }));
  useEffect(() => {
    modalIds.forEach((id) => modalsCallback[id].resolve());
  }, [modalIds]);
  return (
    <ModalContext.Provider value={{ ...arr[0], ...value }}>
      {children}
      <div className="modals">
        {toRender.map((t) => (
          <t.Comp key={t.id} />
        ))}
      </div>
    </ModalContext.Provider>
  );
}

const Modal = { Provider, ModalContext, show, hide };
export { Provider, ModalContext, show, hide };
export default Modal;
