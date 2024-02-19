import { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface FetchDataDetailsResult {
    dataDetails: any;
    loading: boolean;
    error: AxiosError | null;
}

const useFetchDataDetails = (endpoint: string, id: string): FetchDataDetailsResult => {
    const [dataDetails, setDataDetails] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AxiosError | null>(null);

    const fetchDataDetails = async (): Promise<void> => {
        try {
            const response: AxiosResponse = await axios.get(
                `${import.meta.env.VITE_APP_API_URL}/${endpoint}/${id}`
            );

            if (response.status === 200) {
                setDataDetails(response.data.data);
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
            setError(error.response);
        } else if (error.request) {
            setError(new Error('No response received from the server'));
        } else {
            setError(new Error(`Error setting up the request: ${error.message}`));
        }
    };

    useEffect(() => {
        fetchDataDetails();
    }, [id]);

    return { dataDetails, loading, error };
};

export default useFetchDataDetails;
