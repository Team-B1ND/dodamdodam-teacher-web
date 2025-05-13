import { useGetNightStudyProjectStudents } from "queries/NightStudy/nightstudy.query"
import { useEffect, useState } from "react"
import { ProjectStudentType } from "types/NightStudy/nightstudy.type";

export const useNightStudyProjectStudentsList = () =>{
    const {data : ProjectStudents} = useGetNightStudyProjectStudents();
    const [NightStudyProjectInfo, setNightStudyProjectInfo] = useState([
        {
            이름 : "",
            반번호 : "",
            프로젝트명 : "",
            장소 : "",
            심자체크 : "",
            복귀체크: "",
        }
    ])

    useEffect(()=>{
        if(ProjectStudents?.data){
            const newData = ProjectStudents.data.map((data : ProjectStudentType)=>({
                이름 : data.name,
                반번호 : data.number < 10
                ? `${data.grade}${data.room}0${data.number}`
                : `${data.grade}${data.room}${data.number}`,
                프로젝트명 : data.projectName,
                장소 : data.projectRoom,
                심자체크 : "",
                복귀체크 : "",
            }))
            setNightStudyProjectInfo(newData);
        }
    }, [ProjectStudents])

    return {NightStudyProjectInfo}
}