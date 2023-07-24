'strict mode';

/* Factory function for todo items*/

function todoItem(title, description, dueDate)
{
    const setTitle = (newTitle) => title = newTitle;
    const getTitle = () => title;
    const setDescription = (newDescription) => description = newDescription;
    const getDescription = () => description;
    const setDueDate = (newDate) => dueDate = newDate;
    const getDueDate = () => dueDate;

    return {
        setTitle,
        setDescription,
        setDueDate,
        getDueDate,
        getTitle,
        getDescription,
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
        todos[id].setDueDate(date);
    }

    const getDateTodo = function(id)
    {
        return todos[id].getDueDate();
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
        getDateTodo,
        identifier
    }
}