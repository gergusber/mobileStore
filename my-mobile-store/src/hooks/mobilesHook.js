import { useQuery } from '@tanstack/react-query';
import { getMobiles, getMobileDetails } from '../helpers/api-util';
import { useEffect, useState } from 'react';
const HOUR_IN_MS = 1000 * 60 * 60 * 1;

export const useMobiles = (searchParam) => {
  const { data: allData, isLoading } = useQuery(['mobiles'], () => getMobiles(searchParam), {
    staleTime: HOUR_IN_MS,
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    cacheTime: 100,
    retry: false
  });
  const [data, setData] = useState([]);

  const onSearch = () => {
    if (!searchParam) {
      setData(allData);
      return;
    }

    if (!allData?.length) {
      setData([]);
      return;
    }

    const filteredList = allData.filter((mobile) => {
      const { model = '', brand = '' } = mobile;

      const mobileName = (`${brand}${model}`).toLowerCase();
      return mobileName.includes(searchParam.toLowerCase());
    });

    setData(filteredList);
  };

  useEffect(() => {
    onSearch();
  }, [allData, isLoading]);

  useEffect(() => {
    onSearch();
  }, [searchParam]);

  return { data, isLoading };
};

export const useGetMobileDetail = (id) => {
  return useQuery(['mobileDetail', id], () => getMobileDetails(id), {
    staleTime: HOUR_IN_MS,
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    cacheTime: 100,
    retry: false
  });
};



