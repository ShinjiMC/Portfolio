import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { expect, it, vi } from "vitest";

vi.mock("react-i18next", async () => {
  const originalModule = await import("react-i18next");
  return {
    ...originalModule,
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: { changeLanguage: vi.fn() },
    }),
    initReactI18next: { type: "3rdParty", init: vi.fn() },
  };
});

vi.mock("../icons", () => ({
  Logo: () => <div>Logo</div>,
  MenuOpenIcon: () => <div>MenuOpenIcon</div>,
  MenuCloseIcon: () => <div>MenuCloseIcon</div>,
}));

describe("NavBar", () => {
  beforeEach(() => {
    render(<NavBar />);
  });
  it("renders correctly", async () => {
    expect(screen.getByText("NavBar.Home")).toBeInTheDocument();
    expect(screen.getByText("NavBar.About")).toBeInTheDocument();
    expect(screen.getByText("NavBar.Projects")).toBeInTheDocument();
    expect(screen.getByText("NavBar.Contact")).toBeInTheDocument();
  });
  it("handles internal navigation correctly", () => {
    const scrollIntoViewMock = vi.fn();
    vi.spyOn(document, "querySelector").mockReturnValue({
      scrollIntoView: scrollIntoViewMock,
    } as unknown as Element);
    const homeLink = screen.getByText("NavBar.Home");
    fireEvent.click(homeLink);
    expect(document.querySelector).toHaveBeenCalledWith("#home");
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });
    vi.restoreAllMocks();
  });
  it("handles internal navigation correctly", () => {
    const scrollIntoViewMock = vi.fn();
    vi.spyOn(document, "querySelector").mockReturnValue({
      scrollIntoView: scrollIntoViewMock,
    } as unknown as Element);
    const homeLink = screen.getByText("NavBar.About");
    fireEvent.click(homeLink);
    expect(document.querySelector).toHaveBeenCalledWith("#about");
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });
    vi.restoreAllMocks();
  });
  it("handles internal navigation correctly", () => {
    const scrollIntoViewMock = vi.fn();
    vi.spyOn(document, "querySelector").mockReturnValue({
      scrollIntoView: scrollIntoViewMock,
    } as unknown as Element);
    const homeLink = screen.getByText("NavBar.Projects");
    fireEvent.click(homeLink);
    expect(document.querySelector).toHaveBeenCalledWith("#projects");
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });
    vi.restoreAllMocks();
  });
  it("handles internal navigation correctly", () => {
    const scrollIntoViewMock = vi.fn();
    vi.spyOn(document, "querySelector").mockReturnValue({
      scrollIntoView: scrollIntoViewMock,
    } as unknown as Element);
    const homeLink = screen.getByText("NavBar.Contact");
    fireEvent.click(homeLink);
    expect(document.querySelector).toHaveBeenCalledWith("#contact");
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });
    vi.restoreAllMocks();
  });
  it("toggles menu icon on click", () => {
    const menuButton = document.querySelector(`button[class*="nav_icon"]`);
    if (!menuButton) {
      throw new Error("Menu button not found");
    }
    fireEvent.click(menuButton);
    expect(screen.getByText("MenuCloseIcon")).toBeInTheDocument();
    fireEvent.click(menuButton);
    expect(screen.getByText("MenuOpenIcon")).toBeInTheDocument();
  });
});
