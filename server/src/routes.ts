import express from "express";
import { SubmitFeedbackService } from "./services/submitFeedbackService";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prismaFeedbacksRepository";
import { NodemailerMailUtil } from "./utils/nodemailer/nodemailerMailUtil";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbackRepository = new PrismaFeedbacksRepository();
  const nodemailerMailUtil = new NodemailerMailUtil();
  const submitFeedbackService = new SubmitFeedbackService(
    prismaFeedbackRepository,
    nodemailerMailUtil
  );

  await submitFeedbackService.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
