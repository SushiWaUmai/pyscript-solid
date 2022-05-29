import { Component } from "solid-js";
import type { JSX } from "solid-js";

export type PyBoxProperties = JSX.HTMLAttributes<HTMLElement>;

const PyBox: Component<PyBoxProperties> = ({
  children,
  ...rest
}: PyBoxProperties): JSX.Element => {
  return <py-box {...rest}>{children}</py-box>;
};

export default PyBox;
