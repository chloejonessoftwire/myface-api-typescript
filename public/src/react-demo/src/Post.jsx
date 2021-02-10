
import './App.css';


function Post(props){
    return (
        <div> 
            <img src={props.post.postedBy.profileImageUrl} alt="profileimage"/>
            <div> {props.post.postedBy.username} </div>
            <div> {props.post.createdAt} </div>
            <div> {props.post.message} </div>
            <img src={props.post.imageUrl} alt="postimage" />
            <div> Likes: {props.post.likedBy.length} </div>
            <div> Dislikes: {props.post.dislikedBy.length} </div>
        </div>
    )
}
export default Post;