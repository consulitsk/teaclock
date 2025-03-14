# TeaClock

TeaClock is a simple web-based tea brewing timer that helps users track the cooling and brewing times of their tea. The application is built using HTML, Tailwind CSS, and jQuery and is designed as a Progressive Web App (PWA) for offline use.

## Features

- **Water Cooling Timer**: Tracks the time needed for hot water (100°C) to cool down to 80°C.
- **Tea Brewing Timer**: Allows users to select different brewing durations for various types of tea.
- **Progress Bars**: Visually represents the countdown of cooling and brewing times.
- **Sound Alarm**: Alerts users when the water is ready or when the tea is fully brewed.
- **PWA Support**: Works offline with a service worker and can be installed on mobile devices.

## Installation & Usage

### Online Usage
Simply open `index.html` in a browser to start using TeaClock.

### Offline Usage
1. Open the website once while connected to the internet.
2. The PWA will cache necessary files for offline use.
3. Add TeaClock to your home screen (on mobile devices) for a native-like experience.

## Technologies Used

- **HTML5** for structuring the web page.
- **Tailwind CSS** for styling.
- **jQuery** for interactivity and DOM manipulation.
- **JavaScript** for timers and service worker implementation.
- **Progressive Web App (PWA)** support with a service worker and manifest file.

## Files in the Repository

- `index.html` - Main interface with cooling and brewing timers.
- `service-worker.js` - Enables offline capabilities through caching.
- `manifest.json` - Defines metadata for PWA functionality.
- `alarm.mp3` - Sound file used for notifications.

## How It Works

1. The user starts the **water cooling timer**, which counts down from 8 minutes.
2. Once the countdown ends, an alarm sounds, and the user can confirm that the water is cooled.
3. The user selects a **brewing time** from predefined options (2, 3, 5, 7, or 10 minutes).
4. The brewing timer starts, displaying the remaining time and progress.
5. When brewing completes, an alarm sounds, notifying the user that their tea is ready.

## PWA Functionality

- The `service-worker.js` caches the essential files for offline access.
- The `manifest.json` enables installation as a standalone app on mobile devices.

## Contributing
Feel free to fork this repository, suggest improvements, or report issues.

## License
This project is open-source and available under the MIT License.

---
Enjoy your perfect cup of tea with TeaClock! 🍵

