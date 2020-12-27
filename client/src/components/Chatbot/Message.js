import React from "react";
import {Col, Row, Card} from "antd";


export default function Message(props){
    return(
        <div>
       <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
           <Card width="300px">
                <Col className="gutter-row" span={6}>
                    
                </Col>
                <Col className="gutter-row" span={6}>
                    
                </Col>
               
           </Card>
        </Row> 
    </div>
    );

}

