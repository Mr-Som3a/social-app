import { createBrowserRouter } from "react-router-dom"
import HomePage from "scenes/homePage"
import LoginPage from "scenes/loginPage"
import ProfilePage from "scenes/profilePage"
const router = createBrowserRouter([
    {
        path:'/login',
        element:<LoginPage/>
    },
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/home',
        element:<HomePage/>
    },
    {
        path:'/profile',
        element:<ProfilePage/>
    },
])

export default router 