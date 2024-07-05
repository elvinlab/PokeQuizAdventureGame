import { shallowMount } from "@vue/test-utils";
import PokemonArt from "@/components/game/PokemonArt.vue";

describe("PokemonArt.vue", () => {
  it("renders the correct image when showPokemon is false", () => {
    const pokemonId = 1;
    const wrapper = shallowMount(PokemonArt, {
      propsData: {
        pokemonId,
        showPokemon: false,
      },
    });

    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`
    );
    expect(img.classes()).toContain("w-48");
    expect(img.classes()).toContain("h-48");
    expect(img.classes()).toContain("brightness-0");
    expect(img.classes()).toContain("animate__animated");
    expect(img.classes()).toContain("animate__bounce");
    expect(img.classes()).toContain("animate__infinite");
    expect(img.classes()).toContain("animate__delay-2s");
  });

  it("renders the correct image when showPokemon is true", () => {
    const pokemonId = 1;
    const wrapper = shallowMount(PokemonArt, {
      propsData: {
        pokemonId,
        showPokemon: true,
      },
    });

    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`
    );
    expect(img.classes()).toContain("w-60");
    expect(img.classes()).toContain("h-60");
    expect(img.classes()).toContain("animate__heartBeat");
  });
});
