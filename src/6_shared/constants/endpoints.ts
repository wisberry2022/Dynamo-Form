export const endpoints = {
  index: "/",
  form: {
    index: "/form",
    detail: (id: number) => `/form/${id}`,
  },
};
