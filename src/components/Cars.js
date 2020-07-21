import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Spin, Alert } from "antd";
import Axios from "axios";

const Cars = () => {
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
    Axios({
      method: "GET",
      url: `https://vindecoder.p.rapidapi.com/decode_vin?vin=${query}`,
      headers: {
        "x-rapidapi-host": "vindecoder.p.rapidapi.com",
        "x-rapidapi-key": "a55babd331msh37a88a58fc369ccp17a5c5jsn865f16ba635b",
      },
    })
      .then((res) => {
        const { data } = res;
        setdata(data.specification);
        console.log(data.specification);
      })
      .catch((err) => setError(true));
    setLoading(false);
  };

  return (
    <div className="pt-5 text-center text-white">
      <h1 className=" text-white">Search for cars data</h1>
      {error && <Alert message="Please enter valid details" type="error" />}
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
            get data
          </Button>
        </InputGroup.Append>
      </InputGroup>
      {data ? (
        <div className="mt-5">
          <h1 className="text-white">Brand : {data.make}</h1>
          <h1 className="text-white"> Model : {data.model}</h1>
          <h4 className="text-white">VIN : {data.vin}</h4>
          <h4 className="text-white"> Year : {data.year}</h4>
          <h3 className="text-white">Steering Type : {data.steering_type}</h3>
          <h3 className="text-white">Made In : {data.made_in}</h3>
          <h3 className="text-white"> Style : {data.style}</h3>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Cars;
