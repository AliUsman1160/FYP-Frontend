import * as Yup from "yup";

export const signinscema = Yup.object({
    mail: Yup.string().email().required("Please enter email."),
    password: Yup.string().min(6).required("Please enter you password."),
});