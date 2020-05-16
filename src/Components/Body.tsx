import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ShareholdersContainer, PercentagesContainer } from '~/Containers';
import { BodyContainer } from '~/Styling/Layout';

const RedirectToShareholderDetails: React.FC = () => {
  return <Redirect to="/shareholder-details/shareholders" />;
}

const Component: React.FC = () => {
  return (
    <BodyContainer>
        <Switch>
          <Route path="/shareholder-details/shareholders" exact={true} component={ShareholdersContainer} />
          <Route path="/shareholder-details/percentages" exact={true} component={PercentagesContainer} />
          <Route path="/" exact={true} component={RedirectToShareholderDetails} />
        </Switch>
    </BodyContainer>
  );
}

export default Component;
