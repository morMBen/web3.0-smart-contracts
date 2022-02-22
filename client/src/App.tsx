import { Navbar, Welcome, Footer, Services, Transactions } from './components';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </>
  );
};

export default App;
