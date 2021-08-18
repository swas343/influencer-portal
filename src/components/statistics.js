import { Row, Col } from 'react-bootstrap';
import { Eye, HandThumbsUp, ChatLeft, ChatLeftQuote, GraphUp } from 'react-bootstrap-icons';
import StatCard from './UI/statCard';
import Wrapper from './UI/wrapper';

const Stats = () =>{
    return (
        <Wrapper>
        
            <Row>
                <Col xs lg="6">
                    <p className="p-2"><b>Statistics</b></p>
                </Col>
                <Col xs lg="6" className="text-end">
                    <p className="p-2">Overall Data</p>
                </Col>
            </Row>
            <Row className="p-4 mt-4">
                <StatCard 
                    col="2"
                    icon={<Eye/>}
                    text="Total Views"
                    color="blue"
                />
                <StatCard 
                    col="2"
                    icon={<HandThumbsUp/>}
                    text="Total Likes"
                    color="purple"
                />
                <StatCard 
                    col="3"
                    icon={<ChatLeft/>}
                    text="Total Comments"
                    color="orange"
                    width="width21"
                />
                <StatCard 
                    col="2"
                    icon={<ChatLeftQuote/>}
                    text="Total Engagement"
                    color="info"
                    width="widthAuto"
                />
                <StatCard 
                    col="3"
                    icon={<GraphUp/>}
                    text="Engagement Rate"
                    color="green"
                />
               
            </Row>
        </Wrapper>
    )
}

export default Stats;