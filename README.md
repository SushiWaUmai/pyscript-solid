# PyScript Solid
Use [PyScript](https://pyscript.net/) together with [Solid.js](https://www.solidjs.com/).

## Getting Started
Note: This library is currently heavily under development and only supports solidjs using vite.

### Installation
Install pyscript-solidjs using npm:

```
npm install pyscript-solidjs
# or
yarn add pyscript-solidjs
# or
pnpm install pyscript-solidjs
```

Add the following lines in the vite entrypoint html file.
Note: A pyscript provider is coming soon.

```html
<link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
<script defer src="https://pyscript.net/alpha/pyscript.js"></script>
```

### Usage
Simple Hello World in pyscript-solid.

```tsx
import type { Component } from "solid-js";
import { PyScript, PyEnv } from "pyscript-solid";

const App: Component = () => {
  return <PyScript>print("Hello World")</PyScript>;
};

export default App;
```

## License
This library is lilcensed under the [MIT license](./LICENSE).
