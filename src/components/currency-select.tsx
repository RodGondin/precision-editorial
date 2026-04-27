import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CurrencySelectProps = {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  options: string[];
  triggerClassName?: string;
};

export function CurrencySelect({
  label,
  value,
  onValueChange,
  options,
  triggerClassName,
}: CurrencySelectProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-bold tracking-[0.18em] text-(--secondary)">
        {label}
      </p>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className={triggerClassName}>
          <SelectValue placeholder="Select currency" />
        </SelectTrigger>
        <SelectContent>
          {options.map((code) => (
            <SelectItem key={code} value={code}>
              {code}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
