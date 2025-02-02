import { useContext, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/layout/Layout";
import Notfound from "./components/Notfound/Notfound";
import CallApiProvider, { CallApi } from "./Context/CallApiContext";
import GetDetailsMeals from './components/GetDetailsMeals/GetDetailsMeals';

let router = createBrowserRouter([
  {
    path: "meals/",
    element: <Layout />,
    children: [
      {index:true, element : <Home/>},
      {path: `GetDetailsMeals/:id/`, element : <GetDetailsMeals/>},
      {path: 'meals/1', element : <Notfound/>},
      {path: 'GetDetailsMeals/:id/*', element : <Notfound/>},
      // {path: '/GetDetailsMeals/:id/*', element : <Notfound/>}
    ]
  },
]);
function App() {
  
  return (
    <>
    <CallApiProvider>
    <RouterProvider router={router}></RouterProvider>
    </CallApiProvider>
    </>
  );
}

export default App;
