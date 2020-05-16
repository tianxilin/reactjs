import React from 'react';
import moment from 'moment';

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time : new Date().toLocaleTimeString(),
            hour: moment().format('HH') ,
            minutes: moment().format('mm') ,
            seconds: moment().format('ss'),
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString(),
                hour: moment().format('HH'),
                minutes: moment().format('mm'),
                seconds: moment().format('ss'),
            })
        }, 1000)
    }

    componentWillMount() {
        clearInterval(this.timer);
    }

    render() {
        const {hour,minutes,seconds} = this.state;
        return (
            <div style ={{display:"flex",flexDirection:"row",background:"blue"}}>
                <h1 style={{background:"white",padding:"1rem",margin:"1rem"}}>{hour}</h1>
                <h1 style={{background:"white",padding:"1rem",margin:"1rem"}}>{minutes}</h1>
                <h1 style={{background:"white",padding:"1rem",margin:"1rem"}}>{seconds}</h1>
            </div>
        )
    }
}

export default Time;