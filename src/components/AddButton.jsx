import { useNavigate } from "react-router-dom";

function AddButton() {
    const navigate = useNavigate();
    return (
        <div className="absolute bottom-8 right-8">
            <button 
                className="bg-pink-500 text-white text-3xl font-bold rounded-full px-5 py-3 shadow-md hover:bg-pink-400 transition duration-300 ease-in-out" 
                onClick={() => {navigate('/add')}}
            >+</button>
        </div>
    );
}

export default AddButton;
