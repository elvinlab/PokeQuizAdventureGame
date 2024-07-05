<template>
  <div class="max-w-1280 mx-auto p-8 pt-14 text-center">
    <Loading v-if="!currentPokemon" />
    <div v-else>
      <h1
        class="text-4xl font-bold mb-4 text-red-800 dark:text-blue-200 animate__animated animate__pulse animate__infinite infinite"
      >
        {{ $t("game.title") }} 👀
      </h1>
      <PokemonArt :pokemonId="currentPokemon.id" :showPokemon="showPokemon" />
      <PokemonChoices
        :pokemons="pokemonsChoices"
        @select-currentPokemon="checkAnswer"
      />

      <template v-if="showAnswer">
        <h2
          class="rounded animate__animated animate__backInRight text-dark-800 dark:text-blue-200 text-xl font-bold mb-2 mt-4 bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {{ msg }}
        </h2>
        <button
          @click="newPokemonGame"
          class="bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded animate__animated animate__backInUp animate__delay-1s"
        >
          🎮 {{ $t("game.newGame") }} 🎲
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import PokemonArt from "@/components/game/PokemonArt.vue";
import PokemonChoices from "@/components/game/PokemonChoices.vue";
import getPokemon from "@/helpers/pokemonService.js";
import Loading from "@/components/misc/Loading.vue";

export default {
  components: {
    Loading,
    PokemonArt,
    PokemonChoices,
  },
  data() {
    return {
      currentPokemon: null,
      pokemonsChoices: [],
      showPokemon: false,
      showAnswer: false,
      msg: "",
    };
  },
  methods: {
    async startGame() {
      this.currentPokemon = await getPokemon();
      console.log(this.currentPokemon.name);
      this.pokemonsChoices = [this.currentPokemon.name];
      this.choices();
    },

    async choices() {
      while (this.pokemonsChoices.length < 4) {
        const newPoke = await getPokemon();
        if (!this.pokemonsChoices.includes(newPoke.name)) {
          this.pokemonsChoices.push(newPoke.name);
        }
      }
      this.shuffleArray();
    },

    shuffleArray() {
      for (let i = this.pokemonsChoices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.pokemonsChoices[i], this.pokemonsChoices[j]] = [
          this.pokemonsChoices[j],
          this.pokemonsChoices[i],
        ];
      }
    },
    checkAnswer(currentPokemon) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (currentPokemon === this.currentPokemon.name) {
        this.msg = `✅ ${this.$t("game.correctAnswer")} ${
          this.currentPokemon.name
        }!`;
      } else {
        this.msg = `❌ ${this.$t("game.wrongAnswer")} ${
          this.currentPokemon.name
        }!`;
      }
    },
    newPokemonGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonsChoices = [];
      this.currentPokemon = null;
      this.startGame();
    },
  },

  created() {
    this.startGame();
  },
};
</script>
