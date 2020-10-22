import React from 'react';

class SearchBar extends React.Component{
   
    constructor(props){
        super(props);
        this.state ={value:""};
    }


    formSubmit=(e)=>{
        e.preventDefault();
        this.props.searchInfo(this.state.value);
    }


    render(){
        
        return(
            <div className="search-bar-div">
                <form className="search-bar" action ="">
                    <input type="text"
                    value={this.state.value}
                    onChange={(event)=>this.setState({value: event.target.value})}
                    />
                    <input 
                    onClick={this.formSubmit}
                    type="submit" 
                    value="Search"
                    />
                </form>
            </div>
        )
    }

}
export default SearchBar;