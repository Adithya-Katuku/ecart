import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import LogOut from "./Buttons/LogOut";
import ToggleCart from "./Buttons/ToggleCart";

const Navbar = () => {
  const username = useSelector((state: RootState) => state.store.username);
  return username?(
    <div className="sticky-top opacity-75 bg-white">
      <nav className="d-flex border-bottom justify-content-between p-2">
        <h4 className="text-primary fw-bolder">BeeKart</h4>

        <div className="d-flex">
          <ToggleCart />
          <LogOut />
        </div>
      </nav>
    </div>
  ):null;
};

export default Navbar;
