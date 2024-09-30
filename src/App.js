import './App.css';
import App1 from './components/App1';
import App2 from './components/App2';
import Message from './components/Message';

function App() {
  //props are immutable
  return (
    <div className="App">
      <App1 name="pranay" heroName="chinna"/>
      <App2/>
      <Message/>
    </div>
  );
}

export default App;
