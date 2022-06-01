import { Component } from "solid-js";
import type { JSX } from "solid-js";

export type PyButtonWebProperties = Omit<
  JSX.HTMLAttributes<HTMLElement>,
  "children"
> & {
  children: string;
  ["attr:label"]: string;
};

export type PyButtonProperties = Omit<
  JSX.HTMLAttributes<HTMLElement>,
  "children"
> & {
  children: string;
  label: string;
};

export const PyButton: Component<PyButtonProperties> = (
  props: PyButtonProperties,
): JSX.Element => {
  return <py-button attr:label={props.label} {...props} />;
};
