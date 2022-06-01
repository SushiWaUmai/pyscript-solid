import { Component } from "solid-js";
import type { JSX } from "solid-js";

export type PyEnvProperties = Omit<
  JSX.HTMLAttributes<HTMLElement>,
  "children"
> & {
  children: JSX.Element | [JSX.Element];
};

export const PyEnv: Component<PyEnvProperties> = (
  props: PyEnvProperties,
): JSX.Element => {
  return <py-env {...props} />;
};
