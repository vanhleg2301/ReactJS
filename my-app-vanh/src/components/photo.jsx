import React, { useEffect, useState } from "react";

const Photo = () => {
  const [photos, setPhoto] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((photos) => {
        setPhoto(photos);
      });
  });
  return (
    <div className="container text-center w-full">
      <div className="grid grid-cols-3 gap-4">
        {
          <div className="basis-1/4">
            <img src="" />
          </div>
        }
      </div>
    </div>
  );
};

export default Photo;
