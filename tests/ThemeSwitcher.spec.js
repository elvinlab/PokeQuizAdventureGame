import { mount } from "@vue/test-utils";
import ThemeSwitcher from "@/components/control/ThemeSwitcher.vue";

describe("ThemeSwitcher", () => {
  beforeEach(() => {
    localStorage.clear(); // Limpiar localStorage antes de cada prueba
  });

  it("renders with light theme initially", async () => {
    const wrapper = mount(ThemeSwitcher);

    // Verificar estado inicial
    expect(wrapper.vm.isDark).toBe(false);
    expect(wrapper.find("button").text()).toBe("🌑"); // Asumiendo que el texto es "🌑" para tema claro
  });

  it("loads theme preference from localStorage on mount", async () => {
    // Establecer preferencia de tema en localStorage
    localStorage.setItem("theme", "dark");

    const wrapper = mount(ThemeSwitcher);

    // Verificar si el componente refleja la preferencia de localStorage
    expect(wrapper.vm.isDark).toBe(true);
    expect(wrapper.find("button").text()).toBe("🌑"); // Verificar que se carga correctamente el tema oscuro
  });

  it("saves theme preference to localStorage when toggled", async () => {
    const wrapper = mount(ThemeSwitcher);

    // Simular clic en el botón para cambiar el tema
    await wrapper.find("button").trigger("click");

    // Verificar si la preferencia de tema se guarda correctamente en localStorage
    expect(localStorage.getItem("theme")).toBe("dark");

    // Hacer clic nuevamente para alternar de nuevo
    await wrapper.find("button").trigger("click");

    // Verificar si la preferencia de tema se actualiza correctamente en localStorage
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
