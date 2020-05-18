import styled from 'styled-components';
import { Bermuda, HummingBird, RiceFlower, DimGrey } from './Colors';
import { linearGradient } from './Mixins';

export const H1 = styled.h1`
  margin: 35px 0 12px 0;
  padding: 0;
  font-size: 24px;
  font-weight: normal;
  line-height: 44px;
`;

export const H2 = styled.h2`
  margin: 20px 0 0 0;
  padding: 0;
  font-size: 20px;
  font-weight: normal;
  line-height: 60px;
`;

export const H3 = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 20px;
  color: ${Bermuda.rgb};
  font-weight: bold;
  letter-spacing: 1.75px;
  text-transform: uppercase;
`;

export const H6 = styled.h6`
  margin: 0;
  padding: 0;
  font-size: 11px;
  line-height: 14px;
  color: ${DimGrey.rgb};
  font-weight: normal;
`;

export const InputLabel = styled.label`
  display: block;
  padding: 0 0 0 17px;
  margin: 0;
  font-size: 10px;
  line-height: 30px;
  color: ${Bermuda.rgb};
  font-weight: bold;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;

export const HighlightedParagraph = styled.p`
  display: block;
  font-size: 14px;
  line-height: 18px;
  padding: 22px 30px;
  margin: 6px 0;
  ${linearGradient(HummingBird, RiceFlower)}
`;