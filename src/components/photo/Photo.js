import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

//call api
const getPhotos = async (pageIndex) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${pageIndex}&limit=8`
    );
    return response.data;
  } catch (error) {
    alert(error); //todo: test
  }
};
//useState
const Photo = () => {
  //useState
  const [photos, setPhotos] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  //useEffect
  const processData = async () => {
    const data = await getPhotos(pageIndex);
    setPageIndex(pageIndex++);
    const newData = [...photos, ...data];
    console.log("🚀 ~ file: Photo.js:25 ~ processData ~ newData:", newData);
    setPhotos(newData);
  };
  useEffect(() => {
    // side-effects
    // processData();
  }, []);
  return (
    <div>
      {photos.length > 0 &&
        photos.map((index, item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p3 w5 h5">
            <img
              src={item.download_url}
              alt={item.author}
              className="object-cover"
            />
          </div>
        ))}
    </div>
  );
};
export default Photo;
