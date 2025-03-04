import { ClubDateItem } from "./ClubDateItem";

const periods = ["create", "applicant"] as const; 

const ClubDateList = () => {
  return (
    <div>
      {periods.map((period) => (
        <ClubDateItem key={period} clubPeriodType={period} />
      ))}
    </div>
  );
};

export default ClubDateList;
