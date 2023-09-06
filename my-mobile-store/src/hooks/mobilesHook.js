import { useQuery } from '@tanstack/react-query';
import { getMobiles,getMobileDetails } from "../helpers/api-util";


export const useGetAllMobiles = () => {
    return useQuery(['mobiles'], () => getMobiles(),{staleTime:50000,cacheTime:100});
}

export const useGetMobileDetail = (id) => {
    return useQuery(['mobileDetail', id], () => getMobileDetails(id));
}
