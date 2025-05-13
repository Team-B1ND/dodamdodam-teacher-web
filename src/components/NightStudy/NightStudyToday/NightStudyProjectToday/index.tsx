import { TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { NightStudyTBody,NightStudyTR } from "../NightStudyTodayItem/style";
import { useGetNightStudyProjectStudents } from "queries/NightStudy/nightstudy.query";
import { TDNameStyle, TDProjectNameStyle, TDRoomStyle, TDStudentStyle } from "./style";

const NightStudyProjectItem = () => {
  const { data } = useGetNightStudyProjectStudents({ suspense: true });

  return (
    <>
      <TBody customStyle={NightStudyTBody}>
        {data?.data.map((project) => (
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
