import React from 'react';
import DataField from './Datafield'

class DisplayData extends React.Component{
    

    render(){
        console.log(this.props.info)
        return(
            <div className="data-grid">
                {this.props.info.filter((data) =>{
                    return data.title.includes(this.props.filter);
                    
                }).map(data=>{
                    console.log(data.title);
                    return(
                        <DataField key={data.id} data={data} />
                    )
                })}

            </div>
        )
    }
}

export default DisplayData;