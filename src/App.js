import './App.scss';
import { Header, Banner, Story, Prewedding, Wedding, Footer } from './layouts';
import GuestForm from './layouts/GuestForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <GuestForm/>
      <Story/>
      <Prewedding/>
      <Wedding/>
      <Footer/>
    </div>
  );
}

export default App;
