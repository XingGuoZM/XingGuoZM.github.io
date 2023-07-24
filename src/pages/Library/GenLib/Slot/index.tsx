import React, { cloneElement, ReactNode, isValidElement, createElement, ReactElement } from 'react';

/**
 * // 定义
 * <div>
 *  <Slot.Define name='header'>{children}</Slot.Define>
 *  <Slot.Define name='footer'>{children}</Slot.Define>
 * </div>
 *
 * // 调用
 * <Comp>
 *  <Slot.Call name='header'>header</Slot.Call>
 *  <Slot.Call name='footer'>footer</Slot.Call>
 * </Comp>
 */

type IChild = ReactNode;
type IChildren = IChild[] | IChild;
type IElement = ReactElement | null;
interface ISlot {
  name: string;
  children: IChildren;
}

export const Slot = {
  Define({ name, children }: ISlot): IElement {
    const list: IChild[] = React.Children.toArray(children);
    let [key, element]: [string, ReactNode] = ['define', null];
    for (const node of list) {
      if (isValidElement(node)) {
        const slotname = node.props.name;
        [key, element] = [slotname, cloneElement(node, { name: slotname })]
        if (slotname === name) {
          return element as JSX.Element;
        }
      }
    }
    return null;
  },
  Call({ name, children }: ISlot) {
    if (children && isValidElement(children)) {
      return cloneElement(children, { name });
    } else if (children) {
      return createElement('div', { name }, children);
    }
    return null;
  }
}