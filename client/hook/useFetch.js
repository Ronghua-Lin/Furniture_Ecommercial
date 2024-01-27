import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataById = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(process.env.EXPO_PUBLIC_API_URL+`/${id}`);
      return response.data
    } catch (err) {
      console.log("error", err);
      setError(err);
    } finally {
      setIsLoading(false);
    }

  }


  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(process.env.EXPO_PUBLIC_API_URL);
      setData(response.data);
      
    } catch (err) {
      console.log("error", err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch,fetchDataById };
};

export default useFetch;
