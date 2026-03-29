import { CalendarView } from "./calendar";

type CalendarHeaderDisplayProps = {
  state: {
    viewDate: Date;
    calendarView: "day" | "week" | "month" | string;
  };
};

/**
 * A component that represents the header date display (e.g. "March 28, 2026").
 * @param state - The state of the calendar.
 * @returns The JSX element
 */
function CalendarHeaderDisplay({ state }: CalendarHeaderDisplayProps) {
  // Get the viewing date and calendar view from the state.
  const { viewDate: viewingDate, calendarView } = state;

  return <span>{formatHeaderDate(viewingDate, calendarView)}</span>;
}

// Formats the header date based on the viewing date and calendar view
function formatHeaderDate(
  viewingDate: Date,
  calendarView: "day" | "week" | "month" | string,
): string {
  let headerDate = "";
  if (calendarView === CalendarView.DAY) {
    // Format the viewing date as a full date for day view
    headerDate = viewingDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } else if (calendarView === CalendarView.WEEK) {
    // Format the viewing date as a range of dates for week view
    const end = new Date(viewingDate);
    end.setDate(end.getDate() + 6);
    headerDate = `${viewingDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - ${end.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
  } else if (calendarView === CalendarView.MONTH) {
    // Format the viewing date as a full month for month view
    headerDate = viewingDate.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  } else {
    headerDate = viewingDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  return headerDate;
}

export { CalendarHeaderDisplay };
