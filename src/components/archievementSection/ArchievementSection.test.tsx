import { render, screen } from "@testing-library/react";
import ArchievementSection from "./ArchievementSection";
import * as ReactI18next from "react-i18next";

interface Translations {
  [language: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  ES: {
    "Archievements.projects": "Proyectos",
    "Archievements.users": "Usuarios",
    "Archievements.awards": "Premios",
    "Archievements.years": "Años",
  },
  EN: {
    "Archievements.projects": "Projects",
    "Archievements.users": "Users",
    "Archievements.awards": "Awards",
    "Archievements.years": "Years",
  },
};

let currentLanguage = "EN";

vi.mock("react-i18next", async (importOriginal) => {
  const actual: typeof ReactI18next = await importOriginal();
  return Object.assign({}, actual, {
    useTranslation: () => ({
      t: (key: string) => translations[currentLanguage][key] || key,
    }),
    initReactI18next: actual.initReactI18next,
  });
});

describe("ArchievementSection in Spanish", () => {
  beforeEach(() => {
    currentLanguage = "ES";
  });

  test("renders correctly in Spanish", () => {
    render(<ArchievementSection />);
    expect(screen.getByText("Proyectos")).toBeInTheDocument();
    expect(screen.getByText("Usuarios")).toBeInTheDocument();
    expect(screen.getByText("Premios")).toBeInTheDocument();
    expect(screen.getByText("Años")).toBeInTheDocument();
  });
});

describe("ArchievementSection in English", () => {
  beforeAll(() => {
    currentLanguage = "EN";
  });

  test("renders correctly in English", () => {
    render(<ArchievementSection />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Awards")).toBeInTheDocument();
    expect(screen.getByText("Years")).toBeInTheDocument();
  });
});
