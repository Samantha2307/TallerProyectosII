import { Link } from ".";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    empresa: {
      options: ["ghamec", "acm", "eco"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["default", "hover-2", "active", "hover"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    empresa: "ghamec",
    stateProp: "default",
    className: {},
    group: "https://c.animaapp.com/8tseAcR4/img/group-2640-58@2x.png",
    text: "Cursos",
    divClassName: {},
  },
};