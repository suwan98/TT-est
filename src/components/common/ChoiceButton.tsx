import {ReactNode} from "react";
import Button from "./Button";

interface IChoiceButton {
  children: ReactNode;
}

function ChoiceButton({children}: IChoiceButton) {
  return (
    <>
      <Button className="border w-full rounded-2xl p-4 bg-sky-100 hover:bg-[#759cbe] border-none my-4 font-ganwon text-xl text-zinc-950 text-center">
        {children}
      </Button>
    </>
  );
}

export default ChoiceButton;
