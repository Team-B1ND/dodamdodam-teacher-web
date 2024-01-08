import { useEffect } from "react";
import { useSetRecoilState, RecoilState } from "recoil";

const useHideComponent = (
  recoilState: RecoilState<boolean>,
  value: boolean
) => {
  const setState = useSetRecoilState(recoilState);

  useEffect(() => {
    setState(value);
    return () => setState(!value);
  }, [setState]);
};

export default useHideComponent;
