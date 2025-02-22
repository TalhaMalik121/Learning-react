import logo from './logo.svg';
import './App.css';
import { data } from './Data/DataArray'
import { Card, Button, Col, Container, Row } from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <h1>Passing Objects to Child Component</h1>
      <Container>
        <Row>
        {data.map((v, i) => {
          return (<ListOfPeople item={v} key={i} />)
        })}
        </Row>
      </Container>

    </div>
  );
}

export default App;


function ListOfPeople({ item }) {
  return (
    <div className='col-lg-3 mb-4' > 
          <Card>
              <Card.Body>
                <Card.Title>{item.id} </Card.Title>
                <Card.Text>
                  {item.name} {item.age}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
    </div>
  )
}
