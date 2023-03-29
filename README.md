# Calendar-Carousel

![calendar-carousel-API](https://dev-portal.carbonteq.com/assets/images/calendar-1cfb9243f6a61a44033ca1b28524889d.gif)

## API
> <CalendarCarousel />

## CalendarCarousel Props

| Property          | Type                                                               | Default            | Description                                                       | 
|-------------------|--------------------------------------------------------------------|--------------------|-------------------------------------------------------------------|
| cardStyle         | interface                                                          |                    | It includes various props for the styling of card                 |
| cardsInRow        | number                                                             | 3                  | Number of cards you want to show in a row                         |
| disabledDates     | { date: string; month: string; year: number; name: string }[]      | DisabledDates[]    | Any holidays or disabled dates that you want to add. Events cannot be added on disabled dates|       
| onClickAddEvent   |  () => void                                                        |                    | Returns event date, month, year, time, duration                   |
| availableTimeSlots| {value: string; label: string; disabled: boolean} []               | availableTimeSlots[]| Time slots for the time dropdowm. Time slot can be disabled by setting disable: true} |                 


## CalendarCarousel cardStyle

| Property              | Type     | Default        | Description                                                |
|-----------------------|----------|----------------|------------------------------------------------------------|
| headerColor           | string   | #eb4c34        | The header color for card i.e. background color for month  |
| monthColor            | string   | white          | Color for displaying month                                 | 
| dayColor              | string   | gray           | Color for displaying date                                  |       
| dateColor             | string   | gray           | Color for displaying day                                   |
| cardBackgroundColor   | string   | white          | Background color for card                                  |
| cardWidth             | number   | 200            | Width of the card                                          |
| disabledColor         | string   | gray           | Card header color if it is disabled                        |
| selectedBorder        | string   | 1px solid gray | Border styling when card is selected                       |

### Usage
> <CalendarCarousel cardStyle={{headerColor: 'blue'}} />

## CalendarCarousel holiday

Example array:
| disabledDates default array                                                            |
|-----------------------------------------------------------------------------------|
|export const holiday: {date:string; month: string; year: number; name: string}[]=[ |
|   { date: "1", month: "January", year: 2023, name: "New Year's Day" },            |
|   { date: "14", month: "April", year: 2023, name: "Good Friday" },                |
|   { date: "29", month: "march", year: 2023, name: "Mother's Day" },               |
|   { date: "1", month: "May", year: 2023, name: "Labor Day" },                     |
|   { date: "14", month: "August", year: 2023, name: "Independence" },              |
|];                                                                                 |

### Usage 
> <CalendarCarousel holiday={holidays} />

## CalendarCarousel cardsInRow

### Usage



