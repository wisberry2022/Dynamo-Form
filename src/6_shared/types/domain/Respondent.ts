export type Gender = "MALE" | "FEMALE";

export type RespondentResponse = {
  name: string;
  email: string;
  phoneNumber: string;
  gender: Gender;
};

export type RespondentValidRequest = {
  email: string;
  phoneNumber: string;
};
