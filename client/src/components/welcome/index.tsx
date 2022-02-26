import Input from '../input';
import { Line } from '../../styles/global';
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
  Grid,
  GridItem,
  CardContainer,
  CardBackground,
  WelcomeForm,
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
          <Grid>
            <GridItem radiusUL={20}>Reliability</GridItem>
            <GridItem>Security</GridItem>
            <GridItem radiusUR={20}>Ethereum</GridItem>
            <GridItem radiusBL={20}>Web 3.0</GridItem>
            <GridItem>Low fees</GridItem>
            <GridItem radiusBR={20}>Blockchain</GridItem>
          </Grid>
        </Section>
        <CardContainer>
          <CardBackground>
            <div>
              <div>
                <div>
                  <SiEthereum fontSize={21} color='#fff' />
                </div>
                <BsInfoCircle fontSize={17} color='#fff' />
              </div>
              <main>
                <p>0xsdfnwhfgn......fsldfjn</p>
                <p>Ethereum</p>
              </main>
            </div>
          </CardBackground>
          <WelcomeForm>
            <Input
              onChange={() => {
                console.log('brr');
              }}
              name='addressTo'
              type='text'
              step='0.0001'
              value=''
              placeholder='Address To'
            />
            <Input
              onChange={() => {
                console.log('brr');
              }}
              name='amount'
              type='number'
              step='0.0001'
              value=''
              placeholder='Amount (ETH)'
            />
            <Input
              onChange={() => {
                console.log('brr');
              }}
              name='keyword'
              type='text'
              step='0.0001'
              value=''
              placeholder='Keyword (Gif)'
            />
            <Input
              onChange={() => {
                console.log('brr');
              }}
              name='message'
              type='text'
              step='0.0001'
              value=''
              placeholder='Enter Message'
            />
            <Line />
          </WelcomeForm>
        </CardContainer>
      </Main>
    </Container>
  );
};

export default Welcome;
