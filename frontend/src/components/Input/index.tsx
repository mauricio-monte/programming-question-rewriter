interface InputProps {
  type: string;
  label: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  className?: string;
  min?: number;
  max?: number;
}

function Input({ className, label, ...props }: InputProps) {
  return (
    <label className={`flex flex-col flex-1 gap-2 ${className}`}>
      {label}
      <input className="p-3 rounded-lg" {...props}></input>
    </label>
  );
}

export default Input;
