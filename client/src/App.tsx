import { Navbar, Welcome, Footer, Services, Transactions } from './components';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div
        style={{
          backgroundImage:
            'linear-gradient(to right bottom, #062105, #002319, #002329, #002234, #001f38, #0a1f38, #131f38, #191f37, #222436, #282835, #2e2e34, #333333)',
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
