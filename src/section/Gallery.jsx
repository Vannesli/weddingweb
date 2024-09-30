import "../css/gallery.css"
import Foto3 from "../assets/2.jpg"
function Gallery(){
    return(
        <>
            <div className="section-gallery">
                <div className="title-gallery">
                    <h1>Gallery</h1>
                </div>
                <div className="container-grid">
                    <div className="grid1">
                        <img src={Foto3}></img>
                    </div>
                    <div className="grid2">
                        <img src={Foto3}></img>
                        <img src={Foto3}></img>
                    </div>
                    <div className="grid3">
                        <img src={Foto3}></img>
                    </div>
                    <div className="grid4">
                        <img className="grid4-1" src={Foto3}></img>
                        <img className="grid4-2" src={Foto3}></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Gallery