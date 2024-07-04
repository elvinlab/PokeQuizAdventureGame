<template>
  <div
    id="static-modal"
    data-modal-backdrop="static"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ $t("instructions.title") }}
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="static-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5 space-y-4">
          <p
            class="text-base leading-relaxed text-gray-500 dark:text-gray-200"
          >
          <ol class="list-decimal list-inside space-y-1" v-if="isSpanish">
            <li>
              <strong>Mira la Sombra</strong> 👀 - Observa la silueta del
              Pokémon en la pantalla.
            </li>
            <li>
              <strong>Adivina el Pokémon</strong> 🤔 - Piensa en qué Pokémon
              podría ser basándote en su forma.
            </li>
            <li>
              <strong>Escribe tu Respuesta</strong> 📝 - Escribe el nombre del
              Pokémon en el cuadro de texto.
            </li>
            <li>
              <strong>Envía tu Respuesta</strong> 📤 - Presiona el botón para
              enviar tu respuesta.
            </li>
            <li>
              <strong>Descubre si Tienes Razón</strong> 🎉 - Descubre si tu
              suposición es correcta. ¡Buena suerte!
            </li>
          </ol>
          <ol class="list-decimal list-inside space-y-1" v-else>
            <li>
              <strong>Look at the Shadow</strong> 👀 - Observe the silhouette of
              the Pokémon on the screen.
            </li>
            <li>
              <strong>Guess the Pokémon</strong> 🤔 - Think about which Pokémon
              it could be based on its shape.
            </li>
            <li>
              <strong>Type Your Answer</strong> 📝 - Type the name of the
              Pokémon in the text box.
            </li>
            <li>
              <strong>Submit Your Answer</strong> 📤 - Press the button to
              submit your answer.
            </li>
            <li>
              <strong>Find Out if You’re Right</strong> 🎉 - Discover if your
              guess is correct. Good luck!
            </li>
          </ol>
        </p>
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            data-modal-hide="static-modal"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
          {{ $t("instructions.buttonPlay") }}
          </button>
  
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    isSpanish() {
      return this.$i18n.locale.startsWith("es");
    },
  },
};
</script>
