import { Navbar, Welcome, Footer, Services, Transactions } from './components';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div
        style={{
          backgroundImage:
            'linear-gradient(to right bottom, #041d03, #00241c, #002a35, #002e4d, #002d5b, #0e2c5b, #182a5b, #20295a, #292b50, #2e2e46, #32303d, #333333)',
        }}
      >
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
