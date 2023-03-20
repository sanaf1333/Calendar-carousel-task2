import React, {Component} from "react";

import Navbar from "./navbar";
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
                <Navbar date="sana"/>
            </div>
        );
    }
}
export default App;