import React, { FC } from "react";
import ResourceCard from "../molecules/ResourceCard";


const allResources = [
  {
    id: "1",
    image: "/images/attend_events.jpg",
    postedOn: new Date().toString(),
    title: "Bill Walsh leadership lessons",
    body: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
  {
    id: "2",
    postedOn: new Date().toString(),
    image: "/images/attend_events.jpg",
    title: "Bill Walsh leadership lessons",
    body: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
  {
    id: "3",
    postedOn: new Date().toString(),
    image: "/images/attend_events.jpg",
    title: "Bill Walsh leadership lessons",
    body: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
  {
    id: "4",
    image: "/images/attend_events.jpg",
    postedOn: new Date().toString(),
    title: "Bill Walsh leadership lessons",
    body: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
  {
    id: "5",
    postedOn: new Date().toString(),
    image: "/images/attend_events.jpg",
    title: "Bill Walsh leadership lessons",
    body: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
  {
    id: "6",
    postedOn: new Date().toString(),
    image: "/images/attend_events.jpg",
    title: "Bill Walsh leadership lessons",
    body: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
];

interface ResourcesGridProps {}
const ResourcesGrid: FC<ResourcesGridProps> = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-12">

      {allResources.map((resource, index) => (
        <React.Fragment key={index}>
          <ResourceCard {...resource} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ResourcesGrid;
