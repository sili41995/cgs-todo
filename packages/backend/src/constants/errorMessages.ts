import ProfileSettings from './profileSettings';

const enum ErrorMessages {
	titleReqErr = 'Missing required title field',
	descReqErr = 'Missing required description field',
	dateReqErr = 'Missing required date field',
	missingFieldsErr = 'Missing fields',
	nameReqErr = 'Missing required name field',
	passwordReqErr = 'Missing required password field',
	passwordMinLengthErr = `Password length must be at least ${ProfileSettings.passMinLength} characters long`,
	passwordMaxLengthErr = `Password length must be no more than ${ProfileSettings.passMaxLength} characters long`,
	emptyStringErr = 'Value cannot be the empty string',
	emailReqErr = 'Missing required email field',
	emailRegExpErr = 'Email must be letters, digits, dot, special symbols and @',
	userNotFound = 'User not found',
	duplicateEmailErr = 'Email already use',
	incorrectCredentialsErr = 'Email or password is wrong',
}

export default ErrorMessages;
