import { useState } from 'react'
import ReactDom from 'react-dom/client'
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import {Home} from './component jsx/main_menu/Home.jsx'
const HomeLayout = () => {
    return(
        < div className= 'App'>
            <Home/>
            <Outlet/>
        </div>
    )
}
const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeLayout/>}>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
const App = () => {
    return(
        <>
            <Router/>
        </>
    )
}


const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);
root.render(<App/>);
export default App
