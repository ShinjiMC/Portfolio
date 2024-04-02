import {
  render,
  queryByAttribute,
  screen,
  fireEvent,
} from "@testing-library/react";
import About from "./About";
import * as ReactI18next from "react-i18next";

const getById = queryByAttribute.bind(null, "id");

interface Translations {
  [language: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  ES: {
    "About.Title": "Sobre mí",
    "About.Description":
      "Soy un desarrollador con pasión por crear y desarrollar cosas nuevas. Siempre estoy buscando nuevos desafíos y oportunidades para aprender y crecer. Tengo experiencia en desarrollo web, desarrollo móvil, desarrollo de software, diseño UI/UX y desarrollo de juegos. Siempre estoy buscando nuevos desafíos y oportunidades para aprender y crecer.",
    "About.Skills": "Habilidades",
    "About.Education": "Educación",
    "About.Certifications": "Certificaciones",
    "TABDATA.ed1": "Colegio Salesiano Don Bosco de Arequipa",
    "TABDATA.ed2": "Universidad Nacional de San Agustín de Arequipa, Perú",
    "TABDATA.cert1": "Diseño Digital 2020 de FABLAB PERÚ",
  },
  EN: {
    "About.Title": "About Me",
    "About.Description":
      "I am a developer with a passion for creating and developing new things. I am always looking for new challenges and opportunities to learn and grow. I have experience in web development, mobile development, software development, UI/UX design, and game development. I am always looking for new challenges and opportunities to learn and grow.",
    "About.Skills": "Skills",
    "About.Education": "Education",
    "About.Certifications": "Certifications",
    "TABDATA.ed1": "College Salesiano Don Bosco of Arequipa",
    "TABDATA.ed2": "National University of San Agustin of Arequipa, Peru",
    "TABDATA.cert1": "Digital Design 2020 from FABLAB PERU",
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

describe("About component", () => {
  beforeEach(() => {
    currentLanguage = "EN";
  });
  test("renders without errors", () => {
    const result = render(<About />);
    expect(getById(result.container, "about"));
  });

  test("displays skills tab content by default", () => {
    render(<About />);
    expect(
      screen.getByText(translations[currentLanguage]["About.Title"])
    ).toBeInTheDocument();
    expect(
      screen.queryByText(translations[currentLanguage]["About.Description"])
    ).toBeInTheDocument();
    expect(
      screen.queryByText(translations[currentLanguage]["About.Skills"])
    ).toBeInTheDocument();
    expect(
      screen.queryByText(translations[currentLanguage]["About.Education"])
    ).toBeInTheDocument();
    expect(
      screen.queryByText(translations[currentLanguage]["About.Certifications"])
    ).toBeInTheDocument();
  });

  test("switches tab content correctly", () => {
    render(<About />);
    const educationButton = screen.getByText("Education", {
      selector: "button > p",
    });
    fireEvent.click(educationButton);
    expect(
      screen.getByText(translations[currentLanguage]["TABDATA.ed1"])
    ).toBeInTheDocument();
    expect(
      screen.getByText(translations[currentLanguage]["TABDATA.ed2"])
    ).toBeInTheDocument();

    const certificationsButton = screen.getByText("Certifications", {
      selector: "button > p",
    });
    fireEvent.click(certificationsButton);
    expect(
      screen.getByText(translations[currentLanguage]["TABDATA.cert1"])
    ).toBeInTheDocument();

    const skillsButton = screen.getByText("Skills", {
      selector: "button > p",
    });
    fireEvent.click(skillsButton);
    expect(screen.queryByText("Node.js")).toBeInTheDocument();
  });
});

describe("About component in Spanish", () => {
  beforeEach(() => {
    currentLanguage = "ES";
  });
  test("renders without errors", () => {
    const result = render(<About />);
    expect(getById(result.container, "about"));
  });

  test("displays skills tab content by default", () => {
    render(<About />);
    expect(
      screen.getByText(translations[currentLanguage]["About.Title"])
    ).toBeInTheDocument();
    expect(
      screen.queryByText(translations[currentLanguage]["About.Description"])
    ).toBeInTheDocument();
    expect(
      screen.queryByText(translations[currentLanguage]["About.Skills"])
    ).toBeInTheDocument();
    expect(
      screen.queryByText(translations[currentLanguage]["About.Education"])
    ).toBeInTheDocument();
    expect(
      screen.queryByText(translations[currentLanguage]["About.Certifications"])
    ).toBeInTheDocument();
  });

  test("switches tab content correctly", () => {
    render(<About />);
    const educationButton = screen.getByText("Educación", {
      selector: "button > p",
    });
    fireEvent.click(educationButton);
    expect(
      screen.getByText(translations[currentLanguage]["TABDATA.ed1"])
    ).toBeInTheDocument();
    expect(
      screen.getByText(translations[currentLanguage]["TABDATA.ed2"])
    ).toBeInTheDocument();

    const certificationsButton = screen.getByText("Certificaciones", {
      selector: "button > p",
    });
    fireEvent.click(certificationsButton);
    expect(
      screen.getByText(translations[currentLanguage]["TABDATA.cert1"])
    ).toBeInTheDocument();

    const skillsButton = screen.getByText("Habilidades", {
      selector: "button > p",
    });
    fireEvent.click(skillsButton);
    expect(screen.queryByText("Node.js")).toBeInTheDocument();
  });
});
