export function searchDropdownDate(months: { month: string; date: string; day: string; year: number }[], selectedDropdown: string): number {

    let index: number = 0;
    for (let i = 0; i < months.length; i++) {
        let currentDate = `${months[i].month} ${months[i].date}, ${months[i].year}`;

        if (currentDate === selectedDropdown) {
            index = i;
        }
    }
    return index;
}