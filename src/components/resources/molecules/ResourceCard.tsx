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
    <div className="border rounded-xl p-3 space-y-6">
      <img
        src={thumbnail as string}
        alt={thumbnail as string}
        className="h-[20rem] rounded-md"
      />

      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h5 className="font-semibold text-primary text-[2rem] leading-[2.5rem]">
            {title}
          </h5>
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
        <p className="text-[1.4rem] text-[#667085] leading-[2.4rem]">{desc}</p>
      </div>
    </div>
  );
};

export default ResourceCard;
