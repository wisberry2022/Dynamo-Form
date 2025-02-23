import { CookieSetting } from "../types/domain/Common";

export class Cookie {
  setting: CookieSetting = {
    path: "/",
    maxAge: 60 * 60,
    secure: false,
    httpOnly: true,
  };

  private constructor(setting?: CookieSetting) {
    if (setting) {
      this.setting = setting;
    }
  }

  static of(setting?: CookieSetting): Cookie {
    return new Cookie(setting);
  }

  add(key: string, data: string) {
    document.cookie = `${key}=${data}; path=${this.setting.path}; ${
      this.setting.maxAge ? `max-age=${this.setting.maxAge};` : ""
    }; ${this.setting.httpOnly ? `http-only=true;` : ""} ${
      this.setting.secure ? "secure=true;" : ""
    } expires=${new Date(Date.now() + 60 * 60 * 1000).toUTCString()}`;
  }

  get(key: string): string {
    const browerCookie = document.cookie;
    console.log(browerCookie);
    const findKey = browerCookie
      .split(";")
      .find((ck) => ck.split("=")[0].trim() === key);
    return findKey ?? "";
  }
}
