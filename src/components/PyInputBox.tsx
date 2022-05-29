import { Component } from "solid-js";
import type { JSX } from "solid-js";

export type PyInputBoxProperties = Omit<
  JSX.HTMLAttributes<HTMLElement>,
  "children"
> & {
  children: string;
};

const PyInputBox: Component<PyInputBoxProperties> = ({
  children,
  ...rest
}: PyInputBoxProperties): JSX.Element => {
  return <py-inputbox {...rest}>{children}</py-inputbox>;
};

export default PyInputBox;
