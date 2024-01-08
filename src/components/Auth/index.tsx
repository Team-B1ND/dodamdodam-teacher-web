import {
  HideHeaderAtom,
  HideSidebarAtom,
} from "../../stores/common/common.store";
import useHideComponent from "../../utils/Toggle/useBooleanToggle";

const Auth = () => {
  useHideComponent(HideHeaderAtom, false);
  useHideComponent(HideSidebarAtom, false);

  return (
    <>
      <div>dfdfdf</div>
    </>
  );
};

export default Auth;
