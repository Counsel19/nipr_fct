import { Input } from "@/components/ui/input";
import { FC } from "react";

interface LabledInputProps {
  label: string;
  placeholder?: string;
  name: string;
  value: string;
  setInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const LabledInput: FC<LabledInputProps> = ({
  label,
  name,
  value,
  placeholder,
  setInputValue,
}) => {
  return (
    <div className="space-y-6">
      <label
        className="font-medium text-base leading-[2.03rem]"
        htmlFor={label}
      >
        {label}
      </label>
      <Input
        name={name}
        value={value}
        onChange={setInputValue}
        placeholder={placeholder || `Enter your ${label}`}
      />
    </div>
  );
};

export default LabledInput;
