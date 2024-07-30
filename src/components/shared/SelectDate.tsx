import { FC } from "react";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface SelectDateProps {
  date?: Date;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  placeholder?: string;
  classes?: string;
}
const SelectDate: FC<SelectDateProps> = ({
  date,
  setDate,
  classes,
  placeholder,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-fit justify-start text-left font-normal",
            !date && "text-muted-foreground",
            classes
          )}
        >
          <CalendarIcon className="mr-2 h-[1.6rem] w-[1.6rem]" />
          {date ? (
            format(date, "PPP")
          ) : (
            <span>{placeholder || "Pick a Date"}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default SelectDate;
