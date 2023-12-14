// import App  from "../App";
// import { Header } from "../components/Header";
// import { Sidebar } from "../components/Sidebar";
// import { getProfileFromStorage } from "../storage/storageutil";

import App from "../App";

// const { name: storeName, profileImage: storeImage, role: storeRole } = getProfileFromStorage();


export function Root() {

  
  return (
    <>
      {/* <Header />
      <Sidebar
        key={1}
        name={storeName}
        profileImageSrc={storeImage}
        role={storeRole}
      />
      */}


        <App />
    </>
  )
}