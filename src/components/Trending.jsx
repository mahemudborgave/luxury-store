import Malmasala from "./Malmasala";

function Trending() {
    return (
        <div className="text-3xl py-4 mt-3">
            <p>Trending Now 🔥</p>
            <Malmasala 
                vlabel="First"
                vlink="some link"
            />
            <Malmasala 
                vlabel="Second"
                vlink="some link"
            />
        </div>
    );
}

export default Trending;