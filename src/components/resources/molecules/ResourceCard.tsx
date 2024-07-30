import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import { FC } from "react";

interface ResourceCardProps {
  id: string;
  image: string;
  title: string;

  body: string;
}
const ResourceCard: FC<ResourceCardProps> = ({
  body,

  image,
  title,
}) => {
  return (
    <div className="flex gap-12 items-center">
      <div className="space-y-8">
        <h5  className="font-semibold text-primary text-[2.2rem] leading-[3.2rem]">{title}</h5>
        <p className="text-[1.6rem] text-[#667085] leading-[2.4rem]">{body}</p>
      </div>
      <a
        className={cn(
          buttonVariants({
            variant: "ghost",
          })
        )}
        download
        href={image}
      >
        <Download />
      </a>
    </div>
  );
};

export default ResourceCard;
