import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Exercise from './components/exercise/Exercise';
import Questions from './questions/Questions';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Exercise></Exercise>
      <Questions></Questions>
    </div>
  );
}

export default App;
