import { getAuthState } from "@/store/auth";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

export interface ICompilerRun {
  input: string;
  language: string;
  code: string;
}

export function useCompilerAPI() {
  const { token } = useSelector(getAuthState);
  const handleRun = async ({ ...inputs }: ICompilerRun) => {
    const url = "http://localhost:8080/api/v1/compiler/test";
    // try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(inputs);
    const response = await axios.post(url, inputs, config);
    return response.data;
  };
  const getProblemById = async (id: string) => {
    const response = await axios.get(
      `http://127.0.0.1:8080/api/v1/dsa/get/${id}`
    );
    const data = await response.data;
    // console.log(data.problem.content);
    return data.problem;
  };

  return {
    handleRun,
    getProblemById,
  };
}
