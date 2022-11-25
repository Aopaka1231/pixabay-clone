import {useRef, useState} from "react";
import './App.css';
import ImageGrallery from './ImageGrallery';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    //APIURL
    const endpointURL = 
    `https://pixabay.com/api/?key=31597596-08184701489b752e51d9f7699&q=${ref.current.value}&image_type=写真`;
    //APIを叩く(データフェッチング)
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits);
        setFetchData(data.hits);
      });
  }

  return (
    <div className="container">
      <h2>My pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像をさがす" ref={ref}/>
      </form>
      <ImageGrallery fetchData={fetchData}/>
    </div>
  );
}

export default App;
