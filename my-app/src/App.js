import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import './styles/app.css';

function App() {

    const [posts, setPosts] = useState([
      {id: 1, title: 'JavaScript', body: 'Descriptions Descriptions Descriptions Descript ionsDescriptionsDescrip tionsDescriptionsDescriptio ns DescriptionsDescript ionsDescriptions Descriptions'},
      {id: 2, title: 'Python', body: 'Descriptions'},
      {id: 3, title: 'C#', body: 'Descriptions'},
    ])

    const createPost = (newPost) => {
      setPosts([...posts, newPost])
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
    }

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
      console.log('функция вызвана')
      if(filter.sort) {
        return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
      }
      return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: "15px 0"}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}/>
      <PostList 
        posts = {sortedAndSearchedPosts}
        remove={removePost}
        title = "Список постов 1"/>
    </div>
  );
}

export default App;
