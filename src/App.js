import React, { Component } from "react";
import CardList from "./cardList";
import { robots } from './robot';
import SearchBox from "./searchBox";
// import { render } from "@testing-library/react";

import './App.css'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filteredRobots);
        return(
            <div className="tc">
                <h1 className="f1">Robo Friends</h1>
                <SearchBox searchchange={this.onSearchChange}/>
                {/* <CardList robots={this.state.robots}  */}
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;