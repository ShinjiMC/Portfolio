import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
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
}));

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("render correctly", () => {
    expect(screen.getByText("Logo")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
