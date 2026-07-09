import DefaultLayout from "@/layouts/DefaultLayout.vue";
import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.vue";
import ResetPasswordPage from "./pages/ResetPasswordPage.vue";
import VerifyEmailPage from "./pages/VerifyEmailPage.vue";
import SuccessPage from "./pages/SuccessPage.vue";
export default [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "login",
        name: "login",
        component: LoginPage,
      },
      {
        path: "register",
        name: "register",
        component: RegisterPage,
      },
      {
        path: "forgot-password",
        name: "forgot-password",
        component: ForgotPasswordPage,
      },
      {
        path: "reset-password",
        name: "reset-password",
        component: ResetPasswordPage,
      },
      {
        path: "verify-email",
        name: "verify-email-password",
        component: VerifyEmailPage,
      },
      {
        path: "success",
        name: "success",
        component: SuccessPage,
      },
    ],
  },
];
