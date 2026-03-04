import runTests from "../tests/runTests.js";
import StorageManager from "./dataStorage.js";
import appSettings from "./settings.js";
import createMenu from "./settingsMenu.js";

// Load user settings from localStorage when the application starts
appSettings.loadSettings();

// Load all saved calendar events from localStorage when the application starts
const allEvents = StorageManager.loadAllEvents();

createMenu();

// runTests();
