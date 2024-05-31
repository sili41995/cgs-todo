import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { ITodosState } from '~typings/todos.types';
import todosStore from './todos/todos.store';
import authStore from './auth/auth.store';
import { IAuthState } from '~typings/auth.types';

export const useAuthStore = create<IAuthState>()(
	devtools(
		persist(authStore.store, authStore.storageParams),
		authStore.devToolsParams,
	),
);

export const useTodosStore = create<ITodosState>()(
	devtools(todosStore.store, todosStore.params),
);
