import { Row, Col } from 'react-bootstrap';
import { ChatLeftQuote } from 'react-bootstrap-icons';
import classes from './engagement.module.css';
import useData from '../hooks/data-hook';
import { useEffect } from 'react';
// import loadingGif from '../assets/waiting-texting.gif';
import insta from '../assets/images/insta.jpg';
import Wrapper from './UI/wrapper';

const Engagement = () =>{
    const {value,engagementScore} =useData();
    const {value:commentsValue,engagementComments} =useData();
    
    useEffect( ()=>{
        engagementScore();
        engagementComments()
    },[engagementScore,engagementComments])
    
    return(
        <Wrapper>
            <Row>
                <Col xs="5" className={`mt-2 text-center ${classes.borderRight}`}>
                    <div className={`mt-2 ${classes.instaLogo}`}>
                        <img src={insta} alt="insta logo"/>
                    </div>
                    <div className={`mt-5 ${classes.instaCount}`}>
                        <ChatLeftQuote />
                        <span>{commentsValue}</span>
                    </div>
                </Col>
                <Col xs="7" className={`mt-2 text-center ${classes.scoreDiv}`}>
                    <p><b>Total engagement score</b></p>
                    <h2 className={classes.bold}>{value}</h2>
                    <div className={`mt-5 ${classes.scoreStatus}`}>Excellent</div>
                </Col>
            </Row>
        </Wrapper>
    )
}

export default Engagement;