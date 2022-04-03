import routes from './routes';
import './App.scss';
import SearchBarView from './components/SearchBar/searchBarView.';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBarView />
        <div className="wrap">{routes}</div>
      </header>
    </div>
  );
}

export default App;
