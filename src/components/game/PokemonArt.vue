<template>
  <div
    class="h-48 flex items-center justify-center sm:mt-10 animate__animated animate__backInLeft"
  >
    <img
      v-if="!showPokemon"
      :src="imgSrc"
      class="brightness-0 dark:invert w-24 h-24 sm:w-48 sm:h-48 select-none pointer-events-none animate__animated animate__bounce animate__infinite infinite animate__delay-2s"
      alt="Pokemon"
    />
    <img
      v-if="showPokemon"
      :src="imgSrc"
      class="w-24 h-24 sm:w-60 sm:h-60 animate__heartBeat"
      alt="Pokemon"
    />
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
