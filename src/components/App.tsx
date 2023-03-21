import React, {Component} from "react";
import Sana from './sana.jsx';
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
        return (
            <div>
                <h1>{this.props.message}</h1>
                <h1>hell</h1>
                <Sana/>
                <Navbar date="helloo" />
                <DateCard month="July" date="23" day="Monday" />
                <CardCarousel
                    cards={[
                        { month: 'January', date: '01', day: 'Monday' },
                        { month: 'January', date: '02', day: 'Tuesday' },
                        { month: 'January', date: '03', day: 'Wednesday' },
                        { month: 'January', date: '04', day: 'Thursday' },
                        { month: 'January', date: '05', day: 'Friday' },
                        { month: 'January', date: '06', day: 'Saturday' },
                        { month: 'January', date: '07', day: 'Sunday' },
                        // ...
                    ]}
                    />

            </div>
        );
    }
}
export default App;