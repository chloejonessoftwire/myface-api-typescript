import './App.css';


function UserProfile(props){
    return (
        <div> 
            <p> Profile Page! </p>
            <img src={props.profile.coverImageUrl} alt="cover image" />
            <div> User ID: {props.profile.id} </div>
            <img src={props.profile.profileImageUrl} alt="profile image"/>
            <div> {props.profile.name} </div>
            <div> {props.profile.username} </div>
            <div> {props.profile.email} </div>
            
            <div>
            
                 {props.profile.posts.map(item => 
                 
                 <div>
                     <img src={item.imageUrl} alt="profile image"/>
                     <div>{item.message}</div>
                     <div>{item.createdAt} </div>
                     

                     
                </div>
                 
                 
                 )}


            </div>
            
        </div>
    )
}
export default UserProfile;