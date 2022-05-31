import { Component } from "solid-js";
import type { JSX } from "solid-js";

export type PyTitleProperties = Omit<
  JSX.HTMLAttributes<HTMLElement>,
  "children"
> & {
  children: string;
};

export const PyTitle: Component<PyTitleProperties> = (
  props: PyTitleProperties,
): JSX.Element => {
  return <py-title {...props} />;
};
