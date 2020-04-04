import React from "react";
import FullName from "./FullName";
import Username from "./Username";
import Social from "./Social";

/*
  2. Destructure all of the props you will need 
  3. Pass the firstName and lastName to <FullName />
  4. Pass the username to <Username />
  5. Pass the url and twitter to <Social />
*/
const User = ({ firstName, lastName, username, url, twitter }) => {
  return (
    <div className="user">
      <FullName firstName={firstName} lastName={lastName} />
      <Username username={username} />
      <Social url={url} twitter={twitter} />
    </div>
  );
};

export default User;
