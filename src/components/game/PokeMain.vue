<template>
  <div class="max-w-1280 mx-auto p-8 pt-14 text-center">
    <div v-if="!pokemon" class="inset-0 flex items-center justify-center">
      <div class="flex items-center justify-center w-56 h-56">
        <div
          class="px-3 py-1 text-2xl font-medium leading-none text-center text-blue-800 animate-pulse dark:text-blue-200"
        >
          {{ $t("game.loading") }}
        </div>
      </div>
    </div>

    <div v-else>
      <h1
        class="text-4xl font-bold mb-4 text-blue-800 dark:text-blue-200 animate__animated animate__pulse animate__infinite infinite"
      >
        {{ $t("game.title") }}
      </h1>
      <PokemonArt :pokemonId="pokemon.id" :showPokemon="showPokemon" />
      <PokemonChoices
        :pokemons="pokemonsArr"
        @selection-pokemon="checkAnswer"
      />

      <template v-if="showAnswer">
        <h2 class="fade-in">{{ message }}</h2>
        <button @click="newPokemonGame">New Game</button>
      </template>
    </div>
  </div>
</template>

<script>
import PokemonArt from "@/components/game/PokemonArt.vue";
import PokemonChoices from "@/components/game/PokemonChoices.vue";
import getPokemon from "@/helpers/pokemonService.js";

export default {
  components: {
    PokemonArt,
    PokemonChoices,
  },
  data() {
    return {
      pokemonsArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async displayPokemon() {
      this.pokemon = await getPokemon();
      console.log(this.pokemon.name);
      this.pokemonsArr = [this.pokemon.name];
      this.choices();
    },

    async choices() {
      while (this.pokemonsArr.length < 4) {
        const newPoke = await getPokemon();
        if (!this.pokemonsArr.includes(newPoke.name)) {
          this.pokemonsArr.push(newPoke.name);
        }
      }
      this.shuffleArray();
    },

    shuffleArray() {
      for (let i = this.pokemonsArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.pokemonsArr[i], this.pokemonsArr[j]] = [
          this.pokemonsArr[j],
          this.pokemonsArr[i],
        ];
      }
    },
    checkAnswer(pokemon) {
      this.showPokemon = true;
      this.showAnswer = true;

      console.log(pokemon);
      if (pokemon === this.pokemon.name) {
        this.message = `Correct! It's ${this.pokemon.name}!`;
      } else {
        this.message = `Wrong answer! The pokemon was ${this.pokemon.name}!`;
      }
    },
    newPokemonGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonsArr = [];
      this.pokemon = null;
      this.displayPokemon();
    },
  },

  created() {
    this.displayPokemon();
  },
};
</script>
