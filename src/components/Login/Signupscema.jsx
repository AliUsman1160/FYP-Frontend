import * as Yup from "yup";

export const signupscema = Yup.object({
    username: Yup.string().required("Please enter user name."),
    Mail: Yup.string().email().required("Please enter email."),
    Password: Yup.string().min(6).required("Please enter you password.").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Password not according to mentioned standard."
    ),
    Confirm_password: Yup.string().required().oneOf([Yup.ref("Password"), null], "Password not match"),
});

