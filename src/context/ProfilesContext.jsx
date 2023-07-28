import { createContext, useState } from "react";
import { Profiles } from "../service/Profiles";

const ProfilesContext = createContext({
  profiles: Profiles,
  selectedProfile: Profiles[0],
  handleChangeProfile: () => { },
});

export const ProfilesProvider = ({ children }) => {
  const [profiles, _setProfiles] = useState(Profiles);
  const [selectedProfile, setSelectedProfile] = useState(JSON.parse(localStorage.getItem('profile')) || Profiles[0]);

  const handleChangeProfile = (profileId) => {
    const profile = profiles.find((profile) => profile.id === profileId);
    setSelectedProfile(profile);
    localStorage.setItem('profile', JSON.stringify(profile));
  };

  return (
    <ProfilesContext.Provider value={{ profiles, selectedProfile, handleChangeProfile }}>
      {children}
    </ProfilesContext.Provider>

  )
};

export default ProfilesContext;
