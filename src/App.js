import './App.css';
import Counter from './components/counter/Counter';
import SearchForm from './components/searchForm/SearchForm';

function App() {
  return (
    <div className="app">
      <div className='content-restrict'>
        <Counter count={1}/>
        <SearchForm className="search" initialQuery={''} onSearch={() => alert('Form was submitted')}/>
      </div>
    </div>
  );
}

export default App;
