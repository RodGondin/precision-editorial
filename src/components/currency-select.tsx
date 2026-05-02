import Image from "next/image";
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
  options: Array<{
    code: string;
    name: string;
    flag?: string | null;
    flagAlt?: string | null;
  }>;
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
          <SelectValue placeholder="Select currency">
            {(() => {
              const selected = options.find((option) => option.code === value);

              if (!selected) {
                return value;
              }

              return (
                <span className="flex items-center gap-3">
                  {selected.flag ? (
                    <Image
                      src={selected.flag}
                      alt={selected.flagAlt ?? `${selected.code} flag`}
                      width={24}
                      height={16}
                      className="h-4 w-6 rounded-[2px] object-cover"
                    />
                  ) : null}
                  <span>{selected.code}</span>
                  <span>- {selected.name}</span>
                </span>
              );
            })()}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.code} value={option.code}>
              <span className="flex items-center gap-3">
                {option.flag ? (
                  <Image
                    src={option.flag}
                    alt={option.flagAlt ?? `${option.code} flag`}
                    width={24}
                    height={16}
                    className="h-4 w-6 rounded-[2px] object-cover"
                  />
                ) : null}
                <span>{option.code}</span>
                <span>- {option.name}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
