# ShrimpCounter website (React + Tailwind CSS)

A responsive Vite + React landing page inspired by the supplied ShrimpCounter light/dark app screenshots.

## Features
- React components and Tailwind CSS
- Dark navy / violet brand styling and a light/dark website toggle
- Custom 3D shrimp mascot used as logo and animated character
- Interactive phone mockup inspired by the actual app
- Small/Large seed selector, camera UI mockup, flash and zoom interactions
- OTA app/model update messaging
- Records, recents, calculator and camera feature highlights
- Responsive navigation, reveal animations, reduced-motion support
- Creator credit: Varun Padavala and mailto: padavalavarun@gmail.com

## Run locally
Install Node.js, then from this folder:

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
npm run preview
```

## Important before publishing
Open `src/App.jsx` and replace:

```js
const APK_URL = 'APK_URL'
```

with the actual APK download URL. Until then, the Download APK button scrolls to the download section and displays a reminder. The phone preview is an interactive visual mockup; it does not access the device camera or app data.

The mascot image is `public/assets/shrimp-mascot.png`. Fonts are loaded from Google Fonts.
