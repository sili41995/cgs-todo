import Joi from 'joi';
import { ErrorMessages, ProfileSettings } from '@/constants';
import regExp from '@/constants/regExp';

const nameSettings = Joi.string().messages({
	'any.required': ErrorMessages.nameReqErr,
});

const passwordSettings = Joi.string()
	.pattern(regExp.notEmptyValue)
	.min(ProfileSettings.passMinLength)
	.max(ProfileSettings.passMaxLength)
	.messages({
		'any.required': ErrorMessages.passwordReqErr,
		'string.min': ErrorMessages.passwordMinLengthErr,
		'string.max': ErrorMessages.passwordMaxLengthErr,
		'string.pattern.base': ErrorMessages.emptyStringErr,
	});

const emailSettings = Joi.string().pattern(regExp.email).messages({
	'any.required': ErrorMessages.emailReqErr,
	'string.pattern.base': ErrorMessages.emailRegExpErr,
});

const registerSchema = Joi.object({
	name: nameSettings.required(),
	password: passwordSettings.required(),
	email: emailSettings.required(),
});

const loginSchema = Joi.object({
	password: passwordSettings.required(),
	email: emailSettings.required(),
});

const restorePasswordSchema = Joi.object({
	email: emailSettings.required(),
});

const updatePasswordSchema = Joi.object({
	password: passwordSettings.required(),
});

const schemas = {
	registerSchema,
	loginSchema,
	restorePasswordSchema,
	updatePasswordSchema,
};

export default schemas;
