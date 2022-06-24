import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepsProps {
  onFeedbackRestartedRequest: () => void;
}

export const FeedbackSuccessSteps = ({
  onFeedbackRestartedRequest,
}: FeedbackSuccessStepsProps) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <svg
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.9 27.2C30.9 28.9672 29.4672 30.4 27.7 30.4H5.29998C3.53278 30.4 2.09998 28.9672 2.09998 27.2V4.79998C2.09998 3.03278 3.53278 1.59998 5.29998 1.59998H27.7C29.4672 1.59998 30.9 3.03278 30.9 4.79998V27.2Z"
            fill="#77B255"
          />
          <path
            d="M25.524 6.68958C24.5992 6.08878 23.3608 6.35198 22.7576 7.27838L14.0488 20.7016L10.0256 16.9816C9.21442 16.2312 7.94882 16.2816 7.19922 17.092C6.44962 17.9032 6.49922 19.1688 7.31042 19.9184L13.0776 25.2512C13.4616 25.6072 13.9496 25.7832 14.4344 25.7832C14.9728 25.7832 15.6616 25.5576 16.1136 24.872C16.3792 24.4672 26.1136 9.45598 26.1136 9.45598C26.7144 8.52878 26.4504 7.29038 25.524 6.68958V6.68958Z"
            fill="white"
          />
        </svg>

        <span className="text-xl mt-2">Agradecemos o feedback!!</span>

        <button
          type="button"
          onClick={onFeedbackRestartedRequest}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none"
        >
          {" "}
          Quero enviar outro
        </button>
      </div>
    </>
  );
};
