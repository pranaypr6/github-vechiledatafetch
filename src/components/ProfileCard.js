import React from "react";
import { Card } from "antd";

const ProfileCard = ({ name, id, imgUrl, repos_url }) => {
  return (
    <Card
      hoverable
      style={{ width: 500 }}
      cover={<img alt="example" src={imgUrl} />}
    >
      <h1>Name : {name}</h1>
      <p>Id : {id}</p>
      <p>repos : {repos_url}</p>
    </Card>
  );
};

export default ProfileCard;
