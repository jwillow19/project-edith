import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

// WithSpiner: HOC - takes some component and
// if wrappedComponent isLoading show spinner, ow show wrappedComponent

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
