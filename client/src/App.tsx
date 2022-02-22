import { Navbar, Welcome, Footer, Services, Transactions } from './components';

const App: React.FC = () => {
  return (
    <>
      <div>
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
