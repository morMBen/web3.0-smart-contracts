import { Navbar, Welcome, Footer, Services, Transactions } from './components';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div style={{ backgroundColor: '#333333' }}>
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
