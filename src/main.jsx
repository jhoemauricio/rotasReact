import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import './index.css'

//1 - configurando router
import { createBrowserRouter, RouterProvider } from "react-router-dom";


//importa componentes
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import ErrorPage from './routes/errorPage';
import  ContactDetails  from './routes/ContactDetails';


//Maneira simples de configurar Rotas
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "contact",
//     element: <Contact />,
//   }
// ])

const router = createBrowserRouter([
  {
   path: "/",
   element: <App />,
   //3 - pagina de erro
   errorElement: <ErrorPage />,
   //estao abaixo do elemento principal, serão carregadas no OUTLET
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />,
      },

      //5 - nested routes - identificador (Rotas dinÂmicas)
      {
        path: "/contact/:id",
        element: <ContactDetails />
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
