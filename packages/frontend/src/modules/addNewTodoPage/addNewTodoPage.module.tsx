import React, { FC } from 'react';
import { FormTypes } from '~/constants';
import AddTodoForm from '~shared/components/addTodoForm';

const NewEventPage: FC = () => <AddTodoForm formType={FormTypes.addTodo} />;

export default NewEventPage;
