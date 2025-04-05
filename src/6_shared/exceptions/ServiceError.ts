import { ExceptionType } from "../types";

export class ServiceError {
  message: string;
  type: ExceptionType;

  constructor(type: ExceptionType, message: string) {
    this.message = message;
    this.type = type;
  }
}
