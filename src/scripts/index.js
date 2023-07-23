import '../style.css';
import {displayController} from './display-control';
import {course} from './todo-items';
'strict mode';

var app = (function ()
{
    const exampleCourse = course('Example Course 1');
    exampleCourse.addTodo('Quiz 1', 'Limit rules, epsilon-delta proofs.', null);
    const courses = [exampleCourse];

    let currCourse = 0;

    function changeCurrCourse(id){
        currCourse = id;
        disController.changeCourse(id);
    }

    function addCourse(name){
        courses.push(course(name));
        disController.addCourses(courses);
    }

    function delTodo(id){
        courses[currCourse].delTodo(id);
        disController.deleteTodoItem(id);
    }

    function changeTodoDate(id, date){
        courses[currCourse].changeDateTodo(id, date);
    }

    function addTodoItem(title, description, date){
        courses[currCourse].addTodo(title, description, date);
        disController.addTodoItem(title, description, date);
    }

    function deleteCourse(id)
    {
        courses.splice(id, 1);
        disController.deleteCourse(id);
    }

    return {
        changeCurrCourse,
        addCourse,
        delTodo,
        changeTodoDate,
        addTodoItem,
        deleteCourse
    }

})();

var disController = displayController(app);