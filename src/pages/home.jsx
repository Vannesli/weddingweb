import Intro from "../section/intro.jsx"
import Invite from "../section/invite.jsx"
import Location from "../section/Location.jsx"
import Gallery from "../section/Gallery.jsx"
import Footer from "../section/footer.jsx"
import "../css/home.css"

function Home(){
    return(
        <>
            <div className="wrapper">
                <Intro />
                <Invite />
                <Location />
                <Gallery/>
                <Footer/>
                {/* <h1>footer</h1> */}
            </div>
        </>
    )
}
export default Home