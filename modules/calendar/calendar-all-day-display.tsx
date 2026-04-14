import appState, { useAppState } from "../appState";
import { useAppSettings } from "../appSettings";
import { CalendarViews } from "../enumCalendarViews";

function CalendarAllDayDisplay() {
  /*Tie into useAppState and useAppSettings so the component can re-render
  when the view date or holiday display setting are changed*/

  const { dateView, calendarView } = useAppState();
  const { displayHolidays } = useAppSettings();

  //only show all-day display in dayView.
  if (calendarView !== CalendarViews.Day) {
    return null;
  }

  //only show holiday's in allDay if displayHolidays is true/ not false
  if (!displayHolidays) {
    return null;
  }

  const eventsForViewDate = appState.getEventsByDate(dateView);

  const allDayEvents = eventsForViewDate.filter(
    (event) =>
      event.UID.startsWith("holiday-") || event.UID.startsWith("allDay-"),
  );

  // Do not render the display if there aren't any events to display.
  if (allDayEvents.length === 0) {
    return null;
  }

  //this slice should keep it small and we can add nav later to move through more then 2.
  //currently no day has more then one holiday.  Add testing for multiple events on wednesday. ***
  const visibleItems = allDayEvents.slice(0, 2);

  return (
    <div className="allDayDisplay w-100 px-1 py-1">
      <div className="d-flex flex-column gap-2 w-100">
        {visibleItems.map((event) => (
          <div
            key={event.UID}
            className="px-2 py-1 border rounded bg-body-tertiary text-center fw-bold"
          >
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export { CalendarAllDayDisplay };
