---
readingTime:
  minutes: 1.715
  words: 343
fkglResult: 7.95
---

# `01.3` Customizing Tailwind Styles

Tailwind CSS is a powerful utility-first framework that allows developers to rapidly build custom designs without leaving their HTML. However, there are times when you need to go beyond the default styles provided by Tailwind. In this lesson, we will explore how to customize Tailwind's default styles and extend them in a React project.

## 📝 Instructions:

1. **Extend Tailwind's Configuration:**
   - Tailwind allows you to extend its default configuration to add custom styles. This is done by modifying the `tailwind.config.js` file in your project.
   - Add a new color to the theme. For example, add a custom color `brandBlue` with the hex value `#1E40AF`.

2. **Apply Custom Styles in a React Component:**
   - Create a new React component called `CustomButton`.
   - Use the custom `brandBlue` color as the background color for the button.
   - Add some padding and rounded corners using Tailwind's utility classes.

3. **Test Your Custom Styles:**
   - Render the `CustomButton` component in your application.
   - Ensure that the button displays with the custom `brandBlue` background color and the desired styling.

## Example Code:

Here's a basic example to guide you through the process:

### Step 1: Extend Tailwind Configuration

In your `tailwind.config.js` file, extend the theme as follows:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        brandBlue: '#1E40AF',
      },
    },
  },
};
```

### Step 2: Create the `CustomButton` Component

Create a new file `CustomButton.js` and add the following code:

```jsx
import React from 'react';

const CustomButton = () => {
  return (
    <button className="bg-brandBlue text-white py-2 px-4 rounded">
      Click Me
    </button>
  );
};

export default CustomButton;
```

### Step 3: Render the Component

In your main application file (e.g., `App.js`), import and render the `CustomButton` component:

```jsx
import React from 'react';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <CustomButton />
    </div>
  );
}

export default App;
```

By following these steps, you will learn how to customize Tailwind's default styles and apply them in a React project, enhancing your ability to create unique and visually appealing designs.