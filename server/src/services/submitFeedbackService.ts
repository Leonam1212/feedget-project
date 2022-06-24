import { FeedbacksRepository } from "../repositories/feedbacksRepository";
import { MailUtil } from "../utils/mailUtil";

interface SubmitFeedbackServiceRequest {
  type: string;
  comment: string;
  screenshot?: string;
}
export class SubmitFeedbackService {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailUtil: MailUtil
  ) {}

  async execute(request: SubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error("Type is required");
    }
    if (!comment) {
      throw new Error("Comment is required");
    }
    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format");
    }
    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailUtil.sendMail({
      subject: "Novo Feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do Feedback ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`,
      ].join(""),
    });
  }
}
