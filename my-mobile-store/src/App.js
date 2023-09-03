import './App.css';
import Header from './components/layout/header/header';
import SearchBar from './components/layout/searchbar/searchbar';
import Mobiles from './components/mobile/Mobiles'
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <SearchBar />
          <Mobiles />
        </main>
      </div>
    </>
  );
}

export default App;
