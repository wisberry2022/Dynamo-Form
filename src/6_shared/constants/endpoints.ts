export const endpoints = {
  index: "/",
  form: {
    index: "/form",
    create: "/form/create",
    detail: (id: number) => `/form/${id}`,
  },
  survey: {
    index: "/survey",
  },
};
