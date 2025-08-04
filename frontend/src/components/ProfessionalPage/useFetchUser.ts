import api from 'components/api';
import { useEffect, useState } from 'react';

export interface User {
  name: string;
  title: string;
  catchPhrase: string;
  biopic: string;
}


const useFetchUser = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {  
        const {data} = await api.get('/professional');
        setUserData(data);
      } catch(error) {
        console.error(error.message)
      } 
      setLoading(false);
    }
    fetchData();
  }, []);

  return { userData, loading };
}

export default useFetchUser;
