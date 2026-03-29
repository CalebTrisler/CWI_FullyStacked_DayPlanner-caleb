import CalendarNavButton from "../navigation/calendar-nav-button";

type CalendarNavButtonsGroupProps = {
  state: {
    viewDate: Date;
    calendarView: string;
  };
  onRender: () => void;
};

/**
 * A component that represents a group of buttons to navigate the calendar by one day, week, or month.
 * @param state - The state of the calendar.
 * @param onRender - Function to call when a button is clicked.
 * @returns The JSX element
 */
function CalendarNavButtonsGroup({
  state,
  onRender,
}: CalendarNavButtonsGroupProps) {
  return (
    <>
      {/* Go to previous day/week/month */}
      <CalendarNavButton state={state} direction="subtract" onRender={onRender}>
        <img src="./assets/icons/chevron-left.svg" />
      </CalendarNavButton>
      {/* Go to next day/week/month */}
      <CalendarNavButton state={state} onRender={onRender}>
        <img src="./assets/icons/chevron-right.svg"/>
      </CalendarNavButton>
    </>
  );
}

export default CalendarNavButtonsGroup;
