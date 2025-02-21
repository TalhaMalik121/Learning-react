import logo from './logo.svg';
import './App.css';
import { Card,Button, Col, Container, Row } from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <div className="container text-dark">
       <h1> Welcome To Bootstrap</h1>
      </div>
      <Container fluid>
        <Container>
          <Row className='row bg-primary'>
            <Col className='col-lg-3 col-md-6 col-sm-12 py-4 text-center  bg-secondary' >
              <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className='col-lg-3 col-md-6 col-sm-12 py-4 text-center bg-danger' >
              <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className='col-lg-3 col-md-6 col-sm-12 py-4 text-center bg-warning' >
              <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="warning">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className='col-lg-3 col-md-6 col-sm-12 py-4 text-center bg-success' >
              <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="success">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container >
    </div>
  );
}

export default App;
