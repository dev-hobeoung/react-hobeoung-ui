import React, { FormHTMLAttributes } from 'react';

import { RatelInputProp } from './ratel-input';

export interface RatelFormProp extends FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactElement<RatelInputProp> | React.ReactElement<RatelInputProp>[];
}

export const RatelForm: React.FC<RatelFormProp> = (props: RatelFormProp) => {
  const { children, ...formProp } = props;
  return <form {...formProp}>{children}</form>;
};
