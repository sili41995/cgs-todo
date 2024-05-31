import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from '~shared/styles';
import Toast from '~shared/components/toast';
import { theme } from './constants';
import Router from './router/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Router />
				<GlobalStyles />
				<Toast />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
