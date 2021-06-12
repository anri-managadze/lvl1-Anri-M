import {Component} from "react";
import Greeting from "./Greeting";

class Clock extends Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.change(),
            1000
        );
    }
    change() {
        this.setState({
            date: new Date()
        });
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div>
                <h1><Greeting name='Anri' lastname='Managadze' /></h1>
                <h2>It is {this.state.date.toLocaleTimeString()} now.</h2>
            </div>
        );
    }
}

export default Clock;