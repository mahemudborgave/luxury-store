import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddVideoDetail() {
    const [formData, setFormData] = useState({
        vlabel: '',
        vlink: '',
        postedby: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await axios.post('https://luxurystorebackend.onrender.com/add-data', formData);
            alert(response.data.message);
            setFormData({ vlabel: '', vlink: '', postedby: '' });
            navigate('/home');
        } catch (error) {
            console.error(error);
            alert('Failed to add data');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <h1 className='text-center sm:text-4xl text-2xl sm:m-4 m-1'>Upload Your Link</h1>
            <div className="flex justify-center p-4 text-xl">
                <form className='sm:w-1/2 w-full bg-gray-200/50 sm:px-12 px-4 py-8 rounded-lg' onSubmit={handleSubmit}>
                    <label htmlFor="vlabel m-0 p-0">Add video title</label>
                    <input
                        id='vlabel'
                        name='vlabel'
                        type="text"
                        // placeholder="Enter video title"
                        value={formData.vlabel}
                        className="border-pink-700 border-solid border-gray-700/60 rounded-md py-1 px-2 border-2 block my-3 w-full"
                        onChange={handleChange}
                        required />

                    <label htmlFor="vlink">Paste video link</label>
                    <input
                        id='vlink'
                        name='vlink'
                        type="text"
                        value={formData.vlink}
                        // placeholder="Enter video link"
                        className="border-pink-700 border-solid border-gray-700/60 rounded-md py-1 px-2 border-2 block my-3 w-full" onChange={handleChange}
                        required />

                    <label htmlFor="postedby">Your codename</label>
                    <input
                        id='postedby'
                        name='postedby'
                        type="text"
                        value={formData.postedby}
                        // placeholder="Enter your codename"
                        className="border-pink-700 border-solid border-gray-700/60 rounded-md py-1 px-2 border-2 block my-3 w-full" onChange={handleChange}
                        required
                    />
                    <button type="submit" className="bg-pink-500 text-white px-4 py-2 mt-8 block text-center w-full rounded-md hover:bg-pink-600" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddVideoDetail;