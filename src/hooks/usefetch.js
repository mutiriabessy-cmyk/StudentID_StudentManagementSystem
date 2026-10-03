import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [result, setResult] = useState({ url: null, data: null, loading: true, error: null });
    const [requestKey, setRequestKey] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setResult({ url, data: null, loading: true, error: null });

            try {
                const response = await fetch(url, { signal: controller.signal });

                if (!response.ok) {
                    const error = new Error(`Request failed (${response.status})`);
                    error.status = response.status;
                    throw error;
                }

                const result = await response.json();
                setResult({ url, data: result, loading: false, error: null });
            } catch (error) {
                if (error.name !== "AbortError") {
                    setResult({ url, data: null, loading: false, error });
                }
            }
        };

        fetchData();
        return () => controller.abort();
    }, [url, requestKey]);

    const retry = () => setRequestKey((currentKey) => currentKey + 1);

    if (result.url !== url) {
        return { data: null, loading: true, error: null, retry };
    }

    return { data: result.data, loading: result.loading, error: result.error, retry };
};

export default useFetch;