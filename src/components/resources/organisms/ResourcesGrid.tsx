import React, { FC } from "react";
import ResourceCard from "../molecules/ResourceCard";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import PageLoader from "@/components/shared/PageLoader";

interface ResourcesGridProps {}
const ResourcesGrid: FC<ResourcesGridProps> = () => {
  const { allResources } = useSelector((store: RootState) => store.resources);

  return (
    <div className="grid lg:grid-cols-3 gap-12">
      {allResources && allResources.length > 0 ? (
        allResources.map((resource) => (
          <React.Fragment key={resource.id}>
            <ResourceCard data={resource}  />
          </React.Fragment>
        ))
      ) : allResources && allResources.length == 0 ? (
        <h3> No Held Resource at the Moment</h3>
      ) : (
        <div className="col-span-2">
          <PageLoader />
        </div>
      )}

    </div>
  );
};

export default ResourcesGrid;
