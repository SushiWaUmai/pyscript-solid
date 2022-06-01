# PyScript Solid
Use [PyScript](https://pyscript.net/) together with [Solid.js](https://www.solidjs.com/).

## Getting Started

### Installation
Install pyscript-solidjs using npm:

```
npm install pyscript-solidjs
# or
yarn add pyscript-solidjs
# or
pnpm install pyscript-solidjs
```

### Usage
Simple Hello World in pyscript-solid.

```tsx
import type { Component } from "solid-js";
import { PyScript, PyScriptProvider } from "pyscript-solid";

const App: Component = () => {
  return (
    <PyScriptProvider>
      <PyScript>print("Hello World")</PyScript>
    </PyScriptProvider>
  );
};

export default App;
```

You can find more examples under the [`examples`](../examples) directory.
