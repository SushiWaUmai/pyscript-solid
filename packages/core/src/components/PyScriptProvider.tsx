import type { JSX } from "solid-js";
import { Link, MetaProvider } from "solid-meta";
import { Component } from "solid-js";
import { createScriptLoader } from "@solid-primitives/script-loader";

interface PyScriptProviderProperties {
  children: JSX.Element;
  jsSource?: string;
  cssSource?: string;
}

export const PyScriptProvider: Component<PyScriptProviderProperties> = (
  props,
) => {
  createScriptLoader({
    src: props.jsSource || "https://pyscript.net/alpha/pyscript.js",
  });

  return (
    <>
      <MetaProvider>
        <Link
          rel="stylesheet"
          href={props.cssSource || "https://pyscript.net/alpha/pyscript.css"}
        />
      </MetaProvider>
      {props.children}
    </>
  );
};
