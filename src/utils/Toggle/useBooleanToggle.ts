import { useEffect } from "react";
import { useSetRecoilState, RecoilState } from "recoil";

const useHideComponent = <T>(recoilState: RecoilState<T>, value: T) => {
  const setState = useSetRecoilState(recoilState);

  useEffect(() => {
    setState(value);
    return () =>
      setState((prev) => (typeof prev === "function" ? prev(value) : !value));
  }, [setState]);
};

export default useHideComponent;
