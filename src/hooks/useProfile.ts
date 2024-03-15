import { useState } from "react";
import profileService, { IProfile } from "../services/profile-service";

const useProfile = (userId:number) => {
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState<IProfile>();

  const updateProfile = (userId:number,data: IProfile) => {
    setIsLoading(true);
    profileService(userId)
      .patch(data,userId)
      .then((res) => setProfileData(res.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };
  return { updateProfile, error, isLoading,profileData };
};

export default useProfile;
