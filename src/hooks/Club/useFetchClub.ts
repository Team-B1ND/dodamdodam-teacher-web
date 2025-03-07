import { useEffect, useState } from "react";
import { ClubResponse } from "types/Club/club.type";
import ClubRepositoryImpl from "repositories/Club/ClubRepositoryImpl";


const useFetchClub = (id: number) =>{
    const [club, setClub] = useState<ClubResponse>();

    useEffect(()=>{
        const fetchClub = async () => {
            try{
                const clubRepository = new ClubRepositoryImpl()
                const response = await clubRepository.getClub(id)

                const clubDetailData = response || []

                setClub(clubDetailData)

                console.log(club)
                console.log(response)
            }catch(err){
                console.log(err)
            }
        }

        fetchClub()
    }, [])
    return {club}
}

export default useFetchClub;