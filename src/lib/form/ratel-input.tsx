import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const RatelInputStyledComponent = styled.input`
  border-width: 1px;
  background-color: #8c8c4e;
`;

export interface RatelInputProp extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const RatelInput: React.FC<RatelInputProp> = (props: RatelInputProp) => {
  const { label, ...inputProp } = props;
  return (
    <div>
      <div>{label}</div>
      <div>
        <RatelInputStyledComponent {...inputProp} />
      </div>
    </div>
  );
};

// # Frequently used function for input handler
export const objectInputChangeHandler = (
  e: ChangeEvent<HTMLInputElement>,
  object: object,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setter: Function
) => {
  if (e.target.type === 'number') {
    setter({ ...object, [e.target.name]: Number(e.target.value) });
    return;
  }
  setter({ ...object, [e.target.name]: e.target.value });
};
