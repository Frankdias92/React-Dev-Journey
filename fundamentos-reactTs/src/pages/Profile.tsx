import { useCallback, useEffect, useState } from 'react';
import { getProfileFromStorage, saveProfileToStorage } from '../storage/storageutil';

import './Profile.css'
import { CaretCircleLeft } from 'phosphor-react';


export function Profile() {
  const [name, setName] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const [role, setRole] = useState('')

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
    
    <div className='wrapper'>
      <a className='closeBtn'  href="/">
        <CaretCircleLeft size={32} />
      </a>
  
      <form className='profile'>
        <div className='container'>
          <span>Profile Name</span>
          <input
            type="text"
            value={name}
            placeholder='Your Name'
            onChange={(e) => setName(e.target.value)}
          />
        

          <span>Your job title</span>
          <input
            type="text"
            value={role}
            placeholder='Senior Developer'
            onChange={(e) => setRole(e.target.value)}
          />

          <span>Change your profile image</span>
          <input
            type="text"
            value={profileImage}
            placeholder='your profile gitHub'
            onChange={(e) => setProfileImage(e.target.value)}
          />

          <footer>
            <button onClick={saveChanges} >Save</button>
          </footer>
        </div>
      </form>
      
    </div>
  )
}

