import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Malmasala({ vlabel, vlink, postedby }) {
    const [isPreviewed, setIsPreviewed] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(vlink).then(
            () => {
                toast.success("Link copied to clipboard!");
            },
            () => {
                toast.error("Failed to copy the link.");
            }
        );
    };

    const handleClick = () => {
        const userConfirmed = window.confirm("Are you sure you want to preview this?");
        if (userConfirmed) {
            window.open(vlink);
        }
    };

    return (
        <div className="border-2 border-solid border-pink-800 mt-3 text-xl px-3 py-1 relative">
            <p className="text-pink-500 visited:text-pink-400">{vlabel}</p>
            <p className="italic text-[#979797] text-sm">- {postedby}</p>
            <button
                onClick={handleClick}
                className="text-pink-500 border border-pink-500 text-sm px-2 py-1 rounded mb-1 mr-2"
            >
                Preview
            </button>
            <button
                onClick={copyToClipboard}
                className="text-white bg-pink-500 hover:bg-pink-600 text-sm px-2 py-1 rounded mb-1"
            >
                Copy Link
            </button>
            <ToastContainer position="bottom-right" autoClose={2000} />
        </div>
    );
}

export default Malmasala;
