import { PyBoxProperties } from "../components/PyBox";
import { PyButtonProperties } from "../components/PyButton";
import { PyConfigProperties } from "../components/PyConfig";
import { PyEnvProperties } from "../components/PyEnv";
import { PyInputBoxProperties } from "../components/PyInputBox";
import { PyRegisterWidgetProperties } from "../components/PyRegisterWidget";
import { PyReplProperties } from "../components/PyRepl";
import { PyScriptProperties } from "../components/PyScript";
import { PyTitleProperties } from "../components/PyTitle";

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      ["py-box"]: PyBoxProperties;
      ["py-button"]: PyButtonProperties;
      ["py-config"]: PyConfigProperties;
      ["py-env"]: PyEnvProperties;
      ["py-inputbox"]: PyInputBoxProperties;
      ["py-register-widget"]: PyRegisterWidgetProperties;
      ["py-repl"]: PyReplProperties;
      ["py-script"]: PyScriptProperties;
      ["py-title"]: PyTitleProperties;
    }
  }
}
