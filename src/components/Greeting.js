import React, {Component} from "react";
//import Greeting from  "./Components";

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '' ,
            password: ''

        }
        //this.handleChange = this.handleChange(this);
    
    }

    handleClick() {
        window.alert("hello.world!!")
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const elements = event.target.elements;
        const texts = Array.from(elements).filter(item => item.type === 'text' || item.type === 'password')
        texts .forEach(text => console.log(text.value))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render () {
        return <div>
            <button onClick = {this.handleClick}>Greeting!</button>
            
            {JSON.stringify(this.state)}

            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    }
}

export default Greeting;
