import { MouseEventHandler } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  icon: JSX.Element;
  label: string;
  disabled?: boolean;
}

const Button = ({ onClick, icon, label, disabled }: ButtonProps) => {
  return (
    <button
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors 
        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
        disabled:pointer-events-none disabled:opacity-50 
        [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
        bg-secondary text-secondary-foreground shadow-sm 
        hover:bg-[#212123] h-9 px-4 py-2 w-full justify-start"
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {label}
    </button>
  );
};

Button.defaultProps = {
    disabled: false,
};

export default Button;
