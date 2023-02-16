import { useEffect, useState } from 'react'
import axios from "../api/axios";
import { useSelector, useDispatch } from "react-redux";
// import * as Actions from "../redux/reducers";
const UseFetch = (path, func) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        const getData = async () => {
            await axios.get(path).then((response) => {
                setData(response.data)
                if (func) {
                    dispatch(func(response.data));
                }
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