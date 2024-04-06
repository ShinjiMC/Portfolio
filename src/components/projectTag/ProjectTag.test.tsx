import { render, screen, fireEvent } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import ProjectTag from "./ProjectTag";

describe("ProjectTag", () => {
  it("renders the component with text", () => {
    const mockOnClick = vi.fn();
    render(
      <ProjectTag
        name="test"
        onClick={mockOnClick}
        isSelected={false}
        text="Test Button"
      />
    );
    const buttonElement = screen.getByRole("button", { name: "Test Button" });
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls the onClick handler with the name when clicked", () => {
    const mockOnClick = vi.fn();
    render(
      <ProjectTag
        name="test"
        onClick={mockOnClick}
        isSelected={false}
        text="Test Button"
      />
    );
    const buttonElement = screen.getByRole("button", { name: "Test Button" });
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledWith("test");
  });

  it("has the selected class when isSelected is true", () => {
    const mockOnClick = vi.fn();
    render(
      <ProjectTag
        name="test"
        onClick={mockOnClick}
        isSelected={true}
        text="Test Button"
      />
    );
    const buttonElement = screen.getByRole("button", { name: "Test Button" });
    expect(buttonElement.className).toMatch(/btnSelected/);
  });
});
