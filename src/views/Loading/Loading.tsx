import {PacmanLoader} from "react-spinners";

interface ILoadingProps {
  loadingText: string;
}

function Loading({loadingText}: ILoadingProps) {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-10">
        <PacmanLoader color="#CBCBCB" />
        <p className="font-dote text-2xl">{loadingText}</p>
      </div>
    </>
  );
}

export default Loading;
