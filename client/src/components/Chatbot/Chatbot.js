import React, { Component } from "react";
import {Typography, Input, Row, Col, Button, Divider} from "antd";
import {SendOutlined} from '@ant-design/icons';
import "./Chatbot.scss";
import axios from "axios/index";
import Message from "./Message";



class Chatbot extends Component {
    
   
    constructor(props){
        super(props);

        this.state={
            message:[]
        }
    }

    async df_text_query(text){
        let says={
            speaks: "me",
            msd:{
                text:{
                    text:text
                }
            }
        };

        this.setState({message: [...this.state.messages, says]})
        const res= await axios.post("/df-text-query", {text});
        for (let msg of res.danta.fulfillmentMessages){
                says={
                    speaks:"bot",
                    msg:msg
                };
                this.setState({messages:[...this.state.messages, says]});
        };
    }

    async df_event_query(event){
        
        const res= await axios.post("/api/v1/df-event-query", {event});

        for (let msg of res.data.fulfillmentMessages){
            let says={
                speaks:"me",
                msg:msg
            };
            this.setState({messages: [...this.state.message,says]});
        };
        console.log(res);
    }
    componentDidMount(){
        this.df_event_query("wellcome");
    }
    renderMessages(stateMessages){
        if(stateMessages){
            return stateMessages.map((message,i)=>{
                return<Message key={i} speaks={message.speaks} text={message.msg.text.text}/>;
            });
        }else{
            return null;
        }
    }
    render(){

        return (
            <div className="chatbotContainer">
                    <Row>
                        <Col flex="auto">
                            <Typography className="chatbot__h4">
                                <h5>Paciente: Carlos Tapia</h5>
                            </Typography>
                        </Col>
                        <div className="chatbot__h4" >
                            <Col flex="120px" >
                                <Typography className="chatbot__tiempo">
                                    <h5> Tiempo: 20m </h5>
                                </Typography>
                        </Col>
                        </div>
                    </Row>
                <div className="chatbot">
                <Divider />
                    <div className="chatbot__messagecontainter">
                        
                        <Row >
                            <Col span="21"> 
                            {this.renderMessages(this.state.messages)}
                                <Input 
                                    name="msg"
                                    type="text" 
                                    placeholder="Escribe tu mensaje aqui..." >
                                </Input>
                            </Col>
                            <Col span="3">
                                <Button>
                                    <SendOutlined/>
                                </Button>
                            
                            </Col>
                        </Row>

                    </div>
                </div>
            </div>
        );
    }
}
export default Chatbot;