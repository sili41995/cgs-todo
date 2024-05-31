import React, { FC } from 'react';
import { IProps } from './container.types';
import { Wrapper } from './container.styles';

const Container: FC<IProps> = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Container;
