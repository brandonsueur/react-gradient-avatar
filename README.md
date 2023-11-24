# react-gradient-avatar

🌈 **react-gradient-avatar** is a React component that generates beautiful avatars.

![react-gradient-avatar](https://i.ibb.co/CnskCpz/Frame-1.jpg)

## Table of Contents

- [Installation](#installation)
- [Examples](#examples)
- [Demo](#demo)

## Installation

To install, you can use [npm](https://www.npmjs.com/package/react-gradient-avatar):
```shell
$ npm i react-gradient-avatar
$ yarn add react-gradient-avatar
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