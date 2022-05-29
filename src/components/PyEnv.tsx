import { Component, createMemo } from "solid-js";
import type { JSX } from "solid-js";

export type PyEnvProperties = Omit<
  JSX.HTMLAttributes<HTMLElement>,
  "children"
> & {
  children: JSX.Element | [JSX.Element];
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "py-env": PyEnvProperties;
    }
  }
}

const PyEnv: Component<PyEnvProperties> = ({
  children,
  ...rest
}: PyEnvProperties): JSX.Element => {
  const fixedChildren = createMemo(() => {
    return Array.isArray(children)
      ? children
          .map((element): string => {
            return `- ${element}`;
          })
          .join("\n")
      : children;
  });
  return <py-env {...rest}>{fixedChildren}</py-env>;
};

export default PyEnv;
