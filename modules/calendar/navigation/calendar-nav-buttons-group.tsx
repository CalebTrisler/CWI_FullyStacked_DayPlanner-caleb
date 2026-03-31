import CalendarNavButton from "../navigation/calendar-nav-button";

/** Minimal shape: nav only mutates viewDate on this object (same reference as calendar-ui’s calendarState). */
type CalendarNavCalendarState = {
  viewDate: Date;
};

type CalendarNavButtonsGroupProps = {
  calendarState: CalendarNavCalendarState;
  onRender: () => void;
};

/**
 * A component that represents a group of buttons to navigate the calendar by one day, week, or month.
 * @param calendarState - Shared state object; viewDate is updated in place on navigate.
 * @param onRender - Function to call when a button is clicked.
 * @returns The JSX element
 */
function CalendarNavButtonsGroup({
  calendarState,
  onRender,
}: CalendarNavButtonsGroupProps) {
  return (
    <>
      {/* Go to previous day/week/month */}
      <CalendarNavButton
        calendarState={calendarState}
        direction="subtract"
        onRender={onRender}
      >
        <img src="./assets/icons/chevron-left.svg" />
      </CalendarNavButton>
      {/* Go to next day/week/month */}
      <CalendarNavButton
        calendarState={calendarState}
        direction="add"
        onRender={onRender}
      >
        <img src="./assets/icons/chevron-right.svg" />
      </CalendarNavButton>
    </>
  );
}

export default CalendarNavButtonsGroup;
