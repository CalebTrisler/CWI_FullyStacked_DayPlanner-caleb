import calendarNavigationFunctionsTest from "./use-calendar-nav-button_test";
import eventTests from "./classCalendarEvent_test";
import storageTests from "./dataStorage_test";
import { appSettingsTests } from "./appSettings_test";
import appStateTests from "./appState_test";

function runTests() {
  eventTests();
  storageTests();
  appStateTests();
  appSettingsTests();
  calendarNavigationFunctionsTest();
}

export default runTests;
