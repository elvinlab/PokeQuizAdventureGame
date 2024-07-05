<template>
  <div class="flex justify-center">
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md sm:mt-20">
      <li
        v-for="(pokemon, index) in pokemons"
        :key="index"
        @click="$emit('select-currentPokemon', pokemon)"
        class="bg-white rounded-lg p-1 sm:p-2 shadow-md text-sm sm:text-lg border border-gray-300 cursor-pointer overflow-hidden transition duration-300 transform hover:scale-105 text-red-900 font-bold hover:text-red-700"
      >
        {{ `${pokemon.charAt(0).toUpperCase()}${pokemon.slice(1)}` }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
};
</script>
