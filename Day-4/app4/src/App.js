import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';
import './App.css';
let a=10;
let student={
  name:'Muahammad Talha',
  rollno:1223

}
let doctor={
  name:'Dr. John',
  department:"MBBS"
}
function App() {
  return (
    <div className="App">
      <Header email="123" a={a}  student={student}/>
      <Footer student={student} doctor={doctor}/>
    </div>
  );
}

export default App;
