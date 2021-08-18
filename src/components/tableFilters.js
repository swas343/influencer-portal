import { Row, Col } from 'react-bootstrap';
import classes from './tableFilters.module.css';

const TableFilters = () =>{
    return (
        <Row className={`justify-content-end mt-4 ${classes.filters}`}>
            <Col xs="12" lg="6">
                <label>Filter by:</label>
                <select className="form-control">
                    <option>Post Type</option>
                </select>
                <select className="form-control">
                    <option>Date Range</option>
                </select>

                <button className={`btn btn-info ${classes.addPostLink}`}>Add Post Link</button>
            </Col>
        </Row>
    )
}

export default TableFilters;