import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import MyLoader from "../UI/loader/MyLoader";

function PostsPage() {
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
    }, [])
  return (
    <div>
    <h1>Мы перешли на страницу поста №{params.id}</h1>
    {isLoading
        ? <MyLoader/>
        : <div>{post.id}, {post.title}</div>}
    <h1>Комментарии</h1>
    {isLoadingComment
        ? <MyLoader/>
        : <div>{comments.map(comment => 
            <div key={comment.id} style={{marginTop: "15px"}}>
                <h5>{comment.name}</h5>
                <h5>{comment.email}</h5>
                <div>{comment.body}</div>
            </div>)}</div>}

    </div>
  );
}


export default PostsPage;