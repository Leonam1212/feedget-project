import { useState } from "react";
import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../assets/button-card/Figmoji/bug.svg";
import ideaImageUrl from "../../assets/button-card/Figmoji/idea.svg";
import thoughtImageUrl from "../../assets/button-card/Figmoji/thought.svg";
import { FeedbackTypesSteps } from "./Steps/FeedbackTypesSteps";
import { FeedbackContentSteps } from "./Steps/FeedbackContentSteps";
import { FeedbackSuccessSteps } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  PROBLEM: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },

  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outros",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de uma nuvem",
    },
  },
};

export type FeedbackTypes = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleRestartFeedBack = () => {
    setFeedbackSent(false);
    setFeedbackType(null);
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessSteps onFeedbackRestartedRequest={handleRestartFeedBack} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypesSteps onFeedbackTypesChanged={setFeedbackType} />
          ) : (
            <FeedbackContentSteps
              onFeedbackSent={() => setFeedbackSent(true)}
              feedbackType={feedbackType}
              onFeedbackRestartedRequest={handleRestartFeedBack}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ❤️ por <a className="underline underline-offset-2">Leo</a>
      </footer>
    </div>
  );
};
