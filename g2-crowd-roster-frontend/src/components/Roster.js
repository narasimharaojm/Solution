import React,{Component} from 'react';
import axios from 'axios';

class Roster extends Component{
   handleLike(item){
   
    this.props.like(item);
   }
    render(){
        var disp= this.props.eData.map(data=>{
           return(

            <div key={data.name} className="item">
                <img className="imagePic" src={data.image_url} alt="image"/>
                <h2> {data.name}</h2>
                <h3> {data.title}</h3>
                <div className="bio"> {data.bio}</div>
                <div><p><b>Want to work with {data.name}?  </b><img onClick={this.handleLike.bind(this,data.name)} className="sprite"></img> Yes!</p></div>
                <div> {data.votes} people have said yes!</div>
                <hr/>
            </div>
            ) 
        })
        return(
            
            <div className="container"> 
                {disp}
            </div>
        )
    }
}

export default Roster;