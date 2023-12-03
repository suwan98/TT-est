import {MouseEventHandler, ReactNode} from "react";
import Button from "./Button";

interface IChoiceButton {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  restProps?: unknown[];
}

function ChoiceButton({children, ...restProps}: IChoiceButton) {
  return (
    <>
      <Button
        className="border w-full rounded-2xl p-4 bg-sky-100 hover:bg-[#759cbe] border-none my-4 font-ganwon text-xl text-zinc-950 text-center"
        {...restProps}>
        {children}
      </Button>
    </>
  );
}

export default ChoiceButton;
