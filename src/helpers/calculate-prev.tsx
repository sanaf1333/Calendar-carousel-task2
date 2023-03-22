export function calculatePrevMonth(month:string, year:number){
    console.log("fun1 ", year);
    const nextMonthDate: Date = new Date(`${year}-${month}-01`);
   
    nextMonthDate.setMonth(nextMonthDate.getMonth() - 1);
   
    if (nextMonthDate.getMonth() === 0) {
        nextMonthDate.setFullYear(nextMonthDate.getFullYear());
        year=nextMonthDate.getFullYear();
        console.log("fun2 ", year);
    }
    const daysInMonth: number = new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth(), 0).getDate();
    const firstDayOfMonth: number = new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth(), 1).getDay();
    
    const calendarDays: { month: string; date: string; day: string; year:number }[] = [];

    for (let i = 1; i <= daysInMonth; i++) {
        const day: string = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][((firstDayOfMonth + i - 1) % 7)];
        const month: string = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(nextMonthDate);
        calendarDays.push({ month, date: i.toString(), day, year });
    }
    
    return calendarDays;
}