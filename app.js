const toggleList = document.getElementById('toggleList');

const listDiv = document.querySelector('.list');

const descriptionInput = document.querySelector('input');

const descriptionP = document.querySelector('p.description');

const descriptionButton = document.querySelector('button.description');

const listUl = listDiv.querySelector('ul');

const addItemInput = document.querySelector('input.addItemInput');

const addItemButton = document.querySelector('button.addItemButton');

const lis = listUl.children;

const firstListItem = listUl.firstElementChild;

const lastListItem = listUl.lastElementChild;

listUl.style.maxWidth = '500px';

function attachListItemButtons(li) {
    let up = document.createElement("button");
    up.className = "up";
    up.textContent = "↑";
    li.appendChild(up);

    let down = document.createElement("button");
    down.className = "down";
    down.textContent = "↓";
    li.appendChild(down);

    let remove = document.createElement("button");
    remove.className = "remove";
    remove.textContent = "Remove";
    li.appendChild(remove);

}

for (let i = 0; i < lis.length; i += 1) {

    attachListItemButtons(lis[i])
}


listUl.addEventListener('click',
    (event) => {
        if (event.target.tagName == 'BUTTON') {

            if (event.target.className == 'remove') {


                let li = event.target.parentNode;
                let ul = li.parentNode;

                li.style.backgroundColor = 'lightpink';


                setTimeout( ()=> {ul.removeChild(li);}, 300  );

                
            }

            if (event.target.className == 'up') {


                let li = event.target.parentNode;
                let prevLi = li.previousElementSibling;
                let ul = li.parentNode;

                

                if (prevLi) {

                    li.style.backgroundColor = 'LightGoldenRodYellow';

                    setTimeout( ()=> {ul.insertBefore(li, prevLi);}, 300  );
                    setTimeout( ()=> {li.style.backgroundColor = 'White';}, 300  );

                }
            }

            if (event.target.className == 'down') {


                let li = event.target.parentNode;
                let nextLi = li.nextElementSibling;
                let ul = li.parentNode;

                if (nextLi) {

                    li.style.backgroundColor = 'LightGoldenRodYellow';
                    setTimeout( ()=> {ul.insertBefore(nextLi, li);}, 300  );
                    setTimeout( ()=> {li.style.backgroundColor = 'White';}, 300  );
                    
                }
            }


        }


    }

)

toggleList.addEventListener('click', () => {

    if (listDiv.style.display == 'none') {
        toggleList.textContent = "Hide list";
        listDiv.style.display = 'block'
    } else {
        toggleList.textContent = "Show list";
        listDiv.style.display = 'none';
    }


    ;
});


descriptionInput.value = descriptionP.textContent.slice(0, -1);


descriptionButton.addEventListener('click', () => {
    descriptionP.textContent = descriptionInput.value + ':';
    descriptionInput.value = "";
    descriptionInput.value = descriptionP.textContent.slice(0, -1);


})




addItemButton.addEventListener('click', () => {



    let ul = document.getElementsByTagName('ul')[0];

    let li = document.createElement('li');

    li.textContent = addItemInput.value;

    attachListItemButtons(li);


    ul.appendChild(li);

    li.style.backgroundColor = 'lightgreen';

    addItemInput.value = "";

    setTimeout( ()=> {li.style.backgroundColor = 'white';}, 300  );

    


}

)