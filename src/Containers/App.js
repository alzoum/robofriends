import React, { Component } from "react";
import Cardlist from '../component/CardList.js'
import SearchBox from "../component/SearchBox.js";
import Scroll from '../component/Scroll.js';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => { this.setState({ robots: users }) });
    }
    onSearchChange = (Event) => {
        this.setState({ searchfield: Event.target.value });
    }



    render() {
        const filterdRobot = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1 className="tc">loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriend</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <Cardlist robots={filterdRobot} />
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;