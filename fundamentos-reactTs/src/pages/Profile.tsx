import { useCallback, useEffect, useState } from 'react';
import { getProfileFromStorage, saveProfileToStorage } from '../storage/storageutil';

import './Profile.css'


export function Profile() {
  const [name, setName] = useState('Franklin Macedo')
  const [profileImage, setProfileImage] = useState('Frankdias92')
  const [role, setRole] = useState('Developer')

  const saveChanges = useCallback(() => {
    saveProfileToStorage(name, profileImage, role);
  }, [name, profileImage, role]);


  useEffect(() => {
    const {
      name: storeName,
      profileImage: storeImage,
      role: storeRole
    } = getProfileFromStorage();

    setName(storeName)
    setProfileImage(storeImage)
    setRole(storeRole)
  }, [])
  
  return (
    
    <div className='profile'>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <input
        type="text"
        value={profileImage}
        onChange={(e) => setProfileImage(e.target.value)}
      />

      <footer>
        <button onClick={saveChanges} >Save</button>
      </footer>

      <a  href="/">
        Voltar para home
      </a>
    </div>
  )
}

