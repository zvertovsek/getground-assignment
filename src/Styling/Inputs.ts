import styled from 'styled-components';
import { borderRadius } from './Mixins';
import { VeniceBlue, DimGrey, White } from './Colors';

export const Input = styled.input`
  margin: 0;
  font-size: 14px;
  line-height: 30px;
  width: calc(100% - 36px);
  color: ${DimGrey.rgb};
  background: ${White.rgb};
  padding: 0 17px;
  border: 1px solid ${VeniceBlue.rgb};
  ${borderRadius('5px')}
`;