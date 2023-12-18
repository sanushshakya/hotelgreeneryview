import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import './App.scss'


//import components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//import pages
import Home from "./pages/Home/Home";
import About from "./pages/About Us/About";
import Room from "./pages/Room/Room";
import Reserve from "./pages/Reserve/Reserve";
import Gallery from "./pages/Gallery/Gallery";


function App() {
  const Layout = () => {
    return (
      <div className="layout">
        <Navbar />
        <Outlet />
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/room',
          element: <Room />
        },
        {
          path: '/reserve',
          element: <Reserve />
        },
        {
          path: '/gallery',
          element: <Gallery />
        },
      ]
    }
  ])

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  )
}

export default App
