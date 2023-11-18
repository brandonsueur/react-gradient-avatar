// Button.stories.ts|tsx

import type { Meta } from "@storybook/react";

import { GradientAvatar, GradientAvatarProps } from "./GradientAvatar";

const meta: Meta<typeof GradientAvatar> = {
  component: GradientAvatar,
};

export default meta;

type Story = (args: GradientAvatarProps) => JSX.Element;

export const Default: Story = (args) => <GradientAvatar {...args} />;
Default.args = {
  name: "Brandon Sueur",
  gradient: {
    from: "red",
    end: "#b91c1c",
    direction: "to-br",
  },
};

export const Size: Story = (args) => <GradientAvatar {...args} />;
Size.args = {
  name: "Brandon Sueur",
  size: "small",
};

export const Color: Story = (args) => <GradientAvatar {...args} />;
Color.args = {
  name: "Brandon Sueur",
  color: "red",
};
