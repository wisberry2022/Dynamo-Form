import { useRouter } from "next/router";

export const useGetQuery = <T = any>(key: string): T => {
  const query = useRouter().query;

  return query[key] as T;
};
