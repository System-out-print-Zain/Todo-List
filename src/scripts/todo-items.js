'strict mode';

/* Factory function for todo items*/

function todoItem(title, description, dueDate)
{
    const setTitle = (newTitle) => title = newTitle;
    const getTitle = () => title;
    const setDescription = (newDescription) => description = newDescription;
    const getDescription = () => description;
    const setDate = (newDate) => dueDate = newDate;
    const getDate = () => date;

    return {
        setTitle,
        setDescription,
        setDate,
        getTitle,
        getDescription,
        getDate
    }
}

/* Factory Function for courses */
export default function course(name, identifier)
{
    const todos = [];

    const addTodo = function(title, descrip, dueDate)
    {   
        todos.push(todoItem(title, descrip, dueDate))
    }

    const delTodo = function(id)
    {  
        todos.splice(id, 1);
    }

    const changeDateTodo = function(id, date)
    {
        todos[id].setDate(date);
    }

    const getNumberOfTodos = function()
    {
        return todos.length;
    }

    const getTodo = function (index)
    {
        return todos[index];
    }

    const getName = () => {return name};
    const setName = (newName) => name = newName;

    return {
        addTodo,
        delTodo,
        changeDateTodo,
        getNumberOfTodos,
        getTodo,
        getName,
        setName,
        identifier
    }
}