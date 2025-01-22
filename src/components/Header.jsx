import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <div className="fixed top-0 left-0 w-full">
            <div className="flex justify-between p-3 bg-pink-500">
                <p className="text-3xl">LuxuryStore</p>
                <span
                    className="material-symbols-outlined text-4xl m-0 p-0 cursor-pointer"
                    onClick={() => console.log('Searching...')}
                >
                    manage_search
                </span>
            </div>
            <div className="mt-1">
                <button className="inline-block px-3 py-2 bg-[#83838340]" onClick={() => {navigate('/home')}}>Trending</button>
                <button className="inline-block px-3 py-2 bg-[#83838340]" onClick={() => {navigate('/models')}}>Models</button>
            </div>  
        </div>
    );
}

export default Header;