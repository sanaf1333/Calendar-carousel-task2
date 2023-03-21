import React, {Component} from "react";
import Navbar from "./navbar";
import DateCard from "./date-card";
import CardCarousel from "./card-carousel";
interface AppProps {
    message?: string
}

interface AppState{
    rendered: boolean
}
class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            rendered: false,
        };
    }
 
    render() {
        const today: Date = new Date();

        const daysInMonth: number = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        const firstDayOfMonth: number = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

        const calendarDays: { month: string; date: string; day: string }[] = [];

        for (let i = 1; i <= daysInMonth; i++) {
            const day: string = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][((firstDayOfMonth + i - 1) % 7)];
            const month: string = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(today);
            calendarDays.push({ month, date: i.toString(), day });
        }
        return (
            <div>
                <h1>{this.props.message}</h1>
                <h1>hell</h1>
                <Navbar date="helloo" />
                <DateCard month="July" date="23" day="Monday" />
                <CardCarousel
                    cards={calendarDays}
                    />

            </div>
        );
    }
}
export default App;