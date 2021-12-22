import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";


function App() {


  const products = [
        {
            image: "https://www.smow.com/pics/vt-078-000/a/vitra-panton-chair-dark-lime_zoom.jpg",
            title: "green chair",
            price: 35.38
        },
        {
            image: "https://www.barkerandstonehouse.co.uk/images/swatchzoom/TWYFCHAIYELL_1_Zoom.jpg",
            title: "simple chair",
            price: 19.99
        },
        {
            image: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/87344_XXX_v1.tif&qlt=50&wid=650&cvt=jpeg",
            title: "fotelis chair",
            price: 55
        },
        {
            image: "https://images-na.ssl-images-amazon.com/images/I/41Jgo7WjH1L.jpg",
            title: "Boss chair",
            price: 128
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Set_of_fourteen_side_chairs_MET_DP110780.jpg/220px-Set_of_fourteen_side_chairs_MET_DP110780.jpg",
            title: "king chair",
            price: 88.25
        },
    ]
  let [getPage, setPage] = useState(0)



  return (
    <div className="App">
        <div className="header d-flex justify-content-around align-items-center">
            <div className="menu-item" onClick={() => {setPage(0)}}>Home</div>
            <div className="menu-item" onClick={() => {setPage(1)}}>Products</div>
            <div className="menu-item" onClick={() => {setPage(2)}}>Cart</div>
        </div>
        <div className="content">
            {getPage === 0 && <div className="homePage">
                <div>I like trains</div>
            </div>}
        </div>
    </div>
  );
}

export default App;
