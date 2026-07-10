import { PASSWORD_MIN_LENGTH } from "@/constants/validation";
import { invalidEmail, match, minLength, accept, required } from "./rules";

export const validateLogin = (form) => {
  const errors = {};
  errors.email = required(form.email, "Email") || invalidEmail(form.email);
  errors.password = required(form.password, "Password") || minLength(form.password, PASSWORD_MIN_LENGTH, "Password");
  if (!errors.email && !errors.password) {
    return;
  }
  return errors;
};

export const validateRegister = (form) => {
  const errors = {};
  errors.fullName = required(form.fullName, "Full name");
  errors.email = required(form.email, "Email") || invalidEmail(form.email);
  errors.password = required(form.password, "Password") || minLength(form.password, PASSWORD_MIN_LENGTH, "Password");
  errors.confirmPassword =
    required(form.confirmPassword, "Confirm password") || match(form.password, form.confirmPassword, "Password");
  errors.policy = accept(form.policy);
  if (!errors.email && !errors.password && !errors.fullName && !errors.confirmPassword && !errors.policy) {
    return;
  }
  return errors;
};

export const validateForgotPassword = (form) => {
  const errors = {};
  errors.email = required(form.email, "Email") || invalidEmail(form.email);
  if (!errors.email) {
    return;
  }
  return errors;
};

export const validateResetPassword = (form) => {
  const errors = {};
  errors.newPassword = required(form.newPassword, "Password") || minLength(form.newPassword, PASSWORD_MIN_LENGTH, "Password");
  errors.confirmNewPassword =
    required(form.confirmNewPassword, "Confirm password") || match(form.newPassword, form.confirmNewPassword, "Password");
  if (!errors.newPassword && !errors.confirmNewPassword) {
    return;
  }
  return errors;
};

export const validateVerifyEmail = (form, length) => {
  const errors = {};
  let hasError = false;
  for (let i = 0; i < length; i++) {
    const id = `otp${i}`;
    errors[id] = required(form[id] || "", "Code");
    if (errors[id]) hasError = true;
  }
  if (!hasError) {
    return;
  }
  return errors;
};

export const clearError = (error, field) => {
  error[field] = "";
};
