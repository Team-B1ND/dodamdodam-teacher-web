import { useState } from "react";

export const useSignup = () => {
  const [section, setSection] = useState("id");
  return { section, setSection };
};
