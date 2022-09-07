import React from "react";
import { useNavigate } from "react-router";
import MyButton from "./UI/button/MyButton";


const PostItem = (props) => {
    const router = useNavigate()
    return (
        <div className="post">
            <div>
                <strong>{props.post.id}.{props.post.title}</strong>
                <p>{props.post.body}</p>
            </div>
            <div className="post_btns">
                <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem