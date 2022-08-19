import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();
  const handleme = () => {
    navigate("/login");
  };
  const handlemeh = () => {
    navigate("/register");
  };
  const handlemeeh = () => {
    navigate("/profile");
  };
  const handlekitty = () => {
    navigate("/");
  };
  return (
    <div className="topbarContainer">
        <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink" onClick={handleme}>Welcomepage</span>
          <span className="topbarLink" onClick={handlekitty}>Your Feed</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">4</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">13</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">7</span>
          </div>
        </div>
        <img src="/assets/person/7.jpeg" alt="" className="topbarImg" onClick={handlemeeh}/>
      </div>                                                
                 
        <div className="topbarLeft">
        <span className="logo" onClick={handlemeh}>ThinkBigCommunity</span>
      </div>                                               
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for your buddies, posts or vids"
            className="searchInput"
          />
        </div>
      </div>  
    </div>                                              
  );
}