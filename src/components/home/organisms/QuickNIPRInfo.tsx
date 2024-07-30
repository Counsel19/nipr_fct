import { FC } from "react";

interface QuickNIPRInfoProps {}
const QuickNIPRInfo: FC<QuickNIPRInfoProps> = () => {
  return (
    <div className="w-frame">
      <div className="grid lg:grid-cols-[2fr_1fr] gap-[4rem] lg:gap-12 ">
        <div className="space-y-12 ">
          <h3 className="text-[#ED3237] text-[2.8rem] leading-[3.8rem] font-semibold">
            Championing Excellence in Nigerian Communications
          </h3>
          <p className="text-base lg:text-2xl leading-[2.7rem]  lg:leading-[3.4rem]  text-[#676767]">
            The Nigerian Institute of Public Relations (NIPR) FCT Chapter is the
            flagship branch of Nigeria's apex professional body for Public
            Relations practitioners. Our Mission: To promote excellence in
            public relations practice and uphold the highest standards of
            professional ethics in the Federal Capital Territory and beyond.
          </p>
          <p className="text-base lg:text-2xl leading-[2.7rem] lg:leading-[3.4rem]  text-[#676767]">
            Established in [insert year], our chapter has been at the forefront
            of shaping communication strategies and fostering positive
            relationships between organizations and their publics in the heart
            of Nigeria. Join us in our commitment to advancing the PR profession
            and contributing to Nigeria's socio-economic development through
            effective communication."
          </p>
        </div>
        <div className="max-w-[46rem] max-h-[40rem] relative">
          <img
            src="/images/nipr_chairman.png"
            alt="nipr_chairman"
            className="object-cover object-top w-full h-full"
          />
          <div className="bg-image-gradient absolute top-0 right-0 bottom-0 left-0" />
          <div className="absolute bottom-4 right-4 left-4 text-white text-base lg:text-2xl ">
            <h5 className="mb-6">Mr. Stanley A. Ogadigo</h5>
            <span className="italic font-light leading-[]">
              current Chairman of <br /> the NIPR FCT Chapter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickNIPRInfo;
