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
    <label className={`flex gap-3 ${className}`}>
      {label}
      <input {...props}></input>
    </label>
  );
}

export default Input;
