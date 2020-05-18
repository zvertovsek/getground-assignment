import styled from 'styled-components';
import * as Colors from './Colors';
import { borderRadius, linearGradient } from './Mixins';

export const Grid = styled.div`
  margin: 20px 0;
`;

interface IHighlightedProps {
  isHighlighted?: boolean;
  hasError?: boolean;
}

export const GridRow = styled.div<IHighlightedProps>`
  display: flex;
  flex-direction: row;
  padding: 6px 10px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.isHighlighted ? Colors.Whisper.rgb : Colors.White.rgb};
  ${borderRadius('5px')}
`;


interface IGridCellProps {
  width?: string;
  align?: string;
}
export const GridCell = styled.div<IGridCellProps>`
  flex: ${props => props.width ? '0 1 ' + props.width : '1 1 auto'};
  padding: 10px;
  text-align: ${props => props.align ? props.align : 'left'};
`;

export const GridHeaderCell = styled(GridCell)`
  font-size: 12px;
  line-height: 30px;
  color: ${Colors.DimGrey.rgb};
  font-weight: 600;
  text-transform: uppercase;
`;

export const GridInput = styled.input<IHighlightedProps>`
  margin: 0;
  padding: 0;
  width: 85px;
  font-size: 14px;
  font-weight: 600;
  line-height: 45px;
  text-align: center;
  border: 1px solid ${props => props.hasError ? Colors.WildWatermelon.rgb : Colors.VeniceBlue.rgb};
  color: ${props => props.hasError ? Colors.WildWatermelon.rgb : Colors.VeniceBlue.rgb};
  ${borderRadius('5px')}
  ${props => props.isHighlighted && !props.hasError ? 
    linearGradient(Colors.Tacao, Colors.GoldenTainoi) : 
    'background: ' + Colors.White.rgb + ';'}
`;

export const GridCheckbox = styled.button<IHighlightedProps>`
  margin: 0;
  padding: 0;
  width: 85px;
  font-size: 14px;
  font-weight: 600;
  line-height: 45px;
  text-align: center;
  cursor: pointer;
  border: 1px solid ${props => props.hasError ? Colors.WildWatermelon.rgb : Colors.VeniceBlue.rgb};
  color: ${props => props.hasError ? Colors.WildWatermelon.rgb : Colors.VeniceBlue.rgb};
  ${borderRadius('5px')}
  ${props => props.isHighlighted && !props.hasError ? 
    linearGradient(Colors.Tacao, Colors.GoldenTainoi) : 
    'background: ' + Colors.White.rgb + ';'}
`;

export const GridError = styled.div`
    margin: 10px;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: normal;
    line-height: 21px;
    color: ${Colors.WildWatermelon.rgb};
    border: 1px solid ${Colors.WildWatermelon.rgb};
    background: ${Colors.Amour.rgb};
`;