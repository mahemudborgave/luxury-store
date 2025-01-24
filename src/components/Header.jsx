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
        <div className="w-full">
            <div className="flex justify-between p-3 bg-pink-500">
                <p className="text-3xl">LuxuryStore</p>
                <span
                    className="material-symbols-outlined text-4xl m-0 p-0 cursor-pointer"
                    onClick={toggleSearchBar}
                >
                    manage_search
                </span>
            </div>
            {showSearch && <SearchBar />}
            <div className="mt-1">
                <button className="inline-block px-3 py-2 bg-[#83838340]" onClick={() => { navigate('/home') }}>Trending</button>
                <button className="inline-block px-3 py-2 bg-[#83838340]" onClick={() => { navigate('/models') }}>Models</button>
            </div>
        </div>
    );
}

export default Header;
