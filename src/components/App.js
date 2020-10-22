import React from 'react';
import DisplayData from './DisplayData';
import SearchBar from './SearchBar';
import getRequest from '../helpers/getRequest'

import './App.css'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            infoArray: [],
            search: ""
        }
    }

    searchSubmit=(data)=>{
        this.setState({search:data}) 
    }

    componentDidMount(){
        getRequest.get().then(({data})=>this.setState({infoArray: data}));   
    }
    render(){
        return (
            <div className="App container">
                <SearchBar searchInfo={this.searchSubmit} />
                <hr/>
                <DisplayData info={this.state.infoArray} filter={this.state.search}/>
            </div>
        )
    }
}

export default App;