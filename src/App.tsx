import {Component} from "react";
import CalendarCarousel from "./pages/calendar-carousel-container";
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
            <CalendarCarousel />
        );
    }

}
export default App;