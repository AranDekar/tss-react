import React from 'react';
import { UserContext } from '../context/UserContext';

// This function takes a component...
function withUser(WrappedComponent) {
  // ...and returns another component...
  function WithUser(props) {
    return (
      <UserContext.Consumer>
        {user => <WrappedComponent {...props} user={user} />}
      </UserContext.Consumer>
    )
  }
  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';
  WithUser.displayName = `WithUser(${wrappedComponentName})`;
  return WithUser;
}
export default withUser;