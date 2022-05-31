import { Component } from "solid-js";
import type { JSX } from "solid-js";

export type PyReplProperties = Omit<
  JSX.HTMLAttributes<HTMLElement>,
  "children"
> & {
  autoGenerate?: boolean;
  children?: string;
};

export const PyRepl: Component<PyReplProperties> = ({
  autoGenerate = false,
  children,
  ...rest
}: PyReplProperties): JSX.Element => {
  return (
    <py-repl {...rest} auto-generate={autoGenerate}>
      {children}
    </py-repl>
  );
};
