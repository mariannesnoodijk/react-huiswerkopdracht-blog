import React, {useState} from 'react';
import './BlogpostDetailPage.css';
import {Link} from "react-router-dom";

import {useParams} from "react-router-dom";
import posts from "../../constants/data.json";
import formatDateString from "../../helpers/formatDateString.js";


function BlogpostDetailPage() {
    const [,] = useState();
    const {blogId} = useParams();

    const {title, readTime, subtitle, author, created, content, comments, shares} = posts.find((post) => {
        return post.id.toString() === blogId;
    });



    return (
        <>
            <div className="container-blogdetails">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p className="post-detail-author">Geschreven door <em>{author}</em> op {formatDateString(created)}</p>
                <span className="post-detail-read-time">
                    {/*<Clock color="#50535C" size={18}/>*/}
                    <p> {readTime} minuten lezen</p>
                </span>
                <p>{content}</p>
                <p>{comments} reacties - {shares} gedeeld</p>
            </div>
            <p><Link to="/blogposts">Breng mij terug naar de overzichtspagina!</Link></p>
        </>
    );
}

export default BlogpostDetailPage;

