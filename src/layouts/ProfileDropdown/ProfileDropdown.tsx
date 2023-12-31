import CSSModules from "react-css-modules";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./ProfileDropdown.module.css";
import logOutIcon from "../../assets/log-out-icon.svg";
import { getUserName, signOutUser } from "../../firebase";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

interface Props {
  dropdown: string;
}

const ProfileDropdown: React.FC<Props> = ({ dropdown }) => {
  const navigate = useNavigate();

  function profileNavigate() {
    navigate(`/user`);
  }

  function logoutPop() {
    alert("This is a known bug. Development team is working on this issue. They will consider fixing it in next hackday (no commitments).");
  }

  return (
    <Dropdown dropdown={dropdown}>
      <div styleName="profile-dropdown">
        <button styleName="profile-dropdown__button" onClick={profileNavigate}>
          <CgProfile styleName="profile-dropdown__icon" />
          Profile
        </button>
        <button styleName="profile-dropdown__button" onClick={logoutPop}>
          <img
            styleName="profile-dropdown__icon"
            src={logOutIcon}
            alt="log out icon"
          />
          Log Out
        </button>
      </div>
    </Dropdown>
  );
};

export default CSSModules(ProfileDropdown, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
