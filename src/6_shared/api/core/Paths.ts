export const Paths = {
  form: {
    get: (id: number) => `/api/v1/form/${id}`,
    getAll: "/api/v1/form",
    getSummary: (id: number) => `/api/v1/form/summary/${id}`,
    getPopupList: "/api/v1/form/popup/list",
    updateName: "/api/v1/form",
    update: "/api/v1/form",
    save: "/api/v1/form",
    delete: (id: number) => `/api/v1/form/${id}`,
  },
  survey: {
    get: (id: number) => `/api/v1/survey/${id}`,
    list: "/api/v1/survey/list",
    save: "/api/v1/survey",
    update: "/api/v1/survey",
    complete: (id: number) => `/api/v1/survey/${id}`,
    delete: (id: number) => `/api/v1/survey/${id}`,
  },
};
