import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IResource } from "@/types/resource";
import { Download } from "lucide-react";
import { FC } from "react";

interface ResourceCardProps {
  data: IResource;
}
const ResourceCard: FC<ResourceCardProps> = ({
  data: { desc, file, thumbnail, title },
}) => {
  return (
    <div>
      <img
        src={thumbnail as string}
        alt={thumbnail as string}
        className="h-[5.5rem] rounded-md"
      />
      <div className="flex gap-12 items-center">
        <div className="space-y-6">
          <h5 className="font-semibold text-primary text-[2.2rem] leading-[3rem]">
            {title}
          </h5>
          <p className="text-[1.6rem] text-[#667085] leading-[2.4rem]">
            {desc}
          </p>
        </div>
        <a
          className={cn(
            buttonVariants({
              variant: "ghost",
            })
          )}
          download
          href={file}
        >
          <Download />
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
