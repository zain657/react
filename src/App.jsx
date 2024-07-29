import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Nav from './component/navBar/Nav'
import Home from './component/Home/Home'
import Layout from './component/layout/Layout'
import About from './component/About/About'
import Portfolio from './component/portfolio/Portfolio'
import Contact from './component/contact/Contact'

function App() {
  let router=createBrowserRouter([
    {path:'/react/', element:<Layout/>,children:
      [
        {index:true,element:<Home/>},
        {path:'about',element:<About/>},
        {path:'portfolio',element:<Portfolio/>},
        {path:'contact',element:<Contact/>},
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
