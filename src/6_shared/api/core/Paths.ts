export const Paths = {
  form: {
    get: (id: number) => `/api/v1/form/${id}`,
    getAll: "/api/v1/form",
    updateName: "/api/v1/form",
    update: "/api/v1/form",
    save: "/api/v1/form",
    delete: (id: number) => `/api/v1/form/${id}`,
  },
  survey: {
    list: "/api/v1/survey/list"
  }
};
