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

export const PyRegisterWidget: Component<PyRegisterWidgetProperties> = ({
  name,
  src,
  pythonClass,
}: PyRegisterWidgetProperties): JSX.Element => {
  return (
    <py-register-widget
      src={src}
      name={name}
      pythonClass={pythonClass}
    ></py-register-widget>
  );
};
