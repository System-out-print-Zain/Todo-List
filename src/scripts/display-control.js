'strict mode';

/*Encapsulates the selection of the necessary DOM objects*/
const domElements = (function()
{

    const courseCont = document.querySelector('.courses');

    const addCourseBtn = document.querySelector('.add-course');
    const newCourseModal = {
        form: document.querySelector('.new-course'),
        input: document.getElementById('course-name')
    };

    const courses = function()
    {
        return document.querySelectorAll('.course');
    }

    const courseDelBtn = function (course)
    {
        return course.children[1];
    }

    let todos = document.querySelectorAll('item');
    const selectTodos = function ()
    {  
        todos = document.querySelectorAll('item');
    }

    const todoDate = function(todo)
    {
        return todo.children.children[2];
    }

    const todoDeleteBtn = function(todo)
    {
        return todo.children[0];
    }

    const newItemForm = {
        form: document.querySelector('.new-item'),
        title: document.querySelector('#title'),
        date: document.querySelector('#date'),
        description: document.querySelector('#description')
    }

    const selectNewItemForm = function()
    {
        newItemForm.form = document.querySelector('.new-item');
        newItemForm.title = document.querySelector('#title');
        newItemForm.date = document.querySelector('#date');
    }

    const createTodoItem = function(title, des, date)
    {
        const todoItems = document.querySelector('todo-items');
        let todoCont = document.createElement('li');
        todoItems.appendChild(todoCont);

    }

    const createCourse = function()
    {

    }

    return {
        addCourseBtn,
        newCourseModal,
        courses,
        todos,
        newItemForm,
        courseCont,

        selectTodos,
        todoDate,
        todoDeleteBtn,
        courseDelBtn,
        selectNewItemForm
    }

})();

/* Adds event listeners to all DOM objects in domElements object*/
export const displayController = function(listener)
{
    /* Eventlistener Stuff*/
    domElements.addCourseBtn.addEventListener('click', () => {
        domElements.addCourseBtn.classList.remove('active');
        domElements.newCourseModal.form.classList.add('active');
    })

    domElements.newCourseModal.form.addEventListener('submit', (e) => {
        listener.addCourse(domElements.newCourseModal.input.value);
        e.preventDefault();
        domElements.newCourseModal.form.classList.remove('active');
        domElements.addCourseBtn.classList.add('active');
        domElements.newCourseModal.form.reset();
    })

    document.addEventListener('click', (e) => {
        if (e.target.closest('.new-course') || e.target.closest('.add-course')) return;
        else 
        {
            domElements.newCourseModal.form.classList.remove('active');
            domElements.addCourseBtn.classList.add('active');
        }
    })

    const addEventListToCourses = function (){
        let courses = domElements.courses();
        for (let i = 0; i < courses.length; i++)
        {
            courses[i].addEventListener('click', () => {
                listener.changeCurrCourse(i);
            })

            domElements.courseDelBtn(courses[i]).addEventListener('click', () => {
                listener.deleteCourse(i);
            })
        }
    }

    const addEventListToTodos = function (){
        for (let i = 0; i < domElements.todos.length; i++)
        {
            domElements.todoDeleteBtn(domElements.todos[i]).addEventListener('click', ()=>{
                listener.delTodo(i);
            });

            domElements.todoDate(domElements.todos[i]).addEventListener('change', ()=>{
                let date = new Date(domElements.todoDate(domElements.todos[i]).value);
                listener.changeTodoDate(i, date);
            })
        }
    }


    const addEventListToForm = function (){
        domElements.newItemForm.form.addEventListener('submit', ()=>{
            let title = domElements.newItemForm.title.value;
            let description = domElements.newItemForm.description.value;
            let date = new Date(domElements.newItemForm.date.value);
            listener.addTodoItem(title, description, dueDate);
        });
    }
    // For the example course
    addEventListToCourses();
    // For example todo
    addEventListToTodos();
    // For inital form
    addEventListToForm();

    /* Display out stuff */

    function addCourse(courseName)
    {
        const courseCont = document.createElement('li');
        courseCont.classList.add('course');
        
        const name = document.createElement('div');
        name.textContent = courseName;
        name.classList.add('course-name');

        const del = document.createElement('p');
        del.textContent = "X";
        del.classList.add('del-course');

        courseCont.appendChild(name);
        courseCont.appendChild(del);

        domElements.courseCont.appendChild(courseCont);
    }

    function addCourses(...args)
    {
        for (let arg of args)
        {
            addCourse(arg.name);
        }
        addEventListToCourses();
    }

    function deleteCourse(id)
    {
        console.log(domElements.courses())
        domElements.courses()[id].remove();
        addEventListToCourses();
    }

    function addTodoItem()
    {

    }

    function deleteTodoItem(id)
    {

    }

    function changeCourse(id)
    {

    }

    return {
        addCourses,
        deleteCourse,
        addTodoItem,
        deleteTodoItem,
        changeCourse
    }

};