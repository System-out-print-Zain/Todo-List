import course from './todo-items.js';
'strict mode';

const courseManager = (function ()
{
    /*Example Course*/
    const exCourse = course('Example Course 1', 'example-course-1');
    exCourse.addTodo('Quiz 1', 'Limit rules, epsilon-delta proofs.', '2023-11-23');

    const courses = [exCourse];
    let currCourse = 'example-course-1';

    const courseExists = function (identifier)
    {
        for (let i = 0; i < courses.length; i++)
        {
            if (courses[i].identifier === identifier) return true;
        }
        return false;
    }

    const addCourse = function (name, identifier)
    {
        if (!courseExists(identifier)) courses.push(course(name, identifier));
        else alert('Courses must have unique names');
    }

    const removeCourse = function (identifier)
    {
        for (let i = 0; i < courses.length; i++)
        {
            if (courses[i].identifier === identifier)
            {
                courses.splice(i, 1);
                return;
            }
        }
    }

    const setCurrCourse = function (identifier)
    {
        if (courseExists(identifier)) currCourse = identifier;
        else alert('Course with identifier ' + identifier + ' does not exist');
    }

    const getCurrCourse = function ()
    {
        for (let i = 0; i < courses.length; i++)
        {
            if (courses[i].identifier === currCourse)
            {
                return courses[i];
            }
        }
        return null;
    }

    const getNumCourses = function ()
    {
        return courses.length;
    }

    return {
        addCourse,
        removeCourse,
        courseExists,
        getCurrCourse,
        setCurrCourse,
        getNumCourses,
        get currCourse(){
            return currCourse;
        }
    }
})();

export default courseManager;