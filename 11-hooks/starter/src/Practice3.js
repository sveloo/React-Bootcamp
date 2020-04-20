import React, { useState, useEffect } from "react";

const Practice3 = () => {
  /*
   * 1. Create a value in state using hooks called catImg
   * 2. Use useEffect to make an API call to https://aws.random.cat/meow for a random picture of a cat
   * 3. Add the url for the image to the page below the title
   * 4. Pass an empty array of dependencies to useEffect so it only fetches on initial page load
   */

  const [catImg, setCatImg] = useState([]);
  const url = `https://aws.random.cat/meow`;

  const fetchPosts = () => {
    fetch(url)
      .then((response) => response.json())
      .then((catImg) => {
        setCatImg(catImg.file);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (catImg.length === 0) {
      fetchPosts();
    }
  });

  return (
    <>
      <h1>Random Cat Photo</h1>
      <img src={catImg} alt="Random Cat Image" width="500" />
      <h2>{catImg}</h2>
    </>
  );
};

export default Practice3;
