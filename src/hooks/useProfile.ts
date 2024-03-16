import { useEffect, useState } from "react";
import profileService, { IProfile } from "../services/profile-service";
import useAuthStore from "../stores/useAuthStore";

const useProfile = () => {
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState<IProfile>();

  const updateProfile = (userId: number, data: IProfile) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(data))
      formData.append(key, value);

    setIsLoading(true);
    profileService<FormData>()
      .patch(
        formData,
        { headers: { "Content-Type": "multipart/form-data" } },
        userId
      )
      .then((res) => {
        setProfileData(res.data)
        if(res.data){
          useAuthStore.setState({user:res.data})
        }
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };

  const getProfile = (userId: number) => {
    setIsLoading(true);
    profileService()
      .get(userId)
      .then((res) => setProfileData(res.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };

  return { getProfile,updateProfile, error, isLoading, profileData };
};

export default useProfile;
