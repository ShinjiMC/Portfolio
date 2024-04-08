import { fireEvent, render, screen } from "@testing-library/react";
import Hero from "./Hero";
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

describe("Hero", () => {
  beforeEach(() => {
    render(<Hero />);
  });
  it("render correctly", () => {
    expect(screen.getByText("Hero.Greatting")).toBeInTheDocument();
    expect(screen.getByText("Hero.Description")).toBeInTheDocument();
    expect(screen.getByText("Hero.Hire")).toBeInTheDocument();
    expect(screen.getByText("Hero.Download")).toBeInTheDocument();
  });
  it("handles internal navigation correctly", () => {
    const scrollIntoViewMock = vi.fn();
    vi.spyOn(document, "querySelector").mockReturnValue({
      scrollIntoView: scrollIntoViewMock,
    } as unknown as Element);
    const homeLink = screen.getByText("Hero.Hire");
    fireEvent.click(homeLink);
    expect(document.querySelector).toHaveBeenCalledWith("#contact");
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });
    vi.restoreAllMocks();
  });
});
