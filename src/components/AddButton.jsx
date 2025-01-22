import { useNavigate } from "react-router-dom";

function AddButton() {
    const navigate = useNavigate();
    return (
        <div className="fixed bottom-6 right-6">
            <button
                className="bg-pink-500 text-white text-3xl font-bold rounded-full px-5 py-3 shadow-md hover:bg-pink-600 transition duration-300 ease-in-out"
                onClick={() => { navigate('/add') }}
            >+</button>
        </div>
    );
}

export default AddButton;
