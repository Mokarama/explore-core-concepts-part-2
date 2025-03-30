

import Friend from './Friend';
import './Friend.css'


export default function Friends(){

    const [friends, setFriends] = useState([]);



    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Response => Response.json())
        .then(data => setFriends(data))
    },[]);


    return(
        <div className='box'>
            <h3>Friends:{ friends.length}</h3>
            {
              friends.map(friend => <Friend friend={friend}></Friend>  )  
            }
        </div>
    )
}


/**
 * 1.state to hold data
 * 2.use eFFect with dependency array
 * 3.use Fetch to load data 
 * 4.set loaded data to the state 
 * 
 */