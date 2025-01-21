import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddVideoDetail() {
    const [formData, setFormData] = useState({
        vlabel: '',
        vlink: '',
        postedby: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post('https://luxurystorebackend.onrender.com/add-data', formData);
            alert(response.data.message);
            setFormData({ vlabel: '', vlink: '', postedby: '' });
            navigate('/home');
        } catch (error) {
            console.error(error);
            alert('Failed to add data');
        }
    };

    return (
        <div className="p-4 text-xl">
            <form onSubmit={handleSubmit}>
                <label htmlFor="vlabel">Add video title</label><br/>
                <input 
                    id='vlabel'
                    name='vlabel'
                    type="text" 
                    value={formData.vlabel}
                    className="border-pink-700 border-solid border-2 block my-3 w-full" 
                    onChange={handleChange}
                    required/>

                <label htmlFor="vlink">Paste video link</label><br/>
                <input 
                    id='vlink'
                    name='vlink'
                    type="text" 
                    value={formData.vlink}
                    className="border-pink-700 border-solid border-2 block my-3 w-full" 
                    onChange={handleChange}
                    required/>

                <label htmlFor="postedby">Your codename</label><br/>
                <input 
                    id='postedby'
                    name='postedby'
                    type="text" 
                    value={formData.postedby}
                    className="border-pink-700 border-solid border-2 block my-3 w-full" 
                    onChange={handleChange}
                    required/>

                <button type="submit" className="bg-pink-500 text-white px-4 py-2 mt-8 block text-center w-full">Submit</button>
            </form>

            <button className="mt-3 block text-red-500 underline" onClick={() => {navigate('/home')}}>Home</button>
            
        </div>
    );
}

export default AddVideoDetail;