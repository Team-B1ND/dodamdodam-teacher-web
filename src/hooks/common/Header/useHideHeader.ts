import { HideHeaderAtom } from "../../../stores/common/common.store";
import useBooleanToggle from "../../../utils/Toggle/useBooleanToggle";

const useHideHeader = () => {
  useBooleanToggle(HideHeaderAtom, false);
};

export default useHideHeader;
