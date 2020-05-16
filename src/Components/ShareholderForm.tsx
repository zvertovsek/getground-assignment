import React from 'react';
import { FormContainer, Row, Cell, H2, Input, InputLabel, FormSubmitButton } from '~/Styling';

const initialState: any = {
  firstName: "",
  lastName: "",
  email: "",
}

const Component: React.FC = () => {
  const [ state, setState ] = React.useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const currentState = { ...state };
    currentState[event.target.name] = event.target.value;
    setState(currentState);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    console.log(state);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <H2>Add Shareholder</H2>
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
          <FormSubmitButton type="submit">Add Shareholder</FormSubmitButton>
        </Cell>
      </Row>
    </FormContainer>
  );
};

export default Component;
