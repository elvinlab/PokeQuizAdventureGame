<div align="center">

![PokeQuizAdventureGame](./src/assets/banner.webp)

# PokeQuiz Adventure Game

**"Who's that Pokémon?" — a quiz game where you guess the Pokémon from its silhouette.**

[![Live demo](https://img.shields.io/badge/▶_Play_now-poke--quiz--adventure-e11d48?style=for-the-badge)](https://poke-quiz-adventure.netlify.app/)

![Vue 3](https://img.shields.io/badge/Vue_3-42b883?style=flat-square&logo=vuedotjs&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646cff?style=flat-square&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white) ![Jest](https://img.shields.io/badge/Tested_with_Jest-c21325?style=flat-square&logo=jest&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088ff?style=flat-square&logo=githubactions&logoColor=white)

</div>

## Screenshots

<table>
  <tr>
    <td width="50%"><img src="docs/screenshots/game-light.png" alt="Guess the Pokémon from its silhouette"></td>
    <td width="50%"><img src="docs/screenshots/answer.png" alt="Answer revealed after choosing"></td>
  </tr>
  <tr>
    <td align="center"><sub>Guess the Pokémon from its silhouette</sub></td>
    <td align="center"><sub>The answer is revealed after each pick</sub></td>
  </tr>
  <tr>
    <td colspan="2"><img src="docs/screenshots/game-dark.png" alt="Dark theme"></td>
  </tr>
  <tr>
    <td colspan="2" align="center"><sub>Dark theme</sub></td>
  </tr>
</table>

## Features

- 🎯 **Silhouette quiz** — a random Pokémon from the [PokéAPI](https://pokeapi.co/) with four possible answers.
- 🌗 **Light and dark themes** with a one-click switcher.
- 🌎 **English and Spanish** via `vue-i18n`.
- ✨ **Animated UI** built with Tailwind CSS, Flowbite and animate.css.
- 🧪 **Component tests** for the core game pieces with Jest and Vue Test Utils.
- 🚀 **CI/CD** — GitHub Actions build every push and publish versioned releases for development and production.

## Tech stack

| Area | Tools |
|------|-------|
| Framework | Vue 3, Vue Router, vue-i18n |
| Build | Vite, PostCSS |
| Styling | Tailwind CSS, Flowbite, animate.css |
| Data | Axios + PokéAPI |
| Testing | Jest, Vue Test Utils, jsdom |
| Delivery | GitHub Actions, Netlify |

## Project structure

```
src/
├── components/
│   ├── control/   ← theme and language switchers
│   ├── game/      ← quiz logic: main screen, artwork, choices
│   ├── misc/      ← instructions, loading state
│   └── ui/        ← layout, navbar, welcome message
├── helpers/       ← config and Pokémon service
├── i18n/          ← English and Spanish dictionaries
└── routes/
tests/             ← component specs
```

## Getting started

Requirements: [Node.js](https://nodejs.org/) 16+ and [pnpm](https://pnpm.io/installation).

```sh
git clone https://github.com/elvinlab/PokeQuizAdventureGame.git
cd PokeQuizAdventureGame
pnpm install
pnpm dev        # http://localhost:5173
```

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start the development server |
| `pnpm test` | Run the component tests |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview the production build |

## License

Made for learning and fun by [Elvin González](https://elvinlab.dev). Pokémon and Pokémon character names are trademarks of Nintendo.
