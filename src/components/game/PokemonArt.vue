<template>
  <div class="h-48 flex items-center justify-center mt-10">
    <img
      v-if="!showPokemon"
      :src="imgSrc"
      class="brightness-0 dark:invert h-48 select-none"
      alt="pokemon"
    />
    <img v-if="showPokemon" :src="imgSrc" class="fade-in" alt="pokemon" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>
