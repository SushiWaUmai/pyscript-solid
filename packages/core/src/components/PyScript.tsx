import { Component } from "solid-js";
import type { JSX } from "solid-js";

export type PyScriptProperties = Omit<
  JSX.HTMLAttributes<HTMLElement>,
  "children"
> & {
  children?: string;
  output?: string;
  ["output-mode"]?: string;
  ["std-out"]?: string;
  ["std-err"]?: string;
  ["exec-id"]?: string;
  src?: string;
};

export const PyScript: Component<PyScriptProperties> = (props): JSX.Element => {
  return <py-script {...props} />;
};
