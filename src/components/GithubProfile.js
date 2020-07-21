import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Spin, Alert } from "antd";
import Axios from "axios";
import ProfileCard from "./ProfileCard";

const GithubProfile = () => {
  const [query, setQuery] = useState("");
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchApi = () => {
    setError(false);
    if (query === "") {
      setError(true);
      return;
    }
    setLoading(true);
    Axios.get(`https://api.github.com/users/${query}`)
      .then((res) => {
        const { data } = res;
        setdata(data);
      })
      .catch((err) => setError(true));
    setLoading(false);
  };

  return (
    <div className="pt-5 text-center text-white">
      <h1 className=" text-white">Search for Github profiles</h1>
      {error && <Alert message="Please enter valid name" type="error" />}
      {loading && (
        <div className="example">
          <Spin />
        </div>
      )}
      <InputGroup className="mt-5">
        <FormControl
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search"
        />
        <InputGroup.Append>
          <Button variant="outline-primary" onClick={fetchApi}>
            Fetch Profile
          </Button>
        </InputGroup.Append>
      </InputGroup>
      {data ? (
        <div className="mt-5">
          <ProfileCard
            id={data.id}
            name={data.name}
            repos_url={data.repos_url}
            imgUrl={data.avatar_url}
          />
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default GithubProfile;
