import { SearchBar } from "@b1nd/b1nd-dodamdodam-ui";
import { useState } from "react";
import Calendars from "../../common/Calendars";

const OffBasePass = () => {
  const [studentName, setStudentName] = useState("");
  //   const [isOpen, setIsOpen] = useState(false);
  //   const [uploadDate, setUploadDate] = useState<string>("");
  //   console.log(uploadDate);
  return (
    <>
      <div style={{ display: "flex" }}>
        <SearchBar value={studentName} onChange={setStudentName} />

        {/* <Calendars
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          uploadDate={uploadDate}
          setUploadDate={setUploadDate}
        /> */}
      </div>
      <div></div>
    </>
  );
};

export default OffBasePass;
