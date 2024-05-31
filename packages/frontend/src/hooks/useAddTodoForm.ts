import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Messages } from '~/constants';
import { handleFormSubmitWrap, makeBlur, toasts } from '~/utils';
import { validateAddTodoForm } from '~/validator';
import { useTodosStore } from '~store/store';
import { selectAddTodo, selectIsLoading } from '~store/todos/selectors';
import { BtnClickEvent } from '~typings/auth.types';
import { NewTodo, IUseAddTodoForm } from '~typings/todos.types';

const useAddTodoForm = (): IUseAddTodoForm => {
	const [checked, setChecked] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<NewTodo>();
	const isLoading = useTodosStore(selectIsLoading);
	const addTodo = useTodosStore(selectAddTodo);

	const onCheckboxChange = (): void => {
		setChecked((prevState) => !prevState);
	};

	const onResetBtnClick = (e: BtnClickEvent): void => {
		makeBlur(e.currentTarget);
		setChecked(false);
		reset();
	};

	const onAcceptBtnClick = (e: BtnClickEvent): void => {
		makeBlur(e.currentTarget);
	};

	const handleFormSubmit: SubmitHandler<NewTodo> = async (data) => {
		const date = new Date(data.date);
		const todoData = { ...data, date: String(date) };
		await addTodo(todoData);
		toasts.successToast(Messages.addSuccess);
		setChecked(false);
		reset();
	};

	useEffect(() => {
		const invalidFields = Object.keys(errors);
		if (invalidFields.length) {
			validateAddTodoForm(errors);
		}
	}, [errors, isSubmitting]);

	return {
		checked,
		register,
		handleSubmit,
		onAcceptBtnClick,
		onResetBtnClick,
		onCheckboxChange,
		handleFormSubmit: handleFormSubmitWrap(handleFormSubmit),
		isLoading,
	};
};

export default useAddTodoForm;
