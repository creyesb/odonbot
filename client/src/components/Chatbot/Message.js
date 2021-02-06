import React from "react";
import {Col, Row, Avatar} from "antd";
import "./Message.scss";
import logo from "../../assets/png/botlogo.png" ;
export default function Message(props){

    console.log(props.text);
    
    return(
        
    <div className="scrollable-container"  >
        

        <Col scroll={{ x: 100, y: 200 }}>
            <div className="msg" >
                    <Row >
                        {props.speaks==="bot" &&
                        <Col span="4">
                            <Avatar src={logo} />
                            {props.speaks}
                        </Col>
                        }
                        <Col span="20" className="secondColumn"> {props.text} </Col>
                        {props.speaks==="" &&
                        <Col className="thirdCol">
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            {props.speaks}
                        </Col>
                        }
                    </Row>
            </div>
        </Col> 
    </div>
    );

}

