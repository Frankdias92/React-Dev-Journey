import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { getProfileFromStorage } from '../../src/storage/storageutil';

import './Default.css'
import { Header } from "../components/Header";

const { name: storeName, profileImage: storeImage, role: storeRole } = getProfileFromStorage();

export function Default() {

  return (
    <>
      <Header />
      <div className="layout">
        <Sidebar
          key={1}
          name={storeName}
          profileImageSrc={storeImage}
          role={storeRole}
        />

        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  )
}