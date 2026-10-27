# Mono Deck

Android-to-macOS Touch Bar-inspired control surface. Initial prototype: a phone browser interface with a local Mac companion. No native APK yet.

## Run

Install Node.js 20+, then on macOS run `npm start`. Visit the displayed local network URL from Android on the same trusted Wi-Fi. Enter the pairing token shown in the Mac terminal in the Connect screen.

Grant the Mac terminal Accessibility permissions in System Settings → Privacy & Security → Accessibility to use keyboard shortcuts. Do not expose the port to the Internet.

## Tests

Run `npm test`. Live macOS and Android end-to-end verification still required.

## Architecture

- `server.mjs`: local Mac HTTP controller and application launcher
- `public/index.html`: touch-first phone interface
- `test.mjs`: security and API tests

Inspired by [MTMR](https://github.com/Toxblh/MTMR), MIT license. Original implementation; no upstream code bundled.
