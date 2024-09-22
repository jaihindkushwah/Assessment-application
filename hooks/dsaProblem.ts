import axios from "axios";

export const getProblemById = async (id: string) => {
  const response = await axios.get(
    `http://127.0.0.1:8080/api/v1/dsa/get/${id}`
  );
  const data = await response.data;
  // console.log(data.problem.content);
  return data.problem.content;
};

export async function getProblems(searchParams: {
  page?: string;
  status?: string;
  difficulty?: string;
  tags?: string;
}) {
  const urlParam = new URLSearchParams(searchParams);
  const response = await axios.get(
    `http://127.0.0.1:8080/api/v1/dsa/getAll?` + urlParam.toString()
  );
  const data = await response.data;
  // console.log(data.problems);
  // console.log(urlParam.toString());
  // console.log(searchParams);
  return data.problems;
}

