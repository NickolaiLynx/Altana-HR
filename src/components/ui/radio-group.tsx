import * as React from "react"
import { cn } from "./utils"

interface RadioGroupContextValue {
  value?: string;
  onValueChange?: (value: string) => void;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue>({});

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onValueChange?: (value: string) => void;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, children, value, onValueChange, ...props }, ref) => {
    return (
      <RadioGroupContext.Provider value={{ value, onValueChange }}>
        <div
          ref={ref}
          className={cn("grid gap-2", className)}
          role="radiogroup"
          {...props}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    )
  }
)
RadioGroup.displayName = "RadioGroup"

interface RadioGroupItemProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  value: string;
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, value, id, ...props }, ref) => {
    const context = React.useContext(RadioGroupContext);
    const checked = context.value === value;

    const handleChange = () => {
      if (context.onValueChange) {
        context.onValueChange(value);
      }
    };

    return (
      <div className="relative inline-flex items-center">
        <input
          ref={ref}
          type="radio"
          checked={checked}
          onChange={handleChange}
          id={id}
          className={cn(
            "peer sr-only",
            className
          )}
          {...props}
        />
        <label 
          htmlFor={id}
          className={cn(
            "h-5 w-5 rounded-full border-2 transition-all cursor-pointer",
            checked ? "border-[#D32F2F]" : "border-gray-600",
            "hover:border-[#D32F2F]",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-[#D32F2F] peer-focus-visible:ring-offset-2",
            "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            "flex items-center justify-center"
          )}
        >
          <div className={cn(
            "h-2.5 w-2.5 rounded-full bg-[#D32F2F] transition-all pointer-events-none",
            checked ? "scale-100" : "scale-0"
          )} />
        </label>
      </div>
    )
  }
)
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
