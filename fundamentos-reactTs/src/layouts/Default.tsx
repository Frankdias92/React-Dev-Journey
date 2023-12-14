import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";

import { getProfileFromStorage } from '../../src/storage/storageutil';

const { name: storeName, profileImage: storeImage, role: storeRole } = getProfileFromStorage();



export function Default() {

  return (
    <>
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