import { useEffect, useState } from 'react'
import axios from "../api/axios";

const UseFetch = (path) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            await axios.get(path).then((response) => {
                setData(response.data)
            }).catch((error) => {
                setError(error);
            }).finally(() => {
                setLoading(false);
            });
        }
        getData();
    }, [path])

    return { data, loading, error };
}

export default UseFetch;