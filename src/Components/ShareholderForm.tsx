import React from 'react';
import { IShareholder } from '~/Entities';
import { FormContainer, Row, Cell, H2, Input, InputLabel, FormSubmitButton } from '~/Styling';

interface IProps {
  type: 'edit' | 'create';
  shareholder: IShareholder;
  onSubmit: (data: IShareholder) => void;
}

const Component: React.FC<IProps> = (props) => {
  const [ state, setState ] = React.useState({ ...props.shareholder });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const currentState: IShareholder = { ...state };
    (currentState as any)[event.target.name] = event.target.value;
    setState(currentState);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    props.onSubmit(state);

    if (props.type === 'create') {
      setState(props.shareholder);
    }
    
  }

  const generateTitle = () => {
    return props.type === 'create' ? "Add Shareholder" : "Shareholder";
  }

  const generateButtonLabel = () => {
    return props.type === 'create' ? "Add Shareholder" : "Edit Shareholder";
  }

  return (
    <FormContainer onSubmit={handleSubmit} key={state.id}>
      <H2>{generateTitle()}</H2>
      <Row>
        <Cell>
          <InputLabel>Shareholders First Name</InputLabel>
          <Input name="firstName" value={state.firstName} onChange={handleChange}  />
        </Cell>
        <Cell>
          <InputLabel>Shareholders Last Name</InputLabel>
          <Input name="lastName" value={state.lastName} onChange={handleChange}  />
        </Cell>
      </Row>
      <Row>
        <Cell>
          <InputLabel>Shareholders Email</InputLabel>
          <Input name="email" value={state.email} onChange={handleChange}  />
        </Cell>
        <Cell>
          <FormSubmitButton type="submit">{generateButtonLabel()}</FormSubmitButton>
        </Cell>
      </Row>
    </FormContainer>
  );
};

export default Component;
