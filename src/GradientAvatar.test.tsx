import { screen, render } from "@testing-library/react";
import { GradientAvatar, sizeMap } from "./GradientAvatar";

describe("GradientAvatar", () => {
  it("should render the component", () => {
    render(<GradientAvatar />);
    const element = screen.getByTestId("gradient-avatar");
    expect(element).toBeInTheDocument();
  });

  it("should render the component with a name", () => {
    render(<GradientAvatar name="John Doe" />);
    const element = screen.getByTestId("gradient-avatar");
    expect(element).toBeInTheDocument();
  });

  it("should render the component with a name and a size", () => {
    const sizes = ["small", "medium", "large", "xlarge"];

    sizes.forEach((size) => {
      render(
        <GradientAvatar name="John Doe" size={size as keyof typeof sizeMap} />,
      );
      const element = screen.getByTestId("gradient-avatar");

      expect(element).toBeInTheDocument();
    });
  });

  it("should render the component with a name and a size and a custom color", () => {
    render(<GradientAvatar name="John Doe" size="large" color="#ff000" />);
    const element = screen.getByTestId("gradient-avatar");
    expect(element).toBeInTheDocument();
  });

  it("should render the component with a name and a size and a gradient", () => {
    render(
      <GradientAvatar
        name="John Doe"
        size="large"
        gradient={{
          from: "red",
          end: "#cecece",
        }}
      />,
    );
    const element = screen.getByTestId("gradient-avatar");
    expect(element).toBeInTheDocument();
  });
});
