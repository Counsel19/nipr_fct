import HaveAQuestion from "@/components/shared/molecules/HaveAQuestion";
import PageTitle from "@/components/shared/molecules/PageTitle";
import { FC } from "react";

interface FactAboutNiprProps {}
const FactAboutNipr: FC<FactAboutNiprProps> = () => {
  return (
    <div className="space-y-20">
      <PageTitle title="About" />

      <div className="w-frame pagePadding">
        <h3 className="text-primary mb-8 font-semibold leading-[5.56rem] text-[4.2rem]">
          Facts About NIPR
        </h3>
        <ul className="list-disc list-inside text-[2.4rem] leading-[4.8rem] pl-6">
          <li>
            That NIPR FCT Chapter is the flagship chapter of the Institute
          </li>
          <li>
            The current President of the NIPR Dr. Ike Neliaku, fnipr is a member
            of the FCT Chapter.
          </li>
          <li>
            The FCT Chapter has maintained a formal office space for all
            administrative activities over two decades. • The Chapter has over
            2000 members strategically placed in both private and government
            organisations.
          </li>
          <li>
            The current Director of Public Relations of the Institute, Mr.
            Stanley A. Ogadigo, fnipr, is the +. He was elected on the 21st
            November, 2023.
          </li>
          <li>
            Did you know that FCT Chapter currently has the highest number of
            Council Members from the Chapter.
          </li>
          <li>
            Did you know that NIPR FCT Chapter successfully championed the
            acquisition of land for the Institute in the FCT Abuja in 2023.{" "}
          </li>
          <li>
            The Chapter has consistently hosted its monthly meetings at very
            decent and classical venues and improved the monthly professional
            platform, featuring notable Nigerians as guest speakers like Mrs.
            Ene Obi, former Country Director, ActionAid, the President of Int’l
            Public Relations body Justin Green among others
          </li>

          <li>
            Did you know, that the FCT Chapter ranks among the top chapters with
            the highest number of fellows in the Institute
          </li>
          <li>
            The FCT Chapter is the first Chapter to publish a monthly newsletter
            - the "PR Monthly," a public relations newsletter with rich content,
            widely distributed across Nigeria and beyond.
          </li>
          <li>
            Did you know that FCT Chapter of NIPR is the first Chapter to
            introduce virtual meetings during the COVID-19 lockdown in 2020.
          </li>
          <li>
            The Chapter's Annual Conference and AGM stand out as models for
            other Chapters. The FCT is the first Chapter to have live coverage
            of its AGM/Conference in the country.
          </li>
          <li>
            Over the years, the FCT Chapter has dedicated the themes of its
            conferences to addressing strategic national issues and featuring
            prominent Nigerians as guest speakers. Examples of these themes and
            guest speakers include, but are not limited to, "Nigeria Today:
            Integration, Marketplace, & PR," with guest speakers: Bishop Hassan
            Kukar, Yusuf Maitama Sule - Danmasanin Kano, Prof. Pat Utomi, Chief
            Dr. Walter Ofonagoro, and Basorun Seinde Arogbofa, OFR, PEN, MDA.
          </li>
          <li>
            Did you know that the FCT Chapter single-handedly purchased a new
            bus for its Chapter in 2019
          </li>
          <li>
            FCT Chapter has maintained a strong culture of participating in
            national conferences, especially those held outside the FCT,
            consistently sending the highest number of delegates. Worthy of note
            is the recently concluded Nigerian Public Relations Week, held from
            April 22nd to 26th, 2024, at the June 12 Cultural Centre in
            Abeokuta, Ogun State, saw significant representation from FCT
            Chapter.
          </li>
          <li>
            The FCT Chapter was awarded the overall best performing chapter
            during the Presidential award and dinner held on 14th December, 2017
            in Logos. A position it has maintained till date.
          </li>
        </ul>
      </div>
      <HaveAQuestion />
    </div>
  );
};

export default FactAboutNipr;
