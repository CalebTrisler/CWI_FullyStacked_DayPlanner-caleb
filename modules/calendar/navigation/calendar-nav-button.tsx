import React from "react";
import appState from "../../appState";
import { CalendarViews } from "../../enumCalendarViews";

type CalendarNavButtonProps = {
  calendarState: { viewDate: Date };
  direction?: "subtract" | "add"; // "add" means go to next day/week/month; "subtract" means go to previous day/week/month
  onRender: () => void;
  children: React.ReactNode;
};

/**
 * A component that represents a button to navigate the calendar by one day, week, or month.
 * @param children - The icon to be displayed on the button.
 * @param calendarState - Shared state; viewDate is assigned on navigate (must be the same object calendar-ui uses).
 * @param direction - The direction to navigate the calendar.
 * @param onRender - Function to call when the button is clicked.
 * @returns The JSX element
 */
function CalendarNavButton({
  children, // This allows the parent component to pass in the icon to be displayed on the button
  calendarState,
  direction = "add", // Default to going to next day/week/month
  onRender,
}: CalendarNavButtonProps) {
  // Handle click event to navigate the calendar by one day, week, or month
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent the default behavior of the button

    const delta = direction === "add" ? 1 : -1;
    const current = calendarState.viewDate;

    // Read view mode at click time so Day/Week/Month toggles apply even if this subtree was not re-rendered.
    switch (appState.calendarView) {
      case CalendarViews.Day:
        calendarState.viewDate = navigateDay(current, delta);
        break;
      case CalendarViews.Week:
        calendarState.viewDate = navigateWeek(current, delta);
        break;
      case CalendarViews.Month:
        calendarState.viewDate = navigateMonth(current, delta);
        break;
      default:
        calendarState.viewDate = navigateDay(current, delta);
    }

    onRender();
  };

  return (
    <button type="button" id="calendarNavButton" className="btn btn-sm btn-primary d-flex justify-content-center align-items-center" onClick={handleClick}>
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