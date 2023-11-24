import React from "react";

import "./index.css";

export const sizeMap = {
  small: "w-8 h-8 text-xs",
  medium: "w-12 h-12 text-sm",
  large: "w-16 h-16 text-base",
  xlarge: "w-20 h-20 text-lg",
};

export interface GradientAvatarProps {
  name?: string;
  size?: keyof typeof sizeMap;
  color?: string;
  gradient?: {
    from: string;
    end: string;
    direction?: "bottom right" | "bottom left" | "top right" | "top left";
  };
  className?: string;
}

export const GradientAvatar: React.FC<GradientAvatarProps> = (props) => {
  const {
    name = "",
    size = "medium",
    color = "#ff000",
    gradient,
    className = "",
  } = props;

  const sizeClass = sizeMap[size];

  const myGradient = (gradient?: {
    from: string;
    end: string;
    direction?: string;
  }) => {
    if (!gradient) return;

    const { from, end, direction = "bottom right" } = gradient;

    return `linear-gradient(to ${direction}, ${from}, ${end})`;
  };

  const getInitials = (name: string) => {
    const names = name.split(" ");
    let initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }

    return initials;
  };

  const contrastText = (color: any) => {
    let r, g, b, hsp;

    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"));

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;

    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    return hsp > 127.5 ? "black" : "white";
  };

  const classes = `${sizeClass} ${className}`;

  const checkHex = (color: string) => /^#[0-9A-F]{6}$/i.test(color);

  return (
    <div
      data-testid="gradient-avatar"
      className={`rounded-full flex items-center justify-center ${classes}`}
      style={{
        ...(gradient && {
          backgroundImage: myGradient(gradient),
        }),
        ...(color && {
          backgroundColor: checkHex(color) ? color : "#cecece",
        }),
      }}
    >
      <span
        style={{
          color: contrastText(gradient ? gradient.from : color),
        }}
      >
        {name ? getInitials(name) : ""}
      </span>
    </div>
  );
};
