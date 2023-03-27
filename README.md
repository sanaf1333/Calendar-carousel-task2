# Calendar-Carousel

![calendar-carousel-API](https://dev-portal.carbonteq.com/assets/images/calendar-1cfb9243f6a61a44033ca1b28524889d.gif)

## API
<CalendarCarousel />

## CalendarCarousel Props

| Props       | Type                                                               | Default      | Explaination 
|-------------|--------------------------------------------------------------------|--------------|-------------------------------------------------------------------|
| cardStyle   | interface                                                          |              | It includes various props for the styling of card                 |
| cardsInRow  | number                                                             | 3            | Number of cards you want to show in a row                         |
| holiday     | { date: string; month: string; year: number; name: string }[]      | holiday[]    | Any holidays or disabled dates that you want to add. Events cannot be added on disabled dates|                                                                                                       


## CalendarCarousel cardStyle

| Props                 | type     | default        |
|-----------------------|----------|----------------|
| headerColor           | string   | #eb4c34        |
| monthColor            | string   | white          |
| dayColor              | string   | gray           |
| dateColor             | string   | gray           |
| cardBackgroundColor   | string   | white          |
| cardWidth             | number   | 200            |
| disabledColor         | string   | gray           |
| selectedBorder        | string   | 1px solid gray |

Usage: <CalendarCarousel cardStyle={{headerColor: 'blue'}} />

##CalendarCarousel holiday

Example array:
export const holiday: {date:string; month: string; year: number; name: string}[]=[


];
export const holidays: { date: string; month: string; year: number; name: string }[] = [
    { date: "1", month: "January", year: 2023, name: "New Year's Day" },
    { date: "14", month: "April", year: 2023, name: "Good Friday" },
    { date: "29", month: "march", year: 2023, name: "Mother's Day" },
    { date: "1", month: "May", year: 2023, name: "Labor Day" },
    { date: "14", month: "August", year: 2023, name: "Independence" },
  ];
  
Usage: <CalendarCarousel holiday={holidays} />



