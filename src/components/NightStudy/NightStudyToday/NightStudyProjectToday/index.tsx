import { TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { NightStudyTBody,NightStudyTR } from "../NightStudyTodayItem/style";
import { useGetNightStudyProjectStudents } from "queries/NightStudy/nightstudy.query";
import { TDNameStyle, TDProjectNameStyle, TDRoomStyle, TDStudentStyle } from "./style";
import { NightStudyStudentFillter } from "utils/NightStudy/NightStudyStudentFillter";

interface NightStudyTodayProps {
    studentName: string;
    NightStudyGrade: number;
    selectRoom: string;
}

const NightStudyProjectItem = ({
    studentName,
    NightStudyGrade,
    selectRoom,
  }: NightStudyTodayProps) => {
  const { data:ProjectStudents } = useGetNightStudyProjectStudents({ suspense: true });

  return (
    <>
      <TBody customStyle={NightStudyTBody}>
        {NightStudyStudentFillter(ProjectStudents, studentName, NightStudyGrade, selectRoom)?.map((project) => (
          <TR key={project.id} customStyle={NightStudyTR}>
            <TD
              customStyle={TDProjectNameStyle}
            >
              {project.projectName}
            </TD>
            <TD
              customStyle={TDNameStyle}
            >
              {project.name}
            </TD>
            <TD
              customStyle={TDStudentStyle}
            >
              {project.grade}
              {project.room}
              {project.number > 10 ? project.number : `0${project.number}`}
            </TD>
            <TD
              customStyle={TDRoomStyle}
            >
              {project.projectRoom}
            </TD>
          </TR>
        ))}
      </TBody>
    </>
  );
};

export default NightStudyProjectItem;
