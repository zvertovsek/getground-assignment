import styled from 'styled-components';
import { White, Whisper } from '~/Styling/Colors';

export const CompanyLogo = styled.div`
  flex: 0 0 auto;
  width: 90px;
  height: 61px;
  background: transparent url(/Logo.png) center center no-repeat;
`;

export const Menu = styled.ul`
  flex: 3;
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 18px 20px;
  padding: 0;
`;

export const MenuItem = styled.li`
  font-size: 13px;
  line-height: 24px;
  color: ${White.rgb};
  margin: 0 8px;
`;

export const FormContainer = styled.form`
  margin: 0;
  padding: 20px 0;
`;

export const PageNavigationContainer = styled.div`
  margin: 30px -5px;
  padding: 20px 0;
  text-align: right;
  border-top: 1px solid ${Whisper.rgba(0.25)};
`;