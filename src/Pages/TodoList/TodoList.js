import React, { useState } from 'react';
import { AiFillEdit } from "react-icons/ai";
import Modal from '../Modal/Modal';

const TodoList = ({ todos, refetch }) => {

    const [isOpen, setIsOpen] = useState(false)


    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div className="flex justify-center">
            <ul className="bg-gray-100 rounded-lg border border-gray-100 w-full mx-5 md:w-1/2 text-gray-900">
                <li className="px-6 py-2 border-b border-gray-400 w-full rounded-t-lg font-bold text-center">Todo list</li>
                {
                    todos.map(todo =>
                        <div key={todo._id} className='flex justify-center items-center'>
                            <li className="px-6 py-2 border-b border-gray-400 w-full">{todo.title}</li>
                            <button
                                type="button"
                                onClick={openModal}
                                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            >
                                <AiFillEdit />
                            </button>
                            {isOpen && <Modal
                                closeModal={closeModal}
                                isOpen={isOpen}
                                refetch={refetch}
                                id={todo._id}
                            ></Modal>}
                        </div>
                    )
                }
            </ul>
        </div>
    );
};

export default TodoList;