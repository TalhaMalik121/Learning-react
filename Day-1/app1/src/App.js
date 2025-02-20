import logo from './logo.svg';
import './App.css';

function App() {

  let name = "Muhammad Talha";
  let array = [1, 2, 3, 4, 5, 6];
  let obj={
    'name':'Talha Malik',
    'age':20,
    'rollno':63
  }
  let status='true;'
  return (
    <div className="App">
      <h1>Day 1 Learning react</h1>
      <h2>{name}</h2>
      <h3>{array.map((v) => {
        return <div>{v}</div>;
      })}</h3>
      <div>{obj.name}</div>
      <div>{obj.rollno}</div>
      <div>{obj.age}</div>

      <div>{10+20}</div>
      {(status)?<div style={{color:"red",backgroundColor:"yellow",fontWeight:"Bold"}}>True hy jani</div>
      :<div>False h Jani</div>}
    </div>
    
  );
}

export default App;
