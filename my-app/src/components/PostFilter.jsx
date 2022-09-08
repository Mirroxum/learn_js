import React from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})}
                placeholder="Поиск..."/>
            <MySelect 
                value = {filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={"Сортировка"}
                options={[
                {value: 'title', name: 'По заголовку'},
                {value: 'body', name: 'По описанию'}
                ]}/>
            
            {/* <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Кол-во элементов на странице"
                options={[
                {value: 5, name: '5'},
                {value: 10, name: '10'},
                {value: 25, name: '25'},
                {value: 50, name: '50'},
                {value: -1, name: 'Показать всё'},
            ]}/> */}
        </div>
    );
};

export default PostFilter
