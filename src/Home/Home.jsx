import "./Home.css";
import NavBar from "../Components/NavBar/nav";
import Intro from "../Sections/intro/intro";
import Skills from "../Sections/skills/skills";
import Avatar from "../Sections/avatar/avatar";


const Home = ()=>{
    return(
        <div className="Home">
            <NavBar/>
            <Intro/>
            <Avatar/>
            <Skills/>
            
        </div>
    )
}
export default Home;