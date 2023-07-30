import React, { ReactNode } from 'react';
import { Slot } from '../../GenLib/Slot';

export default function SlotComp({ children }: { children: ReactNode }) {
  return <div>
    <Slot.Define name='header'> {children}</Slot.Define>
    <Slot.Define name='content'>{children}</Slot.Define>
    <Slot.Define name='footer'>{children}</Slot.Define>
  </div>
}