import classes from './statCard.module.css';
import { Col } from 'react-bootstrap';
import useData from '../../hooks/data-hook';
import { useEffect } from 'react';
// import loadingGif from '../../assets/waiting-texting.gif';

const StatCard = (props) =>{
    const {value,getStat} =useData();

    // const count = isLoading ? <img src={loadingGif} height="30px"/> : value

    useEffect( ()=>{
        getStat();
    },[getStat])

    return (
        <Col xs lg={props.col} className={classes[props.width]}>
            <span className={`${classes.statIcon} ${classes[props.color]}`}>{props.icon}</span>
            <span className={classes.statTxt}>{props.text}</span>
            <h3 className="">{value}</h3>
        </Col>
    )
}

export default StatCard;