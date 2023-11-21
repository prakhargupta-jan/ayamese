import axios from "axios";
import { useEffect, useState } from "react";

const useGetData = (route) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios
            .get(import.meta.env.VITE_BACKEND_URL+ route)
            .then((response) => {
                setIsLoading(true);
                setData(response.data.data);
                console.log(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, [route]);

    return { data, isLoading, error };
}

export default useGetData;