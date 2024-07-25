import { FC } from "react";

interface HistoryOfNiprProps {}
const HistoryOfNipr: FC<HistoryOfNiprProps> = () => {
  return (
    <div className="space-y-8">
      <h3 className="uppercase  text-[4.8rem] leading-[5.2rem]">
        History of NIPR
      </h3>
      <p className="text-[1.6rem] leading-[2.56rem]">
        The Nigeria institute of public relations was established in 1963 as the
        public relations association of Nigeria, in 1972, it metamorphosed into
        Nigerian Institute of Public Relations (NIPR). In 1989, it established a
        National secretariat to coordinate its affairs. The institute became
        chartered via decree no 16 (Act of Parliament) of the Federal Government
        on 1st June 1990. The Nigeria Institute of Public Relations is the
        professional body of all qualified Public Relations practitioners in
        Nigeria. It is the largest professional body for public relations in
        Africa. The supreme governing and policy making body of the institute is
        its National Council, made up of 22 members, headed by the president. It
        has chapters in the 36 states of the federation and the federal capital
        territory, Abuja.
      </p>

      <div className="space-y-6 text-[1.6rem] leading-[2.56rem]">
        <h5 className="uppercase font-semibold">Objectives</h5>
        <p>The fundamental objective of NIPR includes;</p>
        <ol className="list-decimal list-inside">
          <li>
            To promote and develop the art and science of public relations
            practice in Nigeria.
          </li>
          <li>
            To establish, prescribe and ensure the observance of high standards
            of professional and ethnical practice.
          </li>
          <li>
            To provide facilities, advice and opportunities for executives to
            meet and discuss public relations problems and case studies, and
            thereby improve the standard of public relation practice in Nigeria.
          </li>
          <li>
            To encourage the acquisition of professional qualification in public
            relations through the provision of examinations and other
            facilities.
          </li>
          <li>
            To conduct research, collect and disseminate information on the
            aspects of public relations.
          </li>
          <li>To publish journals, books, practice papers and guidelines.</li>
        </ol>
      </div>
    </div>
  );
};

export default HistoryOfNipr;
