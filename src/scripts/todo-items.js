'strict mode';

/* Factory function for todo items*/

function todoItem(title, description, dueDate)
{
    const setTitle = function(newTitle)
    {
        title = newTitle;
    }

    const getTitle = function()
    {
        return title;
    }

    const setDescription = function(newDescription)
    {
        description = newDescription;
    }

    const getDescription = function()
    {
        return description;
    }

    const setDate = function(newDate)
    {
        dueDate = newDate;
    }

    const getDate = function()
    {
        return date;
    }

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

    return {
        addTodo,
        delTodo
    }
}