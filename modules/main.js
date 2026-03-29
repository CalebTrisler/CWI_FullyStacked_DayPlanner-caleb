// import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/baseStyling.css";
import "../styling/calendar.css";
import "../styling/dayCalendar.css";
import "../styling/eventForm.css";
import "../styling/weeklyCalendar.css";

import StorageManager from "./dataStorage.js";
import appSettings from "./settings.js";
import createSettingsMenu from "./settingsMenu.js";

import initTodayButton from "./todayButton.js";

import { initializeEventManager } from "./eventManager.js";

import { loadWeatherDisplay } from "./weatherDisplay.js";

import runTests from "../tests/runTests.js";
import { initializeCalendarUI } from "./calendar/calendar-ui";

// Load events and user settings from localStorage when the application starts
const allEvents = StorageManager.loadAllEvents();
appSettings.loadSettings();

createSettingsMenu();

initializeEventManager();

// Initialize and render all of the calendar UI components (e.g. display (view) buttons, navigation buttons, and the full calendar)
initializeCalendarUI(allEvents);

initTodayButton();
loadWeatherDisplay();

// runTests();
