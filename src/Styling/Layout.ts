import styled from 'styled-components';
import { VeniceBlue } from './Colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div.InnerWrapper {
    width: 640px; 
    margin: 0 auto;
  }
`;

export const HeaderContainer = styled(Container)`
  height: 61px;
  background-image: url(/Header.png);
  background-position: center center;
  background-repeat: repeat;

  div.InnerWrapper {
    display: flex;
    flex-direction: row;
  }
`;

export const BodyContainer = styled(Container)`
  height: 100%;
  color: ${VeniceBlue.rgb};
  font-size: 13px;
  line-height: 18px;

`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 6px -10px;
`;

export const Cell = styled.div`
  flex: 1 1 0;
  margin: 0 10px;
`;
