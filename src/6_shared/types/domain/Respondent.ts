export type Gender = "MALE" | "FEMALE";

export type RespondentRequest = {
  name: string;
  email: string;
  phoneNumber: string;
  gender: Gender;
};

export type RespondentValidRequest = {
  email: string;
  phoneNumber: string;
};

export type RespondentResponse = RespondentRequest;
