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

export function course(name)
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

    return {
        addTodo,
        delTodo,
        changeDateTodo,
        name
    }
}