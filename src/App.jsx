import {useState, useRef} from "react";
import ListItem from "./components/UI/List/ListItem";
import {ToastContainer, toast} from "react-toastify";

const App = () => {
    const [todo, setTodo] = useState([
      
    ]);

    const inputRef = useRef("");

    const addTask = () => {
        const newTask = {
            id: Date.now(),
            title: inputRef.current?.value,
            isDone: false,
        };

        if (newTask.title.trim().length) {
            setTodo([...todo, newTask]);
            inputRef.current.value = "";
            toast.success("Added successfully", {autoClose: 2000});
        } else {
            toast.error("Please enter a task title", {autoClose: 2000});
        }
    };

    const deleteTask = (id) => {
        const filterdTodo = todo.filter((item) => item.id != id);
        setTodo(filterdTodo);
        toast.info("Deleted successfully", {autoClose: 2000});
    };

    return (
        <div className="container mx-auto">
            <ToastContainer />
            <div className="wrapper mx-auto mt-8 w-[800px] bg-green-200 p-2">
                <div className="todo">
                    <h2 className="text-center font-semibold text-green-600 my-3">MY TODO APP</h2>
                    <div className="todo-header p-2 bg-cyan-100 flex gap-x-2">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Enter task name"
                            className="py-2 grow ps-4 focus:outline-none focus:shadow-lg duration-100"
                        />
                        <button
                            onClick={() => addTask()}
                            className="bg-green-500 px-3 py-2 rounded-lg text-white active:bg-green-700"
                        >
                            Add new task
                        </button>
                    </div>

                    <div className="todo-body p-2  bg-cyan-100 my-3">
                        <ul>
                            
                            {todo.length ? (
                                todo.map((item, index) => {
                                    return (
                                        <ListItem deleteTodo={deleteTask} state={item} index={index} key={item.id} />
                                    );
                                })
                            ): 
                            (
                                <h1 className="text-center font-bold">TASK LIST EMPTY</h1>
                            )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;