import React, { useEffect, useState } from "react";
import { storage } from "../../../firebase";
import { listAll, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const Photos = () => {
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [imageList, setImageList] = useState<string[]>([]);

  const imageListRef = ref(storage, "images/");
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      console.log("Uploaded a blob or file!", snapshot);
      alert("Image uploaded successfully");
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((itemRef) => {
        getDownloadURL(itemRef).then((url) => {
          setImageList((prev) => {
            if (!prev.includes(url)) {
              return [...prev, url];
            }
            return prev;
          });
        });
      });
    });
  }, []);

  return (
    <div>
      <div className="columns is-multiline">
        {imageList.map((url) => (
          <div className="column is-4" key={url}>
            <div className="card photos-image-card">
              <div className="">
                <figure className="image is-2by3">
                  <img src={url} alt="Placeholder" />
                </figure>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-direction-column">
        <input
          type="file"
          name="file"
          id="file"
          className="button"
          onChange={(event) => setImageUpload(event.target.files[0])}
        />

        <button className="button" onClick={uploadImage}>
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default Photos;
