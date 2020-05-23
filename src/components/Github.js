import React, {Component} from 'react';

class Github extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weather:{},
        }
    }

    componentDidMount(){
        const API_key = 'c8e76c9b4fa36112b0d8aff693cee1fc';
        const city = 'Sydney';
        const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`;
        fetch(api)
        .then (response => response.json())
        .then (data => {
            console.log(data);
            this.setState({
                weather:data,
            })
        })
        .catch(error =>console.error(error))
    }

    render(){
        const { weather } =this.state;
        return (
            <ul>
                <h1>Github repos</h1>
                {/* {repos.map(repos => <li key={repos.id}>{repos.name}</li>)} */}
                {weather.city && weather.city.name}
            </ul>
        )
    }

}

export default Github;