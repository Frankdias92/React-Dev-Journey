// Em storageUtil.ts
export const saveProfileToStorage = ( name: string, profileImage: string, role: string ) => {
  localStorage.setItem('profileName', name);
  localStorage.setItem('profileImage', profileImage);
  localStorage.setItem('profileRole', role);
};

export const getProfileFromStorage = () => {
  const storeName = localStorage.getItem('profileName') || 'Franklin Macedo';
  const storeImage = localStorage.getItem('profileImage') || 'Frankdias92';
  const storeRole = localStorage.getItem('profileRole') || 'Developer';

  return { name: storeName, profileImage: storeImage, role: storeRole };
};
