import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';

const Home = () => {

    const { data: todos, isLoading, refetch } = useQuery('todos', () => fetch('https://todo-app-latest.herokuapp.com/todos').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleChange = (e, id) => {
        if (e.target.checked) {

            const role = "completed";

            fetch(`https://todo-app-latest.herokuapp.com/todo/${id}`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ role })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount) {
                        toast.success("Your data edited successful")
                        e.target.value = ''
                        refetch()
                    }
                })
        }
    }

    return (
        <section className="flex justify-center my-10">
            <ul className="bg-white rounded-lg border border-gray-200 md:w-1/2 text-gray-900">
                <li className="px-6 py-2 border-b font-bold border-gray-200 w-full rounded-t-lg text-center">Todo list</li>
                {
                    todos.map(todo => todo.role !== 'completed' &&
                        <div key={todo._id} className="form-check flex justify-center items-center mx-4">
                            <input onChange={e => handleChange(e, todo._id)} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                            <label name="text" className="px-6 form-check-label py-2 border-b border-gray-200 w-full" htmlFor="flexCheckDefault">{todo.title}</label>
                        </div>
                    )
                }
            </ul>
        </section>
    );
};

export default Home;