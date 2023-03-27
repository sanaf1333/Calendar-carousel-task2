import React, {Component, useState} from "react";
import CalendarCarousel from "../pages/calendar-carousel";
import { holidays } from "../data/holidays";
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
            <CalendarCarousel holidays={holidays} />
        );
    }

}
export default App;