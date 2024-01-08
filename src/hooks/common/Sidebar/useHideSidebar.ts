import { HideSidebarAtom } from "../../../stores/common/common.store";
import useBooleanToggle from "../../../utils/Toggle/useBooleanToggle";

const useHideSidebar = () => {
  useBooleanToggle(HideSidebarAtom, false);
};

export default useHideSidebar;
