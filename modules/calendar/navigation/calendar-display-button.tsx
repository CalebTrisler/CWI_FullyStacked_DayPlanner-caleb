type CalendarDisplayButtonProps = {
  calendarView: string; // Make sure the calendar view is a valid view based upon CalendarView enum
  isActive: boolean;
  onClick: () => void; // Function to re-render the calendar
};

/**
 * A component that represents a button to change the calendar view.
 * @param calendarView - The view to display.
 * @param isActive - Whether the button is active.
 * @param onClick - Function to call when the button is clicked.
 * @returns void
 */
function CalendarDisplayButton({
  calendarView,
  isActive,
  onClick,
}: CalendarDisplayButtonProps) {
  // day -> Day; week -> Week; month -> Month;
  const label = calendarView.charAt(0).toUpperCase() + calendarView.slice(1);

  return (
    <button
      type="button"
      className={`displayChangeButton ${isActive ? "highlightDisplayButton" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default CalendarDisplayButton;
