import { formatMonth } from "./format-date";

export function calculatePrevMonth(month: string, year: number): { month: string; date: string; day: string; year: number }[] {
    const prevMonthDate: Date = new Date(`${year}-${month}-01`);

    prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);

    if (prevMonthDate.getMonth() === 11) {
        prevMonthDate.setFullYear(prevMonthDate.getFullYear());
        year = prevMonthDate.getFullYear();
    }
    const daysInMonth: number = new Date(prevMonthDate.getFullYear(), prevMonthDate.getMonth(), 0).getDate();
    const firstDayOfMonth: number = new Date(prevMonthDate.getFullYear(), prevMonthDate.getMonth(), 1).getDay();

    const calendarDays: { month: string; date: string; day: string; year: number }[] = [];

    for (let i = 1; i <= daysInMonth; i++) {
        const day: string = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][((firstDayOfMonth + i - 1) % 7)];
        const month: string = formatMonth(prevMonthDate)
        calendarDays.push({ month, date: i.toString(), day, year });
    }

    return calendarDays;
}