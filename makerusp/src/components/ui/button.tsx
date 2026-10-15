interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'outline';
}

export function Button({ label, variant = 'primary', ...props }: ButtonProps) {
  const baseStyles = "px-6 py-2 rounded-md font-semibold transition-all duration-200";
  const primaryStyles = "bg-[#C41230] text-white hover:bg-red-800"; // Usando o vermelho da USP
  const outlineStyles = "border-2 border-[#C41230] text-[#C41230] hover:bg-red-50";
  
  const buttonClass = variant === 'primary' ? primaryStyles : outlineStyles;

  return (
    <button className={`${baseStyles} ${buttonClass}`} {...props}>
      {label}
    </button>
  );
}