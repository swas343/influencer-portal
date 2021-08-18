import './App.css';

import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';

import Header from './components/header';
import Header2 from './components/header2';
import SideBar from './components/sideBar';
import Engagement from './components/engagement';
import Stats from './components/statistics';
import TableFilters from './components/tableFilters';
import CustomTable from './components/customTable';
import AddPostModal from './components/addPostModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () =>{
    setShowModal( prevState => { return !prevState})
  }

  return (
    <div className="container-div">
      {showModal && <AddPostModal toggleModal={toggleModal}/> }
      <div className="headers">
        <Header/>
        <hr/>
        <Header2 />
      </div>

      <div className="content pt-3">
        <SideBar/>
        <Row>
          <Col xs="12" sm="12" lg="4">
            <Engagement/>     
          </Col>
          <Col xs="12" sm="12" lg="8">
            <Stats/>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="12">
            <TableFilters toggleModal={toggleModal} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs="12" lg="12" className="overflow-auto">
            <CustomTable/>
          </Col>
        </Row>
      </div>

    </div>
  );
}

export default App;
