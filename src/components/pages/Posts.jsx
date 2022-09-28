import React, { useEffect, useRef, useState } from "react";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
import { usePosts } from "../hooks/usePosts";
import PostFilter from "../PostFilter.jsx";
import PostForm from "../PostForm";
import PostList from "../PostList";
import MyButton from "../UI/button/MyButton";
import MyLoader from "../UI/loader/MyLoader";
import MyModal from "../UI/modal/MyModal";
import {getPageCount} from "../utils/pages";

function Posts() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, PostsError] = useFetching(async() => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
      setPage(page+1)
    })

    useEffect(() => {fetchPosts()}, [page, limit]);

    
    const createPost = (newPost) => {
      setPosts([...posts, newPost]);
      setModal(false);
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p !== post));
    }

  return (
    <div className="App">
      <MyButton
        onClick={() => setModal(true)}
        style={{marginTop: "15px"}}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: "15px 0"}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}/>
      {PostsError &&
        <h1>Произошла ошибка: {PostsError}</h1>
        }
        <div><PostList 
            posts={sortedAndSearchedPosts}
            remove={removePost}
            title="Список постов JS"/>
        <div ref = {lastElement} style={{height:20}}></div>
      {isPostsLoading &&
        <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}><MyLoader/></div>}
    </div>
    </div>
  );
}


export default Posts;
