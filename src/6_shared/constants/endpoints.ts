import { SurveyValidResponse } from "../types";

export const endpoints = {
  index: "/",
  form: {
    index: "/form",
    create: "/form/create",
    detail: (id: number) => `/form/${id}`,
  },
  survey: {
    index: "/survey",
    create: "/survey/create",
    id: (id: number) => `/survey/${id}`,
    join: {
      writeInfo: (token: string, survey: SurveyValidResponse) => {
        const { title, startDate, endDate } = survey;
        return `/survey/join/write-info?token=${token}&title=${title}&startDate=${startDate}&endDate=${endDate}`;
      },
      submit: (token: string) => `/survey/join/submit?token=${token}`,
    },
  },
};
