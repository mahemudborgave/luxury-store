import { useEffect, useState } from "react";
import Malmasala from "./Malmasala";
import axios from 'axios';  // Add this import


function Trending() {
    const [data, setData] = useState([]); // State to hold the fetched data
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://luxurystorebackend.onrender.com/get-data');
                // console.log(response.data)
                setData(response.data); // Store the response data
                setLoading(false); // Set loading to false once data is fetched
            } catch (error) {
                setError(`Error fetching data: ${error.message}`);
                setLoading(false);
            }
        };

        fetchData(); // Call the fetch function        
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full p-16">
                <svg
                    className="animate-spin -ml-1 mr-3 h-10 w-10 text-pink-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                </svg>
                <span className="text-2xl animate-pulse">Loading...</span>
            </div>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="text-2xl sm:px-8 px-4">
            <p className="pt-4">Trending Now 🔥</p>
            <div className="h-full py-4">
                {data.map((item, index) => (
                    <Malmasala
                        key={index} // Add a unique key for each component
                        vlabel={item.vlabel}
                        vlink={item.vlink}
                        postedby={item.postedby}
                    />
                ))}
            </div>
        </div>
    );
}

export default Trending;