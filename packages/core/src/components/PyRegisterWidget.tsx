import { Component } from "solid-js";
import type { JSX } from "solid-js";

export type PyRegisterWidgetProperties = Omit<
  JSX.HTMLAttributes<HTMLElement>,
  "children"
> & {
  name?: string;
  src: string;
  pythonClass?: string;
};

export const PyRegisterWidget: Component<PyRegisterWidgetProperties> = (
  props: PyRegisterWidgetProperties,
): JSX.Element => {
  return <py-register-widget {...props} />;
};
