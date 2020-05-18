import React from 'react';
import { IShareholder } from '~/Entities';
import { Grid, GridRow, GridCell, GridHeaderCell, GridInput, GridCheckbox, GridError, H3, H6 } from '~/Styling';
import Wrapper from '~/Utilities/Wrapper';

interface IStateMember {
  id: string;
  share: number | string;
  error: string | null;
}

interface IProps {
  shareholders: IShareholder[];
  children?: React.ReactNode;
  onShareChange: (data: IShareholder) => void;
  onCompanyDirectorChange: (directorID: string) => void;
}

const PercentageGrid: React.FC<IProps> = (props) => {
  const [ state, setState ] = React.useState(props.shareholders.map(
    ({id, share}: IShareholder): IStateMember => ({ id, share, error: null })
  ));

  const handleShareChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    let error: string | null = null;
    const newShareValue = event.target.value;
    const shareholderID: string = event.target.name;

    const currentState = [ ...state ];  
    const shareholderIndex: number = currentState.findIndex(
      (item: IStateMember) => item.id === shareholderID
    );
     
    if (isNaN(Number(newShareValue))) {
      error = 'Share should be specified as a number. Please review the details';
    } else {
      const total: number = props.shareholders.reduce((total: number, shareholder: IShareholder) => {
        const share: number = (shareholder.id === shareholderID) ? 
          Number(newShareValue) : 
          shareholder.share;
        return total + share;
      }, 0);  

      if (total > 100) {
        error = 'In total shareholders can only have a percentage that adds up to 100%, please review these details';
      }
    }

    currentState[shareholderIndex].error = error;
    currentState[shareholderIndex].share = newShareValue;
    setState(currentState);

    if (!error) {
      const shareholder: IShareholder = {
        ...props.shareholders[shareholderIndex],
        share: Number(newShareValue)
      };
      props.onShareChange(shareholder);
    }
    
  };

  const handleIsDirectorChange = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const shareholderID: string = event.currentTarget.name;
    props.onCompanyDirectorChange(shareholderID);
  };

  return (
    <Grid>
      <GridRow>
        <GridHeaderCell>Shareholders</GridHeaderCell>
        <GridHeaderCell width='85px' align="center">Share %</GridHeaderCell>
        <GridHeaderCell width='85px' align="center">Director</GridHeaderCell>
      </GridRow>
      {props.shareholders.map((shareholder: IShareholder, index: number) => {
        return (
          <Wrapper key={shareholder.id}>
            <GridRow key={shareholder.id} isHighlighted={shareholder.isCreator}>
              <GridCell>
                <H3>{`${shareholder.firstName} ${shareholder.lastName}`}</H3>
                <H6>{shareholder.email}</H6>
              </GridCell>
              <GridCell width='85px' align="center">
                <GridInput
                  hasError={state[index].error ? true : false }
                  name={shareholder.id}
                  isHighlighted={shareholder.isCreator}
                  value={state[index].share}
                  onChange={handleShareChange}
                />
              </GridCell>
              <GridCell width='85px' align="center">
                <GridCheckbox
                  name={shareholder.id}
                  isHighlighted={shareholder.isCreator}
                  onClick={handleIsDirectorChange}
                >{shareholder.isDirector ? 'YES' : 'NO'}</GridCheckbox>
              </GridCell>
              
            </GridRow>
            {state[index].error ? <GridError>{state[index].error}</GridError> : null}
          </Wrapper>  
        )
      })}
    </Grid>
  );
}

export default PercentageGrid;
