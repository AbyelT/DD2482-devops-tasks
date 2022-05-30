import './App.css';
import HomeView from './views/homeview';
import { messageArr } from './msgarray';

function App() {
  return (
    <div className="App">
      <h1> Hello DD2482, this is Mergify!</h1>
      <HomeView message={messageArr[1]}/>
    </div>
  );
}

export default App;
