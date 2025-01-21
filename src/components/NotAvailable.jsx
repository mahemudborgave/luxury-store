function NotAvailable() {
    return (
        <div className="p-4 text-xl">
            <p >Oops ! Video down ....</p>
            <button className="mt-3 block text-red-500 underline" onClick={() => {navigate('/home')}}>Home</button>
        </div>
    );
}

export default NotAvailable;