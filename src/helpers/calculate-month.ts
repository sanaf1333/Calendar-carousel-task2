import { formatMonth } from "./format-date";

export function calculateMonth(): { month: string; date: string; day: string; year: number }[] {
    let today: Date = new Date();
    const year = today.getFullYear();
    const daysInMonth: number = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const firstDayOfMonth: number = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    let calendarDays: { month: string; date: string; day: string; year: number }[] = [];

    for (let i = 1; i <= daysInMonth; i++) {
        const day: string = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][((firstDayOfMonth + i - 1) % 7)];
        const month: string = formatMonth(today);
        calendarDays.push({ month, date: i.toString(), day, year });
    }

    return calendarDays;
}