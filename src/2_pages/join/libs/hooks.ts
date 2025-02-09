import { formatDate, useGetQuery } from "@/6_shared";

export const useGetSurtveyInfo = () => {
  const title = useGetQuery<string>("title");
  const startDate = useGetQuery<string>("startDate");
  const endDate = useGetQuery<string>("endDate");

  return {
    title,
    startDate: formatDate(startDate, "yyyy-MM-dd"),
    endDate: formatDate(endDate, "yyyy-MM-dd"),
  };
};
