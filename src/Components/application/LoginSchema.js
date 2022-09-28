import * as Yup from "yup";

export const LoginSchema = Yup.object({
  username: Yup.string().required("Email is Required"),
  password: Yup.string().required("password is Required"),
});
