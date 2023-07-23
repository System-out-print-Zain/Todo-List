import course from './todo-items.js';
'strict mode';

const courseManager = (function ()
{
    /*Example Course*/
    const exCourse = course('Example Course 1');
    exCourse.addTodo('Quiz 1', 'Limit rules, epsilon-delta proofs.', null);

    const courses = [exCourse];
    let currCourse = 'Example Course 1';

    const courseExists = function (name)
    {
        for (let i = 0; i < courses.length; i++)
        {
            if (courses[i].name === name) return true;
        }
        return false;
    }

    const addCourse = function (name)
    {
        if (!courseExists(name)) courses.push(course(name));
        else alert('Courses must have unique names');
    }

    const removeCourse = function (name)
    {
        for (let i = 0; i < courses.length; i++)
        {
            if (courses[i].name === name)
            {
                courses.splice(i, 1);
                return;
            }
        }
    }

    return {
        addCourse,
        removeCourse,
        currCourse
    }
})();

export default courseManager;