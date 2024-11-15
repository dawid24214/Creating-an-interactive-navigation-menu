import { useState } from 'react';
import ReactDom from 'react-dom/client'
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import {Header} from './component jsx/Header.jsx'
import {HomePage} from './pages/HomePage.jsx'
import {AboutPage} from "./pages/AboutPage.jsx"
import {ServicePage} from "./pages/ServicePage.jsx"
import {EventsPage} from "./pages/EventsPage.jsx"
import {GalleryPage} from "./pages/GalleryPage.jsx"
import {ContactPage} from "./pages/ContactPage.jsx"
import {FaqPage} from "./pages/FaqPage.jsx"

const HomeLayout = () => {
    return(
        < div className= 'App'>
            <Header/>
            <Outlet/>
        </div>
    )
}
const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeLayout/>}>
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FaqPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
const App = () => {
    return(
        <>
            <Router/>;
        </>
    )
}


const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);
root.render(<App/>);
export default App
