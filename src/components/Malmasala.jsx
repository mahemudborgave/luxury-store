import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Malmasala({ vlabel, vlink, postedby }) {
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

    return (
        <div className="border-2 border-solid border-pink-800 mt-3 text-xl px-3 py-1">
            <a href={vlink} target="_blank" rel="noopener noreferrer" className="text-pink-500 visited:text-pink-400">{vlabel}</a>
            <p className="italic text-[#979797] text-sm">- {postedby}</p>
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
