import {
  AttachQuestion,
  AttachReply,
  convertFileSize2KB,
  extractFileExtension,
  FileExtensions,
} from "@/6_shared";

export class AttachReplyValidator {
  question: AttachQuestion;
  reply: AttachReply;

  private constructor(question: AttachQuestion, reply: AttachReply) {
    this.question = question;
    this.reply = reply;
  }

  static of(
    question: AttachQuestion,
    reply: AttachReply
  ): AttachReplyValidator {
    return new AttachReplyValidator(question, reply);
  }

  // 파일 용량 검사 함수
  sizeValidate(size: number) {
    const uploadSize = convertFileSize2KB(size, "Byte");
    const maxFileSize = convertFileSize2KB(
      this.question.maxFileSize,
      this.question.unit
    );

    if (uploadSize > maxFileSize) {
      throw {
        type: "FRONT_ERROR",
        message: "제한 파일 용량을 초과하였습니다.",
      };
    }
  }

  // 확장자 검사
  extensionValidate(fileName: string) {
    const uploadableExtension = this.question.extensions;
    const extension = extractFileExtension(fileName).toUpperCase();

    if (!uploadableExtension.includes(extension as FileExtensions)) {
      throw {
        type: "FRONT_ERROR",
        message: "허용되지 않은 파일 형식입니다.",
      };
    }
  }

  // 파일 유효성 검사
  validate(file: FileList) {
    const upload = file.item(0);

    // 업로드할 파일이 없을 경우
    if (!upload) {
      throw {
        type: "FRONT_ERROR",
        message: "파일이 존재하지 않습니다.",
      };
    }

    // 파일 용량 및 확장자 검사
    this.extensionValidate(upload.name);
    this.sizeValidate(upload.size);
  }
}
