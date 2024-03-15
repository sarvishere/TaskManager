import APIClient from "./api-client"

export interface IProfile{
    username?: string,
  email?: string,
  first_name: string,
  last_name: string,
  phone_number: string,
  thumbnail?: string
}

const profileService=<TData=any,TResponse=IProfile>(userId:number)=>{
return new APIClient<TData,TResponse>(`/accounts/${userId}`)
}

export default profileService;