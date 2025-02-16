export const Paths = {
  user: {
    signUp: "/api/v1/user/signup",
  },
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
    createToken: "/api/v1/survey/link",
    complete: (id: number) => `/api/v1/survey/${id}`,
    suspend: (id: number) => `/api/v1/survey/${id}/suspend`,
    delete: (id: number) => `/api/v1/survey/${id}`,
    join: {
      valid: (token: string) => `/api/v1/survey/valid/${token}`,
    },
  },
  respondent: {
    valid: (surveyId: number) => `/api/v1/respondent/${surveyId}/valid`,
  },
  reply: {
    getForm: (surveyId: number) => `/api/v1/reply/${surveyId}`,
    submit: (surveyId: number) => `/api/v1/reply/${surveyId}`,
  },
  file: {
    upload: "/api/v1/file/upload",
  },
};
