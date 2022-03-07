import "./avatar.css"
import avatar from "../../Images/3800_2_03.jpg"
const Avatar=()=>{
    return(
        <div className="Avatar">
            <img src={avatar} alt="Image of an astronaut" />
        </div>
    )
}

export default Avatar;