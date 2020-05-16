import styled from 'styled-components';
import * as Colors from '~/Styling/Colors';
import { borderRadius, linearGradient } from './Mixins';

const Button = styled.button`
  margin: 0;
  padding: 0;
  text-align: center;
  border: none;
  background: none;
  color: black;
  font-size: 13px;
  line-height: 26px;
  height: 26px;
  cursor: pointer;
  outline: none;
  ${borderRadius('15px')}

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const CommonButton = styled(Button)`
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
  height: 32px;
  margin: 0 5px;
  padding: 0 30px;
  color: ${Colors.VeniceBlue.rgb};
  border: 2px solid ${Colors.VeniceBlue.rgb};
  background: ${Colors.White.rgb};

  &:hover, &:disabled {
    background: ${Colors.VeniceBlue.rgba(0.15)}
  }
`;

export const CallToActionButton = styled(CommonButton)`
  color: ${Colors.White.rgb};
  border: none;
  ${linearGradient(Colors.CadetBlue, Colors.Riptide)}

  &:hover, &:disabled {
    ${linearGradient(Colors.Riptide, Colors.CadetBlue)}
  }
`;

export const SaveAndExitButton = styled(Button)`
  background: transparent;
  color: ${Colors.White.rgb};
  border: 2px solid ${Colors.White.rgb};
  line-height: 26px;
  height: 30px;
  padding: 0 15px;
  margin: auto 0;
  font-size: 11px;
  font-weight: 600;

  &:hover {
    background: ${Colors.White.rgba(0.15)}
  }
`;

export const FormSubmitButton = styled(Button)`
  background: ${Colors.Whisper.rgb};
  color: ${Colors.DimGrey.rgb};
  width: 220px;
  margin: 31px 0 0 0;
  height: 30px;
  line-height: 30px;
  float: right;

  &:hover {
    background: ${Colors.DimGrey.rgba(0.30)}
  }
`;