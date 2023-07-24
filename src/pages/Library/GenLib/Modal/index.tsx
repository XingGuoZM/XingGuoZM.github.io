import React, { useImperativeHandle, useRef, } from 'react';
import { createRoot } from 'react-dom/client';

const BaseModal = React.forwardRef(function (props, ref) {
  const modalRef = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      show() {
        modalRef.current.style.display = 'block';
      },
      hide() {
        modalRef.current.style.display = 'none';
      }
    }
  }, []);

  return <div
    ref={modalRef}
    style={{
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: '0',
      left: '0',
      // display: 'none',
      background: 'rgba(0,0,0,.5)'
    }}>
  </div>
});

const Modal = {
  show: () => {
    const div = document.createElement('div');
    document.querySelector('#root')?.appendChild(div);
    const root = createRoot(div);
    root.render(<BaseModal />)
  },
  hide: () => {
    // root.unmount();
  }

}


export default Modal;