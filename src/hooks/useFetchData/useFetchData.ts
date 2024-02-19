import { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface FetchDataProps {
    endpoint: string;
}

interface FetchDataResult {
    data: any[];
    loading: boolean;
    error: string | null;
    refetchData: () => Promise<void>;
}

export const useFetchData = ({ endpoint }: FetchDataProps): FetchDataResult => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async (): Promise<void> => {
        try {
            const response: AxiosResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/${endpoint}`);

            if (response.status === 200) {
                setData(response.data.data);
            } else {
                throw new Error(`Unexpected status code: ${response.status}`);
            }
        } catch (error) {
            handleRequestError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleRequestError = (error: AxiosError) => {
        if (error.response) {
            // The request was made and the server responded with a non-200 status code
            setError(`Error fetching data: ${error.response.status}`);
        } else if (error.request) {
            // The request was made but no response was received
            setError('No response received from the server');
        } else {
            // Something happened in setting up the request that triggered an Error
            setError(`Error setting up the request: ${error.message}`);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error, refetchData: fetchData };
};
