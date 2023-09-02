import './App.css';
import Header from './components/layout/header/header';
import Mobiles from './components/mobile/Mobiles'
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Mobiles />
        </main>
      </div>
    </>
  );
}

export default App;
