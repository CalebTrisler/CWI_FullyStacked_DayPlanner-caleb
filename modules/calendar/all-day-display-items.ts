import appState from "../appState";
import appSettings from "../appSettings";

type AllDayDisplayItem = {
  id: string;
  title: string;
  type: "holiday" | "allDayEvent";
};

/**
 * Builds the all-day display items for the currently viewed date.
 * For now, this only returns holiday events when holiday display is enabled.
 */
function getAllDayDisplayItems(): AllDayDisplayItem[] {
  if (!appSettings.displayHolidays) {
    return [];
  }

  const currentYear = appState.dateViewObject.getFullYear();
  appState.loadHolidayEventsForYear(currentYear);

  const currentDate = appState.dateView;
  const holidayEvents = appState.getHolidayEventsByDate(currentDate);

  return holidayEvents.map((holidayEvent) => ({
    id: holidayEvent.UID,
    title: holidayEvent.title,
    type: "holiday",
  }));
}

export type { AllDayDisplayItem };
export { getAllDayDisplayItems };
