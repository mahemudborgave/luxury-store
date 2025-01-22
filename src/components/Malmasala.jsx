function Malmasala({ vlabel, vlink, postedby }) {
    return (
        <div className="border-2 border-solid border-pink-800 mt-3 text-xl px-3 py-1">
            <a href={vlink} target="_blank" rel="noopener noreferrer" className="text-pink-500 visited:text-pink-400">{vlabel}</a>
            <p className="italic text-[#979797] text-sm">- {postedby}</p>
        </div>
    );
}

export default Malmasala;