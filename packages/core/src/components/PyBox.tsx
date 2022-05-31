import { Component } from "solid-js";
import type { JSX } from "solid-js";

export type PyBoxProperties = JSX.HTMLAttributes<HTMLElement>;

export const PyBox: Component<PyBoxProperties> = (
  props: PyBoxProperties,
): JSX.Element => {
  return <py-box {...props} />;
};
