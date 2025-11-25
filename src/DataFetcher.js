// components/DataFetcher.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./utility/dataActions";
import store from "./utility/store";

const DataFetcher = () => {
  const dispatch = useDispatch();
  //const currentUser = store.getState();
  const { data, loading, error } = useSelector((state) => {
    return state?.users;
  });
  useEffect(() => {
    dispatch(fetchData()); // Dispatch the thunk when the component mounts
  }, [dispatch]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
