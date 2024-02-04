import { Aside } from ".";

export default {
  title: "Components/Aside",
  component: Aside,
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
    expand: true,
    className: {},
    maskGroup: "https://c.animaapp.com/8tseAcR4/img/mask-group-2@2x.png",
    divClassName: {},
    text: "Eco Ambiental",
    linkText: "Inicio",
    linkDivClassName: {},
    linkText1: "Especialización",
    visible: true,
    visible1: true,
    visible2: true,
    visible3: true,
  },
};
