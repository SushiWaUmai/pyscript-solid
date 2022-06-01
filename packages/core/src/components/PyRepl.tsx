import { Component } from "solid-js";
import type { JSX } from "solid-js";

export type PyReplWebProperties = Omit<
  JSX.HTMLAttributes<HTMLElement>,
  "children"
> & {
  children?: string;
};

export type PyReplProperties = Omit<
  JSX.HTMLAttributes<HTMLElement>,
  "children"
> & {
  children?: string;
};

export const PyRepl: Component<PyReplProperties> = (
  props: PyReplProperties,
): JSX.Element => {
  return <py-repl {...props} />;
};
