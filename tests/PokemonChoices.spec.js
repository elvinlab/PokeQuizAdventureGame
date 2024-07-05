import { shallowMount } from "@vue/test-utils";
import PokemonChoices from "@/components/game/PokemonChoices.vue";

describe("PokemonChoices.vue", () => {
  it("emits select-currentPokemon event when a Pokemon is clicked", async () => {
    const pokemons = ["bulbasaur", "charmander", "squirtle"];

    const wrapper = shallowMount(PokemonChoices, {
      propsData: {
        pokemons,
      },
    });

    const pokemonItems = wrapper.findAll("li");
    await pokemonItems[0].trigger("click");

    expect(wrapper.emitted("select-currentPokemon")).toBeTruthy();
    expect(wrapper.emitted("select-currentPokemon").length).toBe(1);
    expect(wrapper.emitted("select-currentPokemon")[0]).toEqual(["bulbasaur"]);
  });
});
