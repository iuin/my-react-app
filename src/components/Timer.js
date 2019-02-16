import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            time: 0
        };
        this.handleDownClick = this.handleDownClick.bind(this);
        this.handleUpClick = this.handleUpClick.bind(this);
        this.caclTime = this.caclTime.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    handleDownClick() {
        this.setState({
            date: new Date(),
        });
        this.timerID = setInterval(
            () => this.tick(), Math.floor(Math.random() * 10 + 1)
        )
    }

    handleUpClick() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date().getTime() - this.state.date.getTime()
        });
    }

    caclTime(time) {
        let seconds = Math.floor((time % (1000 * 60)) / 1000);
        let mss = (time % (1000 * 60)) % 1000;
        if (mss < 10) {
            return seconds + ":00" + mss;
        } else if (mss < 100) {
            return seconds + ":0" + mss;
        }
        return seconds + ":" + mss;
    }

    render() {
        return (
            <div>
                <div> Timer {this.caclTime(this.state.time)} </div>
                <button onMouseDown={this.handleDownClick} onMouseUp={this.handleUpClick}> Click Button</button>
            </div>
        )
    }
}

export default Timer;