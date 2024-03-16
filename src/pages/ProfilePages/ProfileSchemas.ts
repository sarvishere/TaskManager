import { z } from "zod";

export const personalInfoSchema=z.object(
{
    first_name:z.string().min(3,{message:"نام باید حداقل سه کاراکتر داشته باشد"}),
    last_name:z.string().min(3,{message:"نام خانوادگی باید حداقل سه کاراکتر داشته باشد"}),
    phone_number:z.string().regex(/^0\d{10}$/, { message: "لطفا یک شماره تلفن معتبر وارد کنید" }),
    thumbnail:z.instanceof(FileList,{message:"فرمت فایل وارد شده معتبر نیست"})
}
)


export const accountInfoSchema = z.object({
  email: z.string().email({ message: "لطفاً یک ایمیل معتبر وارد کنید" }),
  username: z.string().min(3, { message: "نام کاربری باید حداقل سه کاراکتر داشته باشد" }),
  old_password: z.string(),
  new_password: z.string(),
  new_password1: z.string()
}).refine(data => data.new_password1 === data.new_password , {path:['new_password1'], message: "رمز عبور جدید و تکرار آن باید مطابقت داشته باشند" })
