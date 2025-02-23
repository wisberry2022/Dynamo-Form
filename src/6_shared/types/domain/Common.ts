export type Audit = {
  regDttm: string;
  modDttm: string;
};

export type CookieSetting = {
  maxAge?: number;
  path?: string;
  secure?: boolean;
  httpOnly?: boolean;
};
