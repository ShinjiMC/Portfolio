import { render, screen } from "@testing-library/react";
import {
  Logo,
  MenuOpenIcon,
  MenuCloseIcon,
  CodeBracketIcon,
  EyeIcon,
  GithubIcon,
  LinkedinIcon,
} from "./icons";

describe("Icons Components", () => {
  test("Logo", () => {
    render(<Logo data-testid="logo-svg" />);
    const svgElement = screen.getByTestId("logo-svg");
    expect(svgElement).toBeInTheDocument();
  });

  test("MenuOpenIcon", () => {
    render(<MenuOpenIcon data-testid="menu-open-svg" />);
    const svgElement = screen.getByTestId("menu-open-svg");
    expect(svgElement).toBeInTheDocument();
  });

  test("MenuCloseIcon", () => {
    render(<MenuCloseIcon data-testid="menu-close-svg" />);
    const svgElement = screen.getByTestId("menu-close-svg");
    expect(svgElement).toBeInTheDocument();
  });

  test("CodeBracketIcon", () => {
    render(<CodeBracketIcon data-testid="code-bracket-svg" />);
    const svgElement = screen.getByTestId("code-bracket-svg");
    expect(svgElement).toBeInTheDocument();
  });

  test("EyeIcon", () => {
    render(<EyeIcon data-testid="eye-svg" />);
    const svgElement = screen.getByTestId("eye-svg");
    expect(svgElement).toBeInTheDocument();
  });

  test("GithubIcon", () => {
    render(<GithubIcon data-testid="github-svg" />);
    const svgElement = screen.getByTestId("github-svg");
    expect(svgElement).toBeInTheDocument();
  });

  test("LinkedinIcon", () => {
    render(<LinkedinIcon data-testid="linkedin-svg" />);
    const svgElement = screen.getByTestId("linkedin-svg");
    expect(svgElement).toBeInTheDocument();
  });
});
