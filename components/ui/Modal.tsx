// modal for taking input from user

import React, { useState } from 'react';


const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}> Open Modal </button>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold">Add Food</h2>
                        <input
                            type="text"
                            placeholder="Enter food name"
                            className="border border-gray-300 rounded-lg p-2 mt-2"
                        />
                        <button className="bg-blue-500 text-white rounded-lg p-2 mt-2">
                            Add Food
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-red-500 text-white rounded-lg p-2 mt-2"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;

