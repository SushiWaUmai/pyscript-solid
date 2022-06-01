import { Component } from "solid-js";
import type { JSX } from "solid-js";

export type PyScriptWebProperties = Omit<
  JSX.HTMLAttributes<HTMLElement>,
  "children"
> & {
  children?: string;
  ["attr:output"]?: string;
  ["attr:output-mode"]?: string;
  ["attr:std-out"]?: string;
  ["attr:std-err"]?: string;
  ["attr:exec-id"]?: string;
  ["attr:src"]?: string;
};

export type PyScriptProperties = Omit<
  JSX.HTMLAttributes<HTMLElement>,
  "children"
> & {
  children?: string;
  output?: string;
  outputMode?: string;
  stdOut?: string;
  stdErr?: string;
  execId?: string;
  src?: string;
};

export const PyScript: Component<PyScriptProperties> = (props): JSX.Element => {
  return (
    <py-script
      attr:output={props.output}
      attr:output-mode={props.outputMode}
      attr:std-out={props.stdOut}
      attr:std-err={props.stdErr}
      attr:exec-id={props.execId}
      attr:src={props.src}
      {...props}
    />
  );
};
