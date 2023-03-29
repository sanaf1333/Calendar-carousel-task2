export const formatMonth = (value: Date): string => {
    let monthString: string = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(value);
    return monthString;
}

export const formatDate = (month: string, date: string, year: number): string => {
    let dateString: string= `${month} ${date}, ${year}`;
    return dateString;
}