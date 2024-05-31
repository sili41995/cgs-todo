declare module '@emotion/react' {
	export interface Theme extends ITheme {}
}

interface ITheme {
	colors: {
		primary: string;
		secondary: string;
		other: string;
		accentColor: string;
		green: string;
		white: string;
		grey: string;
		lightgrey: string;
		primaryFont: string;
		blueBtn: string;
		redBtn: string;
		redIcon: string;
		greenBtn: string;
		greenIcon: string;
		red: string;
		authFormBGColor: string;
	};
	fontFamily: {
		primary: string;
	};
	fontWeight: {
		primary: number;
		other: number;
	};
	fontSize: {
		primary: number;
		secondary: number;
		title: number;
		other: number;
	};
	padding: {
		container: number;
		authForm: number;
	};
	borderRadius: {
		primary: number;
		secondary: number;
		other: number;
	};
	shadows: {
		primary: string;
		secondary: string;
	};
	transitionDurationAndFunc: string;
	spacing: (value?: number) => string;
	trimText: string;
}

const theme: ITheme = {
	colors: {
		primary: '#3470ff',
		secondary: '#4d5ae5',
		other: '#38b6ff',
		primaryFont: '#141414',
		accentColor: '#0b44cd',
		green: '#00FF00',
		white: '#FFFFFF',
		grey: '#555759',
		lightgrey: '#d3d3d3',
		blueBtn: '#7fd1ff',
		redBtn: '#ff9192',
		redIcon: '#d3232f',
		greenBtn: '#89f2a6',
		greenIcon: '#00c938',
		red: '#ff0000',
		authFormBGColor: '#fcfcfc',
	},
	fontFamily: {
		primary: 'Manrope',
	},
	fontWeight: {
		primary: 600,
		other: 500,
	},
	fontSize: {
		primary: 16,
		secondary: 20,
		title: 36,
		other: 24,
	},
	padding: {
		container: 16,
		authForm: 32,
	},
	borderRadius: {
		primary: 8,
		secondary: 4,
		other: 30,
	},
	shadows: {
		primary: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
		secondary: '0px 4px 17px 0px rgba(0, 0, 0, 0.17)',
	},
	transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
	spacing: (value = 1) => `${value * 4}px`,
	trimText: `word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;`,
};

export default theme;
