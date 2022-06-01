import { Component } from "solid-js";
import type { JSX } from "solid-js";

export type PyConfigProperties = Omit<
  JSX.HTMLAttributes<HTMLElement>,
  "children"
> & {
  children: string;
};

export const PyConfig: Component<PyConfigProperties> = (
  props: PyConfigProperties,
): JSX.Element => {
  return <py-config {...props} />;
};
