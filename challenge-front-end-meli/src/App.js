import routes from './routes';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrap">{routes}</div>
      </header>
    </div>
  );
}

export default App;
