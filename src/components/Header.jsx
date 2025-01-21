function Header() {
    return (
        <div className="flex justify-between p-3 bg-pink-500">
            <p className="text-3xl">LuxuryStore</p>
            <span
                className="material-symbols-outlined text-4xl m-0 p-0 cursor-pointer"
                onClick={() => console.log('Searching...')}
            >
                manage_search
            </span>
        </div>
    );
}

export default Header;