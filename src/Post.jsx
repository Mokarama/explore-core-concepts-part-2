import { useEffect, useState } from "react";

export default function Posts(){
const [posts, setPosts] =useState([]);
useEffect( () =>{

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data =>setPosts(data))

},[])


return(
    <div>
        <h3>Posts:{posts.length}</h3>
    </div>
)
}