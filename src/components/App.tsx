import React, {Component} from "react";
import Sana from './sana.jsx';
import Navbar from "./navbar";
import DateCard from "./date-card";
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
            </div>
        );
    }
}
export default App;