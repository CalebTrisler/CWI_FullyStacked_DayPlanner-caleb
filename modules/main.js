import StorageManager from "./dataStorage.js";

// Load all saved calendar events from localStorage when the application starts
const allEvents = StorageManager.loadAllEvents();
