import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post">
            <div>
                <strong>{props.post.id}.{props.post.title}</strong>
                <p>{props.post.body}</p>
            </div>
            <div className="post_btns">
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem