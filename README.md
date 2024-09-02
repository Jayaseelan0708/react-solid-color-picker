# react-solid-color-picker

> We can able to select color picker and copay and paste the color inside the input field.


## Install

```bash
npm i react-solid-color-picker --force
```

## Usage

```jsx
import React from 'react'
import SolidColorPicker from 'react-solid-color-picker' //you can use anything for SolidColorPicker

const App = () => {
  return <SolidColorPicker {...{
    label: "Color Picker",
    value: "#EFEFEF",
    disabled: false,
    onChange: (c) => console.log(c) // Call Back function
  }}

  />
}

export default App
```

## License

MIT © [Jayaseelan0708](https://github.com/Jayaseelan0708)
