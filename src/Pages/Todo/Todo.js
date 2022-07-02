import React from 'react';
import { toast } from 'react-toastify';
import TodoList from '../TodoList/TodoList';
import { useQuery } from 'react-query'
import Loading from '../../Shared/Loading';

const Todo = () => {

    const { data: todos, isLoading, refetch } = useQuery('todos', () => fetch('https://todo-app-latest.herokuapp.com/todos').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleSubmit = e => {

        const title = e.target.value;

        fetch('https://todo-app-latest.herokuapp.com/todo', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ title })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success("Your data added successful")
                    e.target.value = ''
                    refetch()
                }
            })
    }
    return (
        <div className='pb-10'>
            <div className='container mx-auto my-10'>
                <div className="flex justify-center">
                    <div className="mb-3 w-1/2">
                        <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 font-bold text-gray-100"
                        >Title</label>
                        <input onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)} type="text" name='title' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput1" placeholder="Example label" />
                    </div>
                </div>
            </div>
            <div>
                <TodoList
                    todos={todos}
                    refetch={refetch}
                    isLoading={isLoading}
                ></TodoList>
            </div>
        </div>
    );
};

export default Todo;