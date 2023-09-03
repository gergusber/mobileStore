import './App.css';
import Header from './components/layout/header/header';
import SearchBar from './components/layout/searchbar/searchbar';
import Mobiles from './components/mobile/Mobiles'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
