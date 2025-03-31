import logo from './logo.svg';
import './App.css';
import Inici from './Components/Inici';
import Task from './Components/Task';
import Tab from './Components/Table';
import ContactForm from './Components/ContactForm';

function App() {
  return (
    <div>
      <Inici />
      <Task />
      <Tab />
      <div className="container">
        <div className="App">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;
