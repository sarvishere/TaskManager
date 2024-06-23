import APIClient from "./api-client"

export interface IProfile{
  user_id?:string,
    username: string,
  email: string,
  first_name: string,
  last_name: string,
  phone_number: string,
}

export interface IChange{
  username?: string,
  email?: string,
  first_name?: string,
  last_name?: string,
  phone_number?: string,
}


const profileService=<TData=any,TResponse=IProfile>()=>{
return new APIClient<TData,TResponse>(`/accounts/`)
}

export default profileService;