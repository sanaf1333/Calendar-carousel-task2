function calculatePrevMonth(month:string, year:string){
    const today: Date = new Date();
    today.setMonth(today.getMonth() + 1);
    if (today.getMonth() === 0) {
        today.setFullYear(today.getFullYear() + 1);
    }
    const daysInMonth: number = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const firstDayOfMonth: number = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    
        const calendarDays: { month: string; date: string; day: string }[] = [];

        for (let i = 1; i <= daysInMonth; i++) {
            const day: string = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][((firstDayOfMonth + i - 1) % 7)];
            const month: string = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(today);
            calendarDays.push({ month, date: i.toString(), day });
        }
}