import { Component } from "solid-js";
import type { JSX } from "solid-js";

export type PyRegisterWidgetWebProperties = Omit<
  JSX.HTMLAttributes<HTMLElement>,
  "children"
> & {
  ["attr:name"]?: string;
  ["attr:src"]: string;
  ["attr:pythonClass"]?: string;
};

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
  return (
    <py-register-widget
      attr:name={props.name}
      attr:src={props.src}
      attr:pythonClass={props.pythonClass}
      {...props}
    />
  );
};
