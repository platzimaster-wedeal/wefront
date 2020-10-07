const validatePassword = (pass, confirmPass) => {
 const isNumber = /[0-9]{1,}/;
 const isValidated = /[0-9a-zA-Z]{6,}/ims;
 if (String(pass.match(isNumber)) === false) return false;
 if (String(pass.match(isValidated)) === false) return false;
 if (String(pass) !== String(confirmPass)) return false;

 return true;
};

export const validateRegister = (data) => {
 const correctPassword = validatePassword(data.password, data.confirmPassword);

 if (!correctPassword) {
  throw new Error(
   "Your password must have one number at least and six characters"
  );
  return false;
 }

 if (!data.id_work_area) {
  throw new Error("You need to fill the whole form");
 }

 if (!data.id_language) {
  throw new Error("You need to fill the whole form");
 }

 return true;
};
