import { PyBoxProperties } from "../components/PyBox";
import { PyButtonWebProperties } from "../components/PyButton";
import { PyConfigProperties } from "../components/PyConfig";
import { PyEnvProperties } from "../components/PyEnv";
import { PyInputBoxProperties } from "../components/PyInputBox";
import { PyRegisterWidgetWebProperties } from "../components/PyRegisterWidget";
import { PyReplWebProperties } from "../components/PyRepl";
import { PyTitleProperties } from "../components/PyTitle";

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      ["py-box"]: PyBoxProperties;
      ["py-button"]: PyButtonWebProperties;
      ["py-config"]: PyConfigProperties;
      ["py-env"]: PyEnvProperties;
      ["py-inputbox"]: PyInputBoxProperties;
      ["py-register-widget"]: PyRegisterWidgetWebProperties;
      ["py-repl"]: PyReplWebProperties;
      ["py-script"]: PyScriptWebProperties;
      ["py-title"]: PyTitleProperties;
    }
  }
}
