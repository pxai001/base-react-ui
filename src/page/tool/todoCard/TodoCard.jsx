import "../../../css/tool/todo.css"
import {useState} from "react";
import {getData, setData} from "../../../js/dataUtils";
import {isNotUndefined, isUndefined} from "../../../js/StringUtils";

function TodoCard() {
    const dataType = "todoCard";
    let initTodoList = getData(dataType);
    const todoSize = 10;
    if (isUndefined(initTodoList)) {
        initTodoList = [];
        for (let i = 0; i < todoSize; i++) {
            initTodoList.push(
                {
                    info: "TODO" + (i + 1),
                    status: "NO"
                }
            );
        }
        setData(dataType, initTodoList);
    }
    const [todoList, setTodoList] = useState(initTodoList);
    return (
        <div>
            <div className="todo-card">
                <div className="todo-card-header">
                    TODO
                </div>
                <div className="todo-card-main-border">
                    <div className="todo-card-main">
                        {
                            todoList.map((item, index) => {
                                return (
                                    <div key={index + item.info} className="todo-item">
                                        <div className={item.status === "OK" ? "todo-status active" : "todo-status"}
                                             onClick={() => changeTodoStatus(index, item.status)}>{item.status}</div>
                                        <div className="todo-info" onClick={() => changeTodoInfo(index, item.info)}>
                                            {item.info}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )

    function changeTodoStatus(index, status) {
        const todoListCopy = [...todoList];
        if (status === "OK") {
            todoListCopy[index].status = "NO";
        } else {
            todoListCopy[index].status = "OK";
        }
        setTodoList(todoListCopy);
        setData(dataType, todoListCopy);
    }

    function changeTodoInfo(index, info) {
        const todoListCopy = [...todoList];
        if (isUndefined(info)) {
            info = "";
        }
        let newInfo = prompt("TODO-" + (index + 1), info);
        if (isNotUndefined(newInfo)) {
            todoListCopy[index].info = newInfo;
            setTodoList(todoListCopy);
            setData(dataType, todoListCopy);
        }
    }
}

export default TodoCard;