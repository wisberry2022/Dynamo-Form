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
      writeInfo: (token: string) => `/survey/join/write-info?token=${token}`,
      submit: (token: string) => `/survey/join/submit?token=${token}`
    }
  },
};
