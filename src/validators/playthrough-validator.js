import ValidatorJs from 'validator.js';

const is = ValidatorJs.Assert;
const validator = ValidatorJs.validator();

export function validate(playthrough) {
  const constraints = {
    id: [is.greaterThan(0), is.required()],
    name: [is.notBlank(), is.required()],
    titleId: [is.required(), is.notBlank(), is.isString()]
  };
  
  return validator.validate(playthrough, constraints) == true;
}