import Login from './pages/login/Login'
import "./style.scss"
import Register from './pages/register/Register';
import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from 'react-router-dom';
import Rightbar from './components/rightbar/rightbar';
import Leftbar from './components/leftbar/leftbar';
import Navbar from './components/navbar/navbar';
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile"
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from "./context/authContext";

function App() {

  
  const currentUser = true;

  const {darkMode} = useContext(DarkModeContext)

  const Layout = () =>{
    return(
        
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display: "flex"}}>
          <Leftbar/>
          <div style={{flex: 6}}>
           <Outlet/>
          </div>
          <Rightbar/>
         </div>
       </div>
    )
  }

  const ProtectedRoute = ({children}) =>{
     if(!currentUser){
      return <Navigate to="/Login"/>
     }

     return children
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ),
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/profile/:id",
          element: <Profile/>
        }
      ]
     },
     {
      path: "/login",
      element: <Login/>
     },
     {
      path: "/register",
      element: <Register/>
     }
  ]);

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
