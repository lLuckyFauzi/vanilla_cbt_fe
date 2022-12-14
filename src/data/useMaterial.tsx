import { useQuery } from "react-query";
import Axios, { AxiosError } from "axios";
import { LOCAL_API } from "../constant";

interface ModelMaterial {
  _id: string;
  namaMapel: string;
}

type useMaterial = {
  data: ModelMaterial[];
};

type TQueryFnData = useMaterial;
type TError = AxiosError;

function useMaterial(key: string) {
  const query = useQuery<TQueryFnData, TError>(key, async () => {
    const axios = await Axios.get(`${LOCAL_API}mapel`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.data;
    });

    return axios;
  });

  return {
    ...query,
    data: query?.data,
  };
}

export default useMaterial;
