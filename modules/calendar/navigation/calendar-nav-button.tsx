import React from "react";
import { CalendarView } from "../calendar";

type CalendarNavButtonProps = {
  state: {
    viewDate: Date;
    calendarView: string;
  };
  direction?: "subtract" | "add"; // "add" means go to next day/week/month; "subtract" means go to previous day/week/month
  onRender: () => void;
  children: React.ReactNode;
};

/**
 * A component that represents a button to navigate the calendar by one day, week, or month.
 * @param children - The icon to be displayed on the button.
 * @param state - The state of the calendar.
 * @param direction - The direction to navigate the calendar.
 * @param onRender - Function to call when the button is clicked.
 * @returns The JSX element
 */
function CalendarNavButton({
  children, // This allows the parent component to pass in the icon to be displayed on the button
  state,
  direction = "add", // Default to going to next day/week/month
  onRender,
}: CalendarNavButtonProps) {
  // Handle click event to navigate the calendar by one day, week, or month
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent the default behavior of the button

    const delta = direction === "add" ? 1 : -1;

    switch (state.calendarView) {
      case CalendarView.DAY:
        state.viewDate = navigateDay(state.viewDate, delta);
        break;
      case CalendarView.WEEK:
        state.viewDate = navigateWeek(state.viewDate, delta);
        break;
      case CalendarView.MONTH:
        state.viewDate = navigateMonth(state.viewDate, delta);
        break;
      default:
        state.viewDate = navigateDay(state.viewDate, delta);
    }

    // Re-render the calendar
    onRender();
  };

  return (
    <button type="button" className="calendarNavButton" onClick={handleClick}>
      {children}
    </button>
  );
}

// Adds a single day to the view date
function navigateDay(date: Date, delta: number) {
  const newDate = new Date(date.getTime());
  newDate.setDate(newDate.getDate() + delta);
  return newDate;
}

// Adds a single week to the view date
function navigateWeek(date: Date, delta: number) {
  return navigateDay(date, delta * 7);
}

// Adds a single month to the view date
function navigateMonth(date: Date, delta: number) {
  const newDate = new Date(date.getTime());
  newDate.setMonth(newDate.getMonth() + delta);
  return newDate;
}

export default CalendarNavButton;