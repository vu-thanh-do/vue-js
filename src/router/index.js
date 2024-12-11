import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RegisterPage from "@/views/ResigterView.vue";
import LoginPage from "@/views/SigninView.vue";
import BookStayView from "@/views/BookStayView.vue";
import DetailRoomView from "@/views/DetailRoomView.vue";
import ProfileView from "@/views/ProfileView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/register", name: "Register", component: RegisterPage },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/book-stay", name: "BookStay", component: BookStayView },
  { path: "/detail-room", name: "DetailRoom", component: DetailRoomView },
  { path: "/profile", name: "ProfileView", component: ProfileView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
