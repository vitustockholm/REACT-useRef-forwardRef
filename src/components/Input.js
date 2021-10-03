import React from 'react';

const Input = ({ type, onKeyDown, placeholder }, ref) => {
  return (
    <Input
      ref={ref}
      type={type}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    ></Input>
  );
};
const forwardedInput = React.forwardRef(Input);

export default forwardedInput;
