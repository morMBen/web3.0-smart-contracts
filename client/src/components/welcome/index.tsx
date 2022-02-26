import Input from '../input';
import * as GlobalStyled from '../../styles/global';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import * as Styled from './styles';
import { Loader } from '..';

const Welcome: React.FC = () => {
  const connectWallet = (): void => {};
  const handleSubmit = (): void => {};

  return (
    <Styled.Container>
      <Styled.Main>
        <Styled.Section>
          <Styled.LargeHeading>
            Send Crypto <br /> across the world
          </Styled.LargeHeading>
          <Styled.Paragraph>
            Explor the crypto world. Buy and sell crypto
          </Styled.Paragraph>

          <Styled.ConnectButton type='button' onClick={connectWallet}>
            <Styled.Paragraph2>Connect to wallet</Styled.Paragraph2>
          </Styled.ConnectButton>
          <Styled.Grid>
            <Styled.GridItem radiusUL={20}>Reliability</Styled.GridItem>
            <Styled.GridItem>Security</Styled.GridItem>
            <Styled.GridItem radiusUR={20}>Ethereum</Styled.GridItem>
            <Styled.GridItem radiusBL={20}>Web 3.0</Styled.GridItem>
            <Styled.GridItem>Low fees</Styled.GridItem>
            <Styled.GridItem radiusBR={20}>Blockchain</Styled.GridItem>
          </Styled.Grid>
        </Styled.Section>
        <Styled.CardContainer>
          <Styled.CardBackground>
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
          </Styled.CardBackground>
          <Styled.WelcomeForm>
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

            <GlobalStyled.Line />

            {false ? (
              <Loader />
            ) : (
              <Styled.SendButton type='button' onClick={handleSubmit}>
                Send Now
              </Styled.SendButton>
            )}
          </Styled.WelcomeForm>
        </Styled.CardContainer>
      </Styled.Main>
    </Styled.Container>
  );
};

export default Welcome;
