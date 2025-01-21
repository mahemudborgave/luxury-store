function Malmasala({ vlabel, vlink, postedby }) {
    return (
        <div className="border-2 border-solid border-pink-800 mt-3 text-xl p-3">
            <p>{vlabel}</p>
            <a href={vlink} target="_blank" rel="noopener noreferrer" className="text-pink-500 visited:text-pink-400">Here is your link</a>
            <p className="italic text-[#979797]">- {postedby}</p>
        </div>
    );
}

export default Malmasala;