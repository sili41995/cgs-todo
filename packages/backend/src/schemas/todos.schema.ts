import Joi from 'joi';
import { ErrorMessages } from '@/constants';

const titleSettings = Joi.string().messages({
	'any.required': ErrorMessages.titleReqErr,
});

const descriptionSettings = Joi.string().messages({
	'any.required': ErrorMessages.descReqErr,
});
const booleanPropSettings = Joi.boolean();
const dateSettings = Joi.string()

	.messages({ 'any.required': ErrorMessages.dateReqErr });

const addSchema = Joi.object({
	title: titleSettings.required(),
	description: descriptionSettings.required(),
	private: booleanPropSettings,
	complete: booleanPropSettings,
	date: dateSettings.required(),
});

const updateSchema = Joi.object({
	title: titleSettings,
	description: descriptionSettings,
	private: booleanPropSettings,
	complete: booleanPropSettings,
	date: dateSettings,
})
	.min(1)
	.messages({
		'object.min': ErrorMessages.missingFieldsErr,
	});

const schemas = { addSchema, updateSchema };

export default schemas;
