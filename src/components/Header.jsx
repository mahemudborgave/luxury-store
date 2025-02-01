import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useState } from 'react';

function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    const toggleSearchBar = () => {
        setShowSearch((prev) => !prev); // Toggle the state
    };

    return (
        <div className="sticky top-0 z-10 w-full bg-gray-100">
            <div className="flex justify-between p-3 bg-pink-500">
                <p className="text-3xl font-times font-bold">LuxuryStore</p>
                <span
                    className="material-symbols-outlined text-4xl m-0 p-0 cursor-pointer"
                    onClick={toggleSearchBar}
                >
                    manage_search
                </span>
            </div>
            {showSearch && <SearchBar />}
            <div className="mt-0 flex gap-1 px-2 py-1 bg-gray-100">
                <button className="inline-block px-3 py-2 bg-[#83838340] rounded-md" onClick={() => { navigate('/home') }}>Trending</button>
                <button className="inline-block px-3 py-2 bg-[#83838340] rounded-md" onClick={() => { navigate('/models') }}>Models</button>
            </div>
        </div>
    );
}

export default Header;
