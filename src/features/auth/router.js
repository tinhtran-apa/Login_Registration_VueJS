import DefaultLayout from "@/layouts/DefaultLayout.vue";
import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.vue";
import ResetPasswordPage from "./pages/ResetPasswordPage.vue";
import VerifyEmailPage from "./pages/VerifyEmailPage.vue";
import SuccessPage from "./pages/SuccessPage.vue";
import { ROUTES } from "@/constants/routes.js";
export default [
  {
    path: "/",
    redirect: ROUTES.LOGIN,
    component: DefaultLayout,
    children: [
      {
        path: ROUTES.LOGIN,
        name: "login",
        component: LoginPage,
      },
      {
        path: ROUTES.REGISTER,
        name: "register",
        component: RegisterPage,
      },
      {
        path: ROUTES.FORGOT_PASSWORD,
        name: "forgot-password",
        component: ForgotPasswordPage,
      },
      {
        path: ROUTES.RESET_PASSWORD,
        name: "reset-password",
        component: ResetPasswordPage,
      },
      {
        path: ROUTES.VERIFY_EMAIL,
        name: "verify-email-password",
        component: VerifyEmailPage,
      },
      {
        path: ROUTES.SUCCESS,
        name: "success",
        component: SuccessPage,
      },
    ],
  },
];
