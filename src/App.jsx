import './App.css'
import logo from './assets/logo.png'
import Homepage from './pages/homepage/Homepage.jsx';
import {Routes, Route} from "react-router-dom";
import OverviewPage from "./pages/overview/OverviewPage.jsx";
import BlogpostDetailPage from "./pages/detail/BlogpostDetailPage.jsx";
import NewBlogPost from "./pages/new/NewBlogPost.jsx";
import Navigation from './components/navigation/./Navigation.jsx';
import { useForm } from 'react-hook-form';
import NotFound from "./pages/notFound/notFound.jsx";

function App() {
    return (
    <>
        <div className="page-container">
            <img src={logo} alt="Company logo"/>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/new" element={<NewBlogPost/>}/>
                <Route path="/blogposts" element={<OverviewPage/>}/>
                <Route path="/blogposts/:blogId" element={<BlogpostDetailPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    </>
    )
}

export default App
