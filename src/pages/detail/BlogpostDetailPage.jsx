import React, {useState} from 'react';
import './BlogpostDetailPage.css';
import {Link} from "react-router-dom";

import {useParams} from "react-router-dom";
import formatDateString from "../../helpers/formatDateString.js";
import axios from "axios";


function BlogpostDetailPage() {
    const [blogInfo, setBlogInfo] = useState({});
    const [error, toggleError] = useState(false)

    const {blogId} = useParams(); // pakt wat achter de / wordt gezet in de url

    async function fetchBlogInfo() {
        toggleError(false);
        try {
            const response = await axios.get(`http://localhost:3000/posts/${blogId}`);
            setBlogInfo(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
            toggleError(true);
        }
    }


    return (
        <>
            <button type="button" className="detailpage-button" onClick={fetchBlogInfo}>Haal post op</button>
            {Object.keys(blogInfo).length > 0 &&
                <div className="container-blogdetails">
                    <h1>{blogInfo.title}</h1>
                    <h2>{blogInfo.subtitle}</h2>
                    <p className="post-detail-author">Geschreven door <em>{blogInfo.author}</em> op {formatDateString(blogInfo.created)}</p>
                    <span className="post-detail-read-time">
                        <p> {blogInfo.readTime} minuten lezen</p>
                </span>
                    <p>{blogInfo.content}</p>
                    <p>{blogInfo.comments} reacties - {blogInfo.shares} gedeeld</p>
                </div>}
            <p><Link to="/blogposts">Breng mij terug naar de overzichtspagina!</Link></p>
        </>
    );
}

export default BlogpostDetailPage;


