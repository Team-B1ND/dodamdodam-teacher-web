import { useEffect, useState } from "react";
import ClubRepositoryImpl from "repositories/Club/ClubRepositoryImpl";
import { ClubMember } from "types/Club/club.type";

const useMembers = (clubId: number) => {
  const [members, setMembers] = useState<ClubMember[]>([]);
  useEffect(() => {
    const fetchClubsMembers = async () => {
      try {
        const clubRepository = new ClubRepositoryImpl();
        const response = await clubRepository.getMembers(clubId);
        const ClubMembers = response || []; 
        setMembers([ClubMembers])

        console.log(members)
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchClubsMembers();
  }, []);
  return { members };
};

export default useMembers;
