import { ReactNode } from "react";
import { DirectionEnum } from "../../constant";

export interface IProps {
  target?: HTMLDivElement | null;
  total?: string | undefined;
  strokeWidth?: string | undefined;
  percent: number;
  className?: string;
  barClassName?: string;
  direction?: DirectionEnum | undefined;
  children?: ReactNode;
  onChange?: (percent: number) => void;
}
export interface IBarStyle {
  transform: string;
  transition: string;
}
export interface IStyle {
  width: string | undefined;
  height: string | undefined;
}