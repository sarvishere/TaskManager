import { z } from "zod";
import errorMap from "zod/locales/en.js";

export const validationErrors = {
  username: "نام کاربری باید حداقل ۳ کاراکتر داشته باشد.",
  email: "لطفاً یک ایمیل معتبر وارد کنید.",
  password: "رمز عبور باید حداقل ۸ کاراکتر داشته باشد.",
  passwordRequired: "رمز عبور را وارد کنید.",
  termsAndConditions: "برای ثبت‌نام، قوانین را باید بپذیرید.",
};

export const registrationSchema = z.object({
  username: z.string().min(3, { message: validationErrors.username }),
  email: z.string().email({ message: validationErrors.email }),
  password: z.string().min(8, { message: validationErrors.password }),
  termsAndCondition: z.boolean().refine((value) => value === true, {
    message: validationErrors.termsAndConditions,
  }),
});

export const loginSchema = registrationSchema
  .pick({
    username: true,
  })
  .extend({
    password: z.string().min(1, { message: validationErrors.passwordRequired }),
  });

export const passwordResetSchema = registrationSchema.pick({ email: true });
