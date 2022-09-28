import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import MyLoader from "../UI/loader/MyLoader";

function PostsPage() {
    const navigate = useNavigate()
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async ()=> {
        const response = await PostService.getPost(params.id);
        setPost(response.data);
    })
    const [fetchComment, isLoadingComment, errorComment] = useFetching(async ()=> {
        const response = await PostService.getComment(params.id);
        setComments(response.data);
    })
    useEffect(() => {
        fetchPostById();
        fetchComment();
        console.log(error)
    }, [])
  return (
    <div className="App">
    {isLoading && isLoadingComment
        ? <div style={{display: "flex", justifyContent: "center", marginTop: "100px"}}><MyLoader/></div>
        :<div>
            <div className="post__page">
                <h1 align="center">{post.id}. {post.title}</h1>
                <br/>
                <hr/>
                <br/>
                {post.body}
            </div>
            <br/>
            <h3 align="center">Комментарии</h3>
            <div>{comments.map(comment => 
            <div className="comment" key={comment.id} style={{marginTop: "15px"}}>
                <h5>{comment.name}</h5>
                <div>{comment.body}</div>
            </div>)}</div>
        </div> 
        }
    {error && navigate(`/error`)}
    </div>
  );
}


export default PostsPage;