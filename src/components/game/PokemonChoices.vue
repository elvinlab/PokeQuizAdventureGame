<template>
  <div class="flex justify-center">
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mt-10">
      <li
        v-for="(pokemon, index) in pokemons"
        :key="index"
        @click="$emit('selection-pokemon', pokemon)"
        class="bg-white rounded-lg p-2 shadow-md border border-gray-300 cursor-pointer overflow-hidden transition duration-300 transform hover:scale-105"
      >
        {{ pokemon }}
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
