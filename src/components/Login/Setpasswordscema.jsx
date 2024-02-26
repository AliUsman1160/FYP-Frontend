import * as Yup from "yup";

export const Setpasswordscema = Yup.object({
    password: Yup.string().min(6).required("Please enter you password.").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Password not according to mentioned standard."
    ),
    Confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Password not match"),
});