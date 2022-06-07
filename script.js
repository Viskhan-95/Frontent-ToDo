    const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    const dt = new Date();
    document.getElementById('day').textContent = dt.getDate();
    document.getElementById('week').textContent = week[dt.getDay() - 1];
    document.getElementById('month_year').textContent = `${month[dt.getMonth()]} ${dt.getFullYear()}`;

    btn.addEventListener('click', createElement);

    function createElement() {
        if(document.getElementById('txt').value.length > 0)
        {
            const div = document.createElement('div');
            const lbl = document.createElement('label');
            const btn = document.createElement('button');
            const chkbox = document.createElement('input');
            chkbox.type = 'checkbox';

            div.className = 'list__item';
            lbl.textContent = document.getElementById('txt').value;
            btn.textContent = "remove";
        
            btn.addEventListener('click', deleteElement);
            chkbox.addEventListener('click', crossMadeToDo);

            div.append(chkbox, lbl, btn);

            const todoList = document.getElementById('todo-list');
            todoList.insertAdjacentElement("afterbegin", div);

            document.getElementById('txt').value = '';
        }
        else {
            alert('Введите текст');
        }
    }

    function deleteElement(e) {
        const findCurrentEventElement = e.path[1];
        findCurrentEventElement.remove();
    }


    function crossMadeToDo(e) {
        const findCurrentEventElement = e.path[1];
        if(e.path[0].checked) {
            findCurrentEventElement.style.backgroundColor = 'white'
        }
        else {
            findCurrentEventElement.style.backgroundColor = 'lightblue'
        }
    }