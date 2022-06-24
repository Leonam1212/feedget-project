import { MailUtil, SendMailData } from "../mailUtil";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9d644ba2d30d54",
    pass: "02d65e68b249fa",
  },
});
export class NodemailerMailUtil implements MailUtil {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <testing@feedget.com>",
      to: "Leonam Rodrigues <leonam_5000@hotmail.com>",
      subject,
      html: body,
    });
  }
}
