# react-gradient-avatar

🌈 Generate beautiful avatars.

## Table of Contents

- [Installation](#installation)
- [Examples](#examples)
- [Demo](#demo)

## Installation

To install, you can use [npm](https://www.npmjs.com/package/brandonsueur/react-gradient-avatar):
```shell
$ npm install --save @brandonsueur/react-gradient-avatar
$ yarn add @brandonsueur/react-gradient-avatar
```

## Examples

Here is a simple example of `react-gradient-avatar`:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import GradientAvatar from "react-gradient-avatar";

const App = () => {
  // ...

  return (
    <div>
      <GradientAvatar
        size="large"
        name="Brandon Sueur"
        gradient={{
          from: "#FDC830",
          to: "#F37335",
        }}
      />
    </div>
  );
}

ReactDOM.render(<App/>, appElement);
```

You can find the example in the `examples` directory, which you can run in a
local development server using `npm start` or `yarn start`.

# Demo

There is a demo hosted on [my personal website](https://brandonsueur.fr/projets/react-gradient-avatar).