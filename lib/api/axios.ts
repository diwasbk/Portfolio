const BASE_URL = process.env.NEXT_PUBLIC_API_BASEURL || "http://localhost:4200"

const axiosInstance = axios.create(
    {
        baseURL: BASE_URL,
        headers: {
            "Content-Type": "application/json"
        }
    }
);

export default axiosInstance;