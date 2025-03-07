import { useEffect, useState } from "react"
import ClubRepositoryImpl from "repositories/Club/ClubRepositoryImpl";
import { ClubMember } from "types/Club/club.type";



const useMemberLeader = (clubId : number) => {
    const [memberLeader, setMemberLeader] = useState<ClubMember>();
    useEffect(() => {
        const fetchClubMemberLeader = async () =>{
          try{
            const clubRepository = new ClubRepositoryImpl();
            const response = await clubRepository.getMember(clubId);

            const clubLeaderData = response || []
            setMemberLeader(clubLeaderData)
            // console.log("member:", memberLeader)
          }
          catch(err){
            console.log(err)
          }
        }
        fetchClubMemberLeader()
    }, [])

    return {memberLeader}
}

export default useMemberLeader;