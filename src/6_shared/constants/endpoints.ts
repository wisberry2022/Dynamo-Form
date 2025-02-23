import { SurveyValidResponse } from "../types";

export const endpoints = {
  index: "/",
  auth: {
    signIn: "/auth/sign-in",
    signUp: "/auth/sign-up",
  },
  form: {
    index: "/form",
    create: "/form/create",
    detail: (id: number) => `/form/${id}`,
  },
  survey: {
    index: "/survey",
    create: "/survey/create",
    id: (id: number) => `/survey/${id}`,
  },
  reply: {
    writeInfo: (token: string, survey: SurveyValidResponse) => {
      const { id, title, startDate, endDate } = survey;
      return `/reply/write-info?token=${token}&id=${id}&title=${title}${
        startDate ? `&startDate=${startDate} ` : ""
      }${endDate ? `&endDate=${endDate}` : ""}`;
    },
    submit: (token: string) => `/reply/submit?token=${token}`,
    thanks: `/reply/thanks`,
  },
};
