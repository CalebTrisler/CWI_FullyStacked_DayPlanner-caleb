import StorageManager from "./dataStorage.js";
import { initializeEventManager } from "./eventManager.js";

// Load all saved calendar events from localStorage when the application starts
const allEvents = StorageManager.loadAllEvents();

// Initialize listeners for the event manager
initializeEventManager();