import type { AllDayDisplayItem } from "./all-day-display-items";

function CalendarAllDayDisplay({ items }: { items: AllDayDisplayItem[] }) {
  // Do not render the display if there are no all-day items.
  if (items.length === 0) {
    return null;
  }

  // For now, keep the display small and only show the first two items.
  const visibleItems = items.slice(0, 2);

  return (
    <div className="allDayDisplay w-100 px-1 py-1">
      <div className="d-flex flex-column gap-2 w-100">
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className="px-2 py-1 border rounded bg-body-tertiary text-center fw-bold "
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export { CalendarAllDayDisplay };
