import React from "react";

/*
  8. Destructure the props you will need
  9. Make the Website and Twitter links work based on props
*/
const Social = ({ twitter, url }) => {
  return (
    <ul className="social">
      <li>
        <a href={url}>Website</a>
      </li>
      <li>
        <a href={`https://www.twitter.com/${twitter}`}>{twitter}</a>
      </li>
    </ul>
  );
};

export default Social;
