import { useEffect, useState } from "react";
import Malmasala from "./Malmasala";
import axios from 'axios';  // Add this import


function Models() {
    return (
        <div className="text-2xl">
            <p className="pt-4 mb-4">Models</p>
            <img src="./models.png" alt="img ..." />
        </div>
    );
}

export default Models;