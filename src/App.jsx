import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Shortlisted from "./pages/Shortlisted";
import Home from "./pages/Home";
import {
  CardHeading,
  CardImage,
  ClipboardHeart,
  ClipboardHeartFill,
  GeoAltFill,
  SortDownAlt,
  ThreeDotsVertical,
} from "react-bootstrap-icons";
import avatar from "./assets/avatar.svg";
import IconButton from "./components/IconButton";

const onClickShortlist = ({navigate, pathname}) => {
  if (pathname === "/shortlisted") {
    navigate("/");
  } else {
    navigate("/shortlisted");
  }
}

function App() {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  return (
    <>
      <div className="sticky top-0 bg-white">
        <div className="flex flex-row justify-between items-center p-4 border-b-2">
          <img width={"31px"} src={avatar} />
          <span className="text-[#716966] text-2xl font-extrabold">
            EmptyCup
          </span>
          <span>
            <ThreeDotsVertical size={27} />
          </span>
        </div>
        <div className="flex flex-row justify-between ">
          <div className="flex flex-row">
            <span className="p-4">
              <IconButton
                icon={<CardHeading size={30} />}
                text={"Contacts"}
                color="#E0A64E"
              />
            </span>
            <span className="p-2 py-4">
              <IconButton
                icon={<CardImage size={30} />}
                text={"Gallery"}
                color="#3A312E"
              />
            </span>
            <span className="p-6 py-4">
              <IconButton
                icon={<GeoAltFill size={30} />}
                text={"Map"}
                color="#D7D7D7"
              />
            </span>
          </div>
          <div className="flex flex-row">
            <span className="p-2 py-4">
              <IconButton
                onClick={() => onClickShortlist({navigate, pathname})}
                icon={pathname == '/shortlisted' ? <ClipboardHeartFill size={30}/> : <ClipboardHeart size={30} />}
                text={"Shortlisted"}
                color="#3A312E"
              />
            </span>
            <span className="p-2 py-4">
              <IconButton
                icon={<SortDownAlt size={30} />}
                text={"Sort"}
                color="#3A312E"
              />
            </span>
          </div>
        </div>
      </div>
      {
        <Routes>
          <Route element={<Shortlisted />} path="/shortlisted" />
          <Route element={<Home />} path="*" />
        </Routes>
      }
    </>
  );
}

export default App;
