import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/baseStyling.css";
import "../styling/calendar.css";
import "../styling/dayCalendar.css";
import "../styling/eventForm.css";
import "../styling/weeklyCalendar.css";

import appState from "./appState";
import appSettings from "./settings";
import createSettingsMenu from "./settingsMenu";

import initTodayButton from "./todayButton.js";
import { initializeEventManager } from "./eventManager";
import { initializeCalendarUI } from "./calendar/calendar-ui";

import { loadWeatherDisplay } from "./weatherDisplay";

import runTests from "../tests/runTests.js";

appSettings.loadSettings();
createSettingsMenu();

initializeEventManager();

// Initialize and render all of the calendar UI components (e.g. display (view) buttons, navigation buttons, and the full calendar)
initializeCalendarUI();

initTodayButton();
loadWeatherDisplay();

// runTests();
