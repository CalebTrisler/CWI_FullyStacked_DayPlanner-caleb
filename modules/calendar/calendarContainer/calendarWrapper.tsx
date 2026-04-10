import { useState, useEffect } from "react";
import CalendarView from "./calendarView"
import appState, { useAppState } from "../../appState";

/**
 * calendarWrapper connects appState with the calendar UI.
 * 
 * It uses the useAppState() hook to subscribe to appState changes.
 * Whenever appState changes (view changed, date changed, event added/edited/deleted),
 * React automatically re-renders this component with the latest values.
 */

export default function calendarWrapper() {
	/**
	 * Subscribe to appState changes.
	 * snapshot contains: { allEventsByDate, calendarView, dateView }
	 * 
	 * React will automatically re-render this component whenener
	 * appState.notifyListeners() is called (on every state change).
	 */
	const snapshot = useAppState();

	/**
	 * Tracks the duration of a calendar time slot in minutes.
	 * Defaults to 60 (hourly)
	 */
	const [slotDuration, setSlotDuration] = useState<number>(60);

	// Listen to the slot duration dropdown that exist in index.html
	useEffect(() => {
		const slotSelect = document.getElementById(
			"slotDurationSelect",
		) as HTMLSelectElement | null;

		if (!slotSelect) return;

		// Initializes state with the dropdown's current value on mount
		setSlotDuration(Number(slotSelect.value));

		// Update state whenever the user selects a new duration
		const handleChange = () => {
			setSlotDuration(Number(slotSelect.value));
		};

		slotSelect.addEventListener("change", handleChange);

		// removes the listener if this component unmounts (prevents memory leaks)
		return () => {
			slotSelect.removeEventListener("change", handleChange);
		};
	}, []);

	// Get only the events for the currently viewed day.
	const eventsForViewDate = appState.getEventsByDate(snapshot.dateView);

	return (
		<CalendarView 
			view={snapshot.calendarView}
			events={eventsForViewDate}
			viewDate={appState.dateViewObject}
			slotDuration={slotDuration}
		/>
	);

}