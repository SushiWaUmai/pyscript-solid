import { Component } from "solid-js";
import type { JSX } from "solid-js";

export type PyTitleProperties = Omit<
  JSX.HTMLAttributes<HTMLElement>,
  "children"
> & {
  children: string;
};

export const PyTitle: Component<PyTitleProperties> = ({
  children,
  ...rest
}: PyTitleProperties): JSX.Element => {
  return <py-title {...rest}>{children}</py-title>;
};
