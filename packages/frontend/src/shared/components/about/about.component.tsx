import React, { FC } from 'react';
import { Message } from './about.styles';
import { Messages } from '~/constants';

const About: FC = () => <Message>{Messages.about}</Message>;

export default About;
