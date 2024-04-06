import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect, vi } from "vitest";

vi.mock("./components/navBar/NavBar", () => ({
  default: () => <div data-testid="navbar">NavBar</div>,
}));
vi.mock("./components/hero/Hero", () => ({
  default: () => <div data-testid="hero">Hero</div>,
}));
vi.mock("./components/about/About", () => ({
  default: () => <div data-testid="about">About</div>,
}));
vi.mock("./components/emailSection/EmailSection", () => ({
  default: () => <div data-testid="emailSection">EmailSection</div>,
}));
vi.mock("./components/archievementSection/ArchievementSection", () => ({
  default: () => (
    <div data-testid="archievementSection">ArchievementSection</div>
  ),
}));
vi.mock("./components/footer/Footer", () => ({
  default: () => <div data-testid="footer">Footer</div>,
}));
vi.mock("./components/projectSection/ProjectSection", () => ({
  default: () => <div data-testid="projectSection">ProjectSection</div>,
}));

describe("App component", () => {
  it("renders App with all its mocked components", () => {
    render(<App />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("about")).toBeInTheDocument();
    expect(screen.getByTestId("emailSection")).toBeInTheDocument();
    expect(screen.getByTestId("archievementSection")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByTestId("projectSection")).toBeInTheDocument();
  });
});
