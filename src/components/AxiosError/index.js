import React from 'react';
console.clear();

const AxiosError = ({ error }) => {
  return <p className="axios-error">! {error.message}.</p>;
};

export default AxiosError;
