import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons'


class DataField extends React.Component{

    constructor(props){
        super(props)
        
    }
    
    hours=()=>{
        const {created_at} =this.props.data;
        const createdTime =new Date(created_at);
        const datenow = new Date();
        const res =Math.abs(datenow.getTime() - createdTime.getTime())/ 36e5;
        const finalnumber =Math.round(res);
        return finalnumber
        
        

}

    render(){
        const  {title, comments, number, url, user, labels} = this.props.data;
        return (
            <div className="data-field">
                <div className="left">
                    <div className="left-title">
                        <h3><a href={url}>{title}</a></h3>
                        {labels.map(label =>{
                            return( <div className="title_tag" key ={label.id} style={{backgroundColor: `#${label.color}`}}>
                                <p >{label.name}</p>
                            </div> )
                        })}
                    </div>
                <small>#{number} opened {this.hours()} Hours ago by {user.login}</small>

                </div>
                <div className="right">
               
                    <p> <FontAwesomeIcon icon ={faCommentAlt}/> <span>{comments}</span> </p>
                </div>
            </div>
        )
    }
}
export default DataField;