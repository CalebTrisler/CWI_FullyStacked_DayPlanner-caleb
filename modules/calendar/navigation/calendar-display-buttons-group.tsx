import CalendarDisplayButton from "../navigation/calendar-display-button";
import { CalendarView } from "../calendar";

type CalendarDisplayButtonsGroupProps = {
  activeView: "day" | "week" | "month" | string;
  // A function to call when a button is clicked. The parent gets to decide what to do within this function.
  onSelectView: (view: string) => void;
};

/**
 * A component that represents a group of buttons to change the calendar view.
 * @param activeView - The current view of the calendar.
 * @param onSelectView - Function to call when a button is clicked.
 * @returns The JSX element
 */
function CalendarDisplayButtonsGroup({
  activeView,
  onSelectView,
}: CalendarDisplayButtonsGroupProps) {
  return (
    <>
      {/* Day view button */}
      <CalendarDisplayButton
        calendarView={CalendarView.DAY}
        isActive={activeView === CalendarView.DAY}
        onClick={() => onSelectView(CalendarView.DAY)}
      />
      {/* Week view button */}
      <CalendarDisplayButton
        calendarView={CalendarView.WEEK}
        isActive={activeView === CalendarView.WEEK}
        onClick={() => onSelectView(CalendarView.WEEK)}
      />
      {/* Month view button */}
      <CalendarDisplayButton
        calendarView={CalendarView.MONTH}
        isActive={activeView === CalendarView.MONTH}
        onClick={() => onSelectView(CalendarView.MONTH)}
      />
    </>
  );
}

export default CalendarDisplayButtonsGroup;
