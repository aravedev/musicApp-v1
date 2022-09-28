import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { SideBarButton } from "./SideBarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from "../../../spotify";

export const SideBar = () => {
  const [image, setImage] = useState(
    "https://gmedia.playstation.com/is/image/SIEPDC/demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles-character-zenitsu-01-en-10jun21?$1600px$"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      const img = response?.data?.images[0]?.url;
      if (img !== undefined) {
        setImage(img);
      }
    });
  }, []);

  return (
    <div className="sidebar-container">
      <img className="profile-img" src={image} alt="" />
      <div>
        <SideBarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SideBarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SideBarButton title="Player" to="/player" icon={<FaPlay />} />
        <SideBarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SideBarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SideBarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
};

//
