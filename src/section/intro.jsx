import Image1 from "../assets/1.jpg"
import "../css/intro.css"
function Intro(){
    return(
        <>
            <div 
                className="section-intro" 
                style={{ backgroundImage: `url(${Image1})`}} // Menggunakan image yang diimport sebagai background
            >
                <div className="image-title">
                    <h1>Wedding</h1>
                    <h3>Song Eun Min & Kim Joya</h3>
                    <p>December 12th 2024</p>
                </div>
                <div className="button-open">
                    Open Here
                </div>
            </div>
        </>
    )
}
export default Intro