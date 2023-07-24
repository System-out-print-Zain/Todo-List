import courseManager from './course-management.js';
'strict mode';

const displayController = function () 
{

    const replaceSpacesWithDashes = function(str)
    {
        let temp = "";

        for (let i = 0; i < str.length; i++)
        {
            if (str.charAt(i) === " ") temp += "-";
            else temp += str.charAt(i);
        }

        return temp.toLowerCase();
    }
    
    const addCourse = function (name)
    {
        let identifier = replaceSpacesWithDashes(name);
        if (!courseManager.courseExists(identifier))
        {
            const courseCont = document.querySelector('.courses');
            courseCont.innerHTML += 
            `<li class="course `+ identifier +`">
                <div class="course-name">`+ name + `</div>
                <p class="del-course">X</p>
            </li>`;
            courseManager.addCourse(name, identifier);
            initCourses();
        }
        else{
            alert('A course of this name already exists.'); 
        }
    }

    const removeCourse = function (identifier)
    {
        const courseToBeRemoved = document.querySelector('.' + identifier);
        courseToBeRemoved.remove();
        courseManager.removeCourse(identifier);
    }

    const loadCourse = function (identifier)
    {
        if (!courseManager.courseExists(identifier)){
            return;
        }

        courseManager.setCurrCourse(identifier)
        const prevSelectedCourse = document.querySelector('.selected-course');
        const currSelectedCourse = document.querySelector('.' + identifier);

        prevSelectedCourse.classList.remove('selected-course')
        currSelectedCourse.classList.add('selected-course');

        const cont = document.querySelector('.todo-items');
        const head = document.querySelector('.course-title');
        head.textContent = courseManager.getCurrCourse().getName();

        cont.innerHTML = "";

        let todo;

        for (let i = 0; i < courseManager.getCurrCourse().getNumberOfTodos(); i++)
        {

            todo = courseManager.getCurrCourse().getTodo(i);
            cont.innerHTML += 
            `<li class="item">
                <p class="del-item">X</p>
                <div class="item-info">
                    <h4 class="item-name">`+todo.getTitle()+`</h4>
                    <p class="description">`+todo.getDescription()+`</p>
                    <input type="date" placeholder="dd/mm/yyyy" id="due-date" value="`+todo.getDate()+`">
                </div>
            </li>`;
        }

        initTodos();

    }

    const addTodoItem = function (title, description, date)
    {
        const todoCont = document.querySelector('.todo-items');
        todoCont.innerHTML += 
        `<li class="item">
            <p class="del-item">X</p>
            <div class="item-info">
                <h4 class="item-name">`+title+`</h4>
                <p class="description">`+description+`</p>
                <input type="date" placeholder="dd/mm/yyyy" id="due-date" value="`+date+`">
            </div>
        </li>`;
        courseManager.getCurrCourse().addTodo(title, description, date);
        initTodos();
    }

    const removeTodoItem = function (id)
    {
        const todoItems = document.querySelector('.todo-items');
        const itemToBeRemoved = todoItems.children[id];
        itemToBeRemoved.remove();
        courseManager.getCurrCourse().delTodo(id);
    }

    /* Event Listeners */

    var initAddCourse = function()
    {
        const addCourseBtn = document.querySelector('.add-course');
        const newCourseModal = document.querySelector('.new-course');

        addCourseBtn.addEventListener('click', ()=>{
            addCourseBtn.classList.remove('active');
            newCourseModal.classList.add('active');
        })

        document.addEventListener('click', (e)=>{
            if (e.target.closest('.add-course') || e.target.closest('.new-course')) return;
            else
            {
                addCourseBtn.classList.add('active');
                newCourseModal.classList.remove('active');
            }
        })

        newCourseModal.addEventListener('submit', (e)=>{
            e.preventDefault();
            const input = document.querySelector('#course-name');
            addCourse(input.value);
            newCourseModal.reset();
            addCourseBtn.classList.add('active');
            newCourseModal.classList.remove('active');
        })
    }

    var initCourses = function ()
    {
        const courses = document.querySelectorAll('.course');
        const delCourseBtns = document.querySelectorAll('.del-course');
        const courseNames = document.querySelectorAll('.course-name');

        for (let i = 0; i < courses.length; i++)
        {
            courseNames[i].addEventListener('click', ()=>{
                // Load the ith course
                loadCourse(courses[i].classList[1]);
            })
            delCourseBtns[i].addEventListener('click', ()=>{
                removeCourse(courses[i].classList[1]);
            })
        }
    }

    var initAddTodoModal = function ()
    {
        const modal = document.querySelector('.new-item');
        modal.addEventListener('submit', (e)=>{
            e.preventDefault();
            const name = document.querySelector('#title').value;
            const description = document.querySelector('#description').value;
            const date = document.querySelector('#date').value;;
            addTodoItem(name, description, date);
            modal.reset();
        })
    }

    var initTodos = function ()
    {
        const todos = document.querySelectorAll('.item');
        const delBtns = document.querySelectorAll('.del-item');
        const dates = document.querySelectorAll('#due-date');

        for (let i = 0; i < todos.length; i++)
        {
            delBtns[i].addEventListener('click', ()=>{
                removeTodoItem(i);
            })
            dates[i].addEventListener('change', ()=>{
                courseManager.getCurrCourse().changeDateTodo(i, dates[i].value);
            })
        }
    }

    initCourses();
    initTodos();
    initAddTodoModal();
    initAddCourse();
}

export default displayController;