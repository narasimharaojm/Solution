import React,{Component} from 'react';
import axios from 'axios';
import Roster from './Roster';
import './App.css';
import {withCookies, Cookies} from 'react-cookie';
var ls = require('local-storage');
var cookie = require('cookie');

class App extends Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
   // static propTypes = {
     //   cookies: instanceOf(Cookies).isRequired
    //}
    componentDidMount(){
       
        axios.get("http://localhost:8080/process/getid").then((res)=>{
      // var val = typeof ls['uuid'] == "undefined" ? null : ls['uuid'];
     
      var val = typeof ls.get('uuid') == "undefined" ? null : ls.get('uuid');
       if(!val){
         
           ls.set('uuid',res.data.id);
       }

           
        });

        axios.get("https://api.myjson.com/bins/16roa3").then((data)=>{

            var arr = [];
            if(data.length===undefined){//remove this
               
                arr.push(data.data);
                this.setState({data:arr});
                

                axios.get("http://localhost:8080/process/votes",{params:{info:arr}}).then((resp)=>{//modify to data.data
               
            });
                
    
            }
            else{
                this.setState({data:data.data});
                console.log('multi');
                axios.get("http://localhost:8080/process/votes",{params:{info:data.data}}).then((resp)=>{//modify to data.data
            });
        }

        var currState = this.state.data;
        axios.get("http://localhost:8080/process/getallvotes").then((res)=>{
           res.data.msg.forEach(element => {
               currState.findIndex((item)=>{
                  // console.log(item);
                   if(item.name === element.name){
                      // console.log(item.name + " "+ item.votes +"-> "+element.likes);
                       item.votes = element.likes;
                   }
               });
           });
           this.setState({data:currState});
        });
        
    });
    }
    handleLike(name){
        axios.post("http://localhost:8080/process/visitor",{visitor: ls.get('uuid'),name: name}).then((resp)=>{
            console.log('cliecked')
            console.log(resp);
            var stt = this.state.data;
            if(resp.data.msg==="incremented"){
                stt.findIndex((item)=>{
                    if(item.name===name){
                        item.votes= item.votes+1;
                    }
                });
            }
            else
            if(resp.data.msg==="decremented"){
                stt.findIndex((item)=>{
                    if(item.name===name){
                        item.votes= item.votes-1;
                    }
                });
            }
            this.setState({data:stt});
         
        });
    }
    render(){
        return(
            <div className="container"> 
                <div className="heading">G2 Crowd Team Roster</div>
                <hr/>
                <Roster eData = {this.state.data} like={this.handleLike.bind(this)}/>
            </div>
        )
    }
}
export default App;