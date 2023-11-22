import {ReactNode} from "react";
import Button from "./Button";

interface IChoiceButton {
  children: ReactNode;
}

function ChoiceButton({children}: IChoiceButton) {
  return (
    <>
      <Button className="border w-full rounded-2xl p-4 bg-white my-4">
        {children}
      </Button>
    </>
  );
}

export default ChoiceButton;
