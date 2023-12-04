import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
const houses = [
  {
    houseName: "All",
    logoImage:
      "https://1000logos.net/wp-content/uploads/2021/04/Hogwarts-Logo-500x281.png",
    path: "/",
  },
  {
    houseName: "Gryffindor",
    logoImage:
      "https://images.ctfassets.net/usf1vwtuqyxm/4PcgKT3VHNAUTvf7kXkdrD/2093bb06b6a9e6e74129f13c0c639932/Filled-Gryffindor.svg",
    path: "/gryffindor",
  },
  {
    houseName: "Hufflepuff",
    logoImage:
      "https://images.ctfassets.net/usf1vwtuqyxm/1Et1EKQhLsGiql1ZlbHShw/79b58fe13d156833a808c82b085bedfe/Filled-Hufflepuff.svg",
    path: "/hufflepuff",
  },
  {
    houseName: "Ravenclaw",
    logoImage:
      "https://images.ctfassets.net/usf1vwtuqyxm/17xo05yCVo3tetTYhsgAvG/8963643ef613a74abc40a72548ddb953/Filled-Ravenclaw.svg",
    path: "/ravenclaw",
  },

  {
    houseName: "Slytherin",
    logoImage:
      "https://images.ctfassets.net/usf1vwtuqyxm/1dUgeiYSumqjTF6m8BWP1u/aa4d596be495975136ce08fe14a63e7b/Filled-Slytherin.svg",
    path: "/slytherin",
  },
];

function Main() {
  const [items, setItems] = useState("");
  const navigation = useNavigate();
  const handleClick = () => {};
  return (
    <div className="mainContain">
      <div className="sidebar">
        <ul>
          {houses.map((item, id) => (
            <li onClick={() => navigation(item.path)} key={id}>
              <img
                className="logoImage"
                src={item.logoImage}
                alt="{item.houseName}"
              />
              {item.houseName}
            </li>
          ))}
        </ul>
      </div>
      <div className="contains">
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
