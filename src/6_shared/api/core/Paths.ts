export const Paths = {
  form: {
    get: (id: number) => `/api/v1/form/${id}`,
    getAll: "/api/v1/form",
    updateName: "/api/v1/form",
    delete: (id: number) => `/api/v1/form/${id}`,
  },
};
