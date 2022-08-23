import React from "react";
import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos.map((todo) => (
                <SingleTodo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
