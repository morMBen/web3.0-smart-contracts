import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import {
  Container,
  Main,
  Section,
  LargeHeading,
  Paragraph,
  Paragraph2,
  ConnectButton,
} from './styles';

const Welcome: React.FC = () => {
  const connectWallet = (): void => {};

  return (
    <Container>
      <Main>
        <Section>
          <LargeHeading>
            Send Crypto <br /> across the world
          </LargeHeading>
          <Paragraph>Explor the crypto world. Buy and sell crypto</Paragraph>

          <ConnectButton type='button' onClick={connectWallet}>
            <Paragraph2>Connect to wallet</Paragraph2>
          </ConnectButton>
        </Section>
      </Main>
    </Container>
  );
};

export default Welcome;
