import { useEffect, useState } from "react";
import { ClubResponse } from "types/Club/club.type";
import ClubRepositoryImpl from "repositories/Club/ClubRepositoryImpl";


const useFetchClubs = () => {
  const [clubs, setClubs] = useState<ClubResponse[]>([]);
  
    useEffect(() => {
      const fetchClubs = async () => {
        try {
          const clubRepository = new ClubRepositoryImpl();
          const response = await clubRepository.getClubs(); 
          
          const clubData = response || []; 
  
          setClubs(clubData);
          console.log(clubData)
        } catch (err) {
          console.log(err);
        }
      };
      fetchClubs();
    }, []);
  
    return {clubs};
  };


  export default useFetchClubs;
  