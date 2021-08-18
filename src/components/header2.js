import { Navbar, Button, Row, Col } from 'react-bootstrap';
import { BoxSeam } from 'react-bootstrap-icons';
import classes from './header2.module.css';

const Header2 = () =>{
    return (
        <Navbar expand="lg">
            <Row className={classes.fullWidth}>
                <Col xs="2" lg="1" className="text-end">
                    <Navbar.Brand className={classes.navBrand} href="#home">
                        <BoxSeam />
                    </Navbar.Brand>
                </Col>

                <Col xs="9" lg="9" className={classes.subTxtMargin}>
                    <Row>
                        <Col xs="9">
                            <span className={classes.subTxt}>Campaign | App installs in Chennai </span>
                        </Col>
                        <Col xs="3" lg="12">
                            <Button className={classes.liveBtn}>Live</Button>
                        </Col>
                    </Row>
                </Col>

                
            </Row>
        </Navbar>
    )
}

export default Header2;