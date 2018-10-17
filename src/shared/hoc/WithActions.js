import React from 'react';
import { ActionsContext } from '../context/ActionsContext';

// This function takes a component...
function withActions(WrappedComponent) {
  // ...and returns another component...
  function WithActions(props) {
    return (
      <ActionsContext.Consumer>
        {setActions => <WrappedComponent {...props} setActions={setActions} />}
      </ActionsContext.Consumer>
    )
  }
  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';
  WithActions.displayName = `WithActions(${wrappedComponentName})`;
  return WithActions;
}
export default withActions;