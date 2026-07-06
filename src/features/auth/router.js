import DefaultLayout from "@/layouts/DefaultLayout.vue";
import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
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
        component: RegisterPage
      }
    ],
  },
];
