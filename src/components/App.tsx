import React, {Component, useState} from "react";
import CalendarPage from "../pages/calendar";
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
            <CalendarPage holidays={holidays} />
        );
    }

}
export default App;