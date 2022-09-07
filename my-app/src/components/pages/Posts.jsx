import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import PostFilter from "../PostFilter.jsx";
import PostForm from "../PostForm";
import PostList from "../PostList";
import MyButton from "../UI/button/MyButton";
import MyLoader from "../UI/loader/MyLoader";
import MyModal from "../UI/modal/MyModal";
import Pagination from "../UI/paginator/Pagination";
import {getPageCount} from "../utils/pages";

function Posts() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, PostsError] = useFetching(async() => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    })

    useEffect(() => {fetchPosts()}, [page]);
    
    const createPost = (newPost) => {
      setPosts([...posts, newPost]);
      setModal(false);
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p !== post));
    }

    const changePage = (page) => {
      setPage(page)
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
      {isPostsLoading
        ? <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}><MyLoader/></div>
        : <div><PostList 
            posts={sortedAndSearchedPosts}
            remove={removePost}
            title="Список постов JS"/>
          <Pagination 
            totalPages={totalPages}
            page={page} 
            changePage={changePage}/>
          </div>
      }
    </div>
  );
}


export default Posts;
