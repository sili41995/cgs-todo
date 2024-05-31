import AuthParams from './authParams';

const enum Messages {
	notFound = 'Not Found',
	greetings = 'Welcome to Todo',
	nameReqErr = 'Name is required',
	passReqErr = 'Password is required',
	passMinLengthErr = `Password minimum length is ${AuthParams.passMinLength} characters`,
	passMaxLengthErr = `Password maximum length is ${AuthParams.passMaxLength} characters`,
	emailReqErr = 'Email is required',
	emailRegExpErr = 'Email must be letters, digits, dot and @',
	passRepeatErr = 'The entered passwords must be the same',
	emptyTodosList = 'Todos list is empty',
	todoAbsent = 'Todo is absent',
	titleReqErr = 'Title is required',
	descriptionReqErr = 'Description is required',
	dateReqErr = 'Date is required',
	signUpSuccess = 'An email was sent to confirm registration',
	signInSuccess = 'Hello, my friend!',
	verifySuccess = 'Your email address has been successfully verified',
	addSuccess = 'Todo added successfully',
	deleteSuccess = 'Todo successfully removed',
	updateSuccess = 'Todo successfully updated',
	recoverEmailSuccess = 'A confirmation email has been sent',
	updPassSuccess = 'Password updated successfully',
	goodbye = 'Goodbye!',
	about = 'This app was developed for demonstrate to showcase my skills in HTML, CSS, JavaScript, TypeScript, React, React Router, and Zustand to future employers. A server application was developed to securely store information.',
}

export default Messages;
