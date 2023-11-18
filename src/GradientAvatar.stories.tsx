import type { Meta } from "@storybook/react";

import { GradientAvatar, GradientAvatarProps } from "./GradientAvatar";

const meta: Meta<typeof GradientAvatar> = {
  component: GradientAvatar,
};

export default meta;

type Story = (args: GradientAvatarProps) => Element;

export const Default: any = (args: GradientAvatarProps) => (
  <GradientAvatar {...args} />
);
Default.args = {
  name: "Brandon Sueur",
  gradient: {
    from: "red",
    end: "#b91c1c",
    direction: "to-br",
  },
};

export const Size: any = (args: GradientAvatarProps) => (
  <GradientAvatar {...args} />
);
Size.args = {
  name: "Brandon Sueur",
  size: "small",
};

export const Color: any = (args: GradientAvatarProps) => (
  <GradientAvatar {...args} />
);
Color.args = {
  name: "Brandon Sueur",
  color: "red",
};
