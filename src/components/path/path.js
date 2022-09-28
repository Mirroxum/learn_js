import About from "../pages/About"
import Error from "../pages/Error"
import Login from "../pages/Login"
import PostsPage from "../pages/PostPages"
import Posts from "../pages/Posts"

export const privatRoutes = [
    {path:"/", element: <Posts />},
    {path:"/posts", element: <Posts />},
    {path:"/about", element: <About />},
    {path:"/error", element: <Error />},
    {path:"/posts/:id", element: <PostsPage/>}
]

export const publicRoutes = [
    {path:"/login", element: <Login />},
    {path:"/about", element: <About />},
    {path:"/error", element: <Error />},
    {path:"/posts/:id", element: <PostsPage/>}
]
