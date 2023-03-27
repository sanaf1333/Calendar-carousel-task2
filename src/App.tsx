import {Component} from "react";
import CalendarCarousel from "./pages/calendar-carousel";
import CalendarCarouselContainer from "./pages/calendar-carousel-container";
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
            <CalendarCarouselContainer />
        );
    }

}
export default App;