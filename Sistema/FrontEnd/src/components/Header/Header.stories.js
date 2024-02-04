import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    searchBarVector: "https://c.animaapp.com/8tseAcR4/img/vector-25.svg",
    vector: "https://c.animaapp.com/8tseAcR4/img/vector-22.svg",
    frameClassName: {},
    ellipse: "https://c.animaapp.com/8tseAcR4/img/ellipse-14-1@2x.png",
    hasFrame: true,
  },
};
