import React, { FC, useEffect, useState } from "react";
import ResourceCard from "../molecules/ResourceCard";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import PageLoader from "@/components/shared/PageLoader";
import { IResource } from "@/types/resource";

interface ResourcesGridProps {}
const ResourcesGrid: FC<ResourcesGridProps> = () => {
  const [resourceData, setResourceData] = useState<IResource[] | null>(null);
  const { allResources, filteredResource } = useSelector(
    (store: RootState) => store.resources
  );

  useEffect(() => {
    if (filteredResource) {
      setResourceData(filteredResource);
    } else {
      setResourceData(allResources);
    }
  }, [allResources, filteredResource]);

  return (
    <div className="grid lg:grid-cols-3 gap-12">
      {resourceData && resourceData.length > 0 ? (
        resourceData.map((resource) => (
          <React.Fragment key={resource.id}>
            <ResourceCard data={resource} />
          </React.Fragment>
        ))
      ) : resourceData && resourceData.length == 0 ? (
        <h3 className="text-2xl"> No Held Resource at the Moment</h3>
      ) : (
        <div className="col-span-2">
          <PageLoader />
        </div>
      )}
    </div>
  );
};

export default ResourcesGrid;
