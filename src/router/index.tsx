import Home from "../pages/home"

export const createRoutes = (store: any) => ({
  path: '/',
  component: Home,
  indexRoute: Home
})

export default createRoutes
