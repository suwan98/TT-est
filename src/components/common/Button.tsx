import {ReactNode} from "react";

interface IButtonProps {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  [props: string]: unknown;
}

function Button({type = "button", children, ...restProps}: IButtonProps) {
  return (
    <>
      <button type={type} {...restProps}>
        {children}
      </button>
    </>
  );
}

export default Button;
