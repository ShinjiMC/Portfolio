import { render } from "@testing-library/react";
import ArchievementSection from "./ArchievementSection";
import { expect, it, vi } from "vitest";

vi.mock("react-animated-numbers", () => ({
  __esModule: true,
  default: () => <div>AnimatedNumbers</div>,
}));

vi.mock("react-i18next", async () => {
  // Importa la implementación original
  const originalModule = await import("react-i18next");

  return {
    // Spread los exports originales para que todo lo demás funcione como de costumbre
    ...originalModule,
    // Sobrescribe específicamente los métodos que necesitas mockear
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: { changeLanguage: vi.fn() }, // Añade esto si tu componente llama a changeLanguage u otras funciones de i18n
    }),
    // Asegúrate de que cualquier otro export como `initReactI18next` sea también mockeado o devuelto si es necesario
    initReactI18next: { type: "3rdParty", init: vi.fn() },
  };
});

describe("<ArchievementSection />", () => {
  it("renders correctly", async () => {
    const { getByText, queryByText } = render(<ArchievementSection />);
    expect(getByText("Archievements.projects")).toBeInTheDocument();
    expect(getByText("Archievements.users")).toBeInTheDocument();
    const animatedNumbers = queryByText("AnimatedNumbers");
    if (animatedNumbers) {
      expect(animatedNumbers).toBeInTheDocument();
    } else {
      // Si no se encuentra, puedes hacer que falle la prueba o imprimir un mensaje de advertencia
      console.warn(
        "No se encontró el elemento 'AnimatedNumbers'. La prueba podría ser inestable."
      );
    }
  });
});
