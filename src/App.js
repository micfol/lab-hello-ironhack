import logo from './logo.svg';
import './App.css';
import { Declarative } from "./components/Declarative";
import { Components } from './components/Components';
import { Singleway } from './components/Singleway';
import { Jsx } from './components/Jsx';
import { Navbar } from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="LandingDiv" style={{ display: "flex"}}>
        <div >
          <h1 className="LandingText HeaderText">Say hello to ReactJS</h1>
          <p className="LandingText ParagraphText">You will learn how to use the most popular frontend library, and become a super Ninja Developer.</p>
          <button type="button" class="btn btn-light LandingText">Awesome!</button>
        </div>
        <div className="EmptyDiv">
        </div>
      </div>
        <div className="Components" style={{ display: "flex"}}>
          <Declarative />
          <Components />
          <Singleway />
          <Jsx />
        </div>
    </div>
  );
}

export default App;
