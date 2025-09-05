import Button from "./Button";

export default {
  title: "Atoms/JRButton",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export const Default = {
  args: {
    label: "Click me!",
  },
};
