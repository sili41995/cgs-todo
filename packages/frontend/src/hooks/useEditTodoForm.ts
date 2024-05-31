import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Messages } from '~/constants';
import {
	getDeadlineParams,
	handleFormSubmitWrap,
	makeBlur,
	toasts,
} from '~/utils';
import { validateEditTodoForm } from '~/validator';
import { useTodosStore } from '~store/store';
import { selectIsLoading, selectUpdateTodo } from '~store/todos/selectors';
import { BtnClickEvent } from '~typings/auth.types';
import {
	IUseEditTodoFormProps,
	NewTodo,
	IUseEditTodoForm,
} from '~typings/todos.types';

const useEditTodoForm = ({
	todo: { date, complete, id },
	setTodo,
}: IUseEditTodoFormProps): IUseEditTodoForm => {
	const [checked, setChecked] = useState<boolean>(() => complete);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<NewTodo>();
	const { taskDeadline } = getDeadlineParams(date);
	const isLoading = useTodosStore(selectIsLoading);
	const updateTodo = useTodosStore(selectUpdateTodo);

	useEffect(() => {
		const invalidFields = Object.keys(errors);
		if (invalidFields.length) {
			validateEditTodoForm(errors);
		}
	}, [errors, isSubmitting]);

	const handleFormSubmit: SubmitHandler<NewTodo> = async (data) => {
		const date = new Date(data.date);
		const updateData = { ...data, date: String(date) };
		const result = await updateTodo({ data: updateData, id });
		toasts.successToast(Messages.updateSuccess);
		setTodo && setTodo(result);
	};

	const onCheckboxChange = (): void => {
		setChecked((prevState) => !prevState);
	};

	const onAcceptBtnClick = (e: BtnClickEvent): void => {
		makeBlur(e.currentTarget);
	};

	const onResetBtnClick = (e: BtnClickEvent): void => {
		makeBlur(e.currentTarget);
		setChecked(complete);
		reset();
	};

	return {
		register,
		handleSubmit,
		onCheckboxChange,
		onAcceptBtnClick,
		onResetBtnClick,
		taskDeadline,
		handleFormSubmit: handleFormSubmitWrap(handleFormSubmit),
		isLoading,
		checked,
	};
};

export default useEditTodoForm;
