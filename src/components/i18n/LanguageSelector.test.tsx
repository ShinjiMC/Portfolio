import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it, describe, beforeEach, vi } from "vitest";
import LanguageSelector from "./LanguageSelector";

// Mock de useTranslation
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: {
      changeLanguage: vi.fn(),
    },
  }),
}));

describe("LanguageSelector", () => {
  beforeEach(() => {
    render(<LanguageSelector />);
  });

  it("render correctly", () => {
    const toggleButton = document.querySelector(
      'button[class*="_button_main_"]'
    );
    if (!toggleButton) throw new Error("Not found toggle button");
    fireEvent.click(toggleButton);
    const allDropdownButtons = Array.from(
      document.querySelectorAll('button[class*="_dropdown_button_"]')
    );
    const spanishButton = allDropdownButtons.find(
      (button) => button.textContent === "Español"
    );
    expect(spanishButton).toBeInTheDocument();

    const englishButton = allDropdownButtons.find(
      (button) => button.textContent === "English"
    );
    expect(englishButton).toBeInTheDocument();
  });

  it("Change language", () => {
    const toggleButton = document.querySelector(
      'button[class*="_button_main_"]'
    );
    if (!toggleButton) throw new Error("Not found toggle button");
    fireEvent.click(toggleButton);
    const allDropdownButtons = Array.from(
      document.querySelectorAll('button[class*="_dropdown_button_"]')
    );
    const spanishButton = allDropdownButtons.find(
      (button) => button.textContent === "Español"
    );
    expect(spanishButton).toBeInTheDocument();
    fireEvent.click(spanishButton as Element);
    expect(screen.getByText("Español")).toBeInTheDocument();
    expect(screen.queryByText("English")).not.toBeInTheDocument();
  });
});
