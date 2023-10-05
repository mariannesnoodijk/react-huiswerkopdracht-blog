import React, {useState} from 'react';
import './OverviewPage.css';
import posts from "../../constants/data.json";
// met ../ ga je elke keer naar een laag eerder
import {NavLink, Link, Navigate} from "react-router-dom";
import axios from "axios";


function OverviewPage() {
    const [posts, setPosts] = useState([]);
    const [error, toggleError] = useState(false);

    async function fetchBlog() {
        toggleError(false);
        try {
            const response = await axios.get('http://localhost:3000/posts');
            console.log(response.data);
            setPosts(response.data);
        } catch (error) {
            console.log(error);
            toggleError(true);
        }
    }


    return (
        <>
            <button type="button" className="overview-button" onClick={fetchBlog}>Haal posts op</button>
            <p>Aantal posts: {posts.length}</p>
            <div className="container">
                {posts.map((post) => (
                    <div className="container-post" key={post.id}>
                        <p><Link to={`/blogposts/${post.id}`}>{post.title}</Link> ({post.author})</p>
                        <p>{post.title} </p>
                        <p>{post.comments} reacties - {post.shares} gedeeld</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default OverviewPage;
