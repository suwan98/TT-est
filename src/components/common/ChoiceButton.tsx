import {ReactNode} from "react";
import Button from "./Button";

interface IChoiceButton {
  children: ReactNode;
}

function ChoiceButton({children}: IChoiceButton) {
  return (
    <>
      <Button className="border w-full rounded-2xl p-4 bg-sky-100 hover:bg-sky-200 border-none my-4 font-soyo text-zinc-950 text-center">
        {children}
      </Button>
    </>
  );
}

export default ChoiceButton;
