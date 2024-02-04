import { ButtonPrimary } from ".";

export default {
  title: "Components/ButtonPrimary",
  component: ButtonPrimary,
  argTypes: {
    empresa: {
      options: ["ghamec", "acm", "eco"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    empresa: "ghamec",
    className: {},
    divClassName: {},
    text: "Boton",
  },
};
