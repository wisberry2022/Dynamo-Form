import { formatDate, useGetQuery } from "@/6_shared";

export const useGetSurveyInfo = () => {
  const id = useGetQuery<number>("id");
  const title = useGetQuery<string>("title");
  const token = useGetQuery<string>("token");
  const startDate = useGetQuery<string>("startDate");
  const endDate = useGetQuery<string>("endDate");

  return {
    id,
    title,
    token,
    startDate: formatDate(startDate, "yyyy-MM-dd"),
    endDate: formatDate(endDate, "yyyy-MM-dd"),
  };
};
