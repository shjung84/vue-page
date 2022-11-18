import Layout from "@/layout/page";

const homeRouter = {
  path: "/",
  component: Layout,
  children: [
    {
      path: "home",
      component: () => import("@/views/home"),
      meta: { title: "Home" },
    },
  ],
};

export { homeRouter };
