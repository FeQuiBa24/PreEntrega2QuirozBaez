import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='container-fluid p-0'>
        <Header />
        <ItemListContainer />
        <Footer />
    </div>
  );
}

export default App;
