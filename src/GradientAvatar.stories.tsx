import type { Meta } from "@storybook/react";

import { GradientAvatar, GradientAvatarProps } from "./GradientAvatar";

const meta: Meta<typeof GradientAvatar> = {
  component: GradientAvatar,
};

export default meta;

export const Default: any = (args: GradientAvatarProps) => (
  <GradientAvatar {...args} />
);
Default.args = {
  name: "Brandon Sueur",
  gradient: {
    from: "blue",
    end: "#b91c1c",
    direction: "bottom right",
  },
};

export const Size: any = (args: GradientAvatarProps) => (
  <GradientAvatar {...args} />
);
Size.args = {
  name: "Brandon Sueur",
  size: "xlarge",
};

export const Color: any = (args: GradientAvatarProps) => (
  <GradientAvatar {...args} />
);
Color.args = {
  name: "Brandon Sueur",
  color: "#b91c1c",
};
