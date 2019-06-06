//Followed a tutorial at www.ipenywis.com/tutorials/drag-and-drop-using-native-javascript-01
// to create a drag-and-drop effect.

//Focused card
let currentCard = null;

//Keeps track of the current offset
let mouseOffset = {x: 0, y: 0};

//Keeps track of click-state
let isMouseDown = false;

test();

/**
 * When holding a card over snapcard, snap changes appearance by appending "over" as suffix to snap
 */
setInterval(() => {
    let snaps = document.getElementsByClassName("snap");
    for (let i = 0; i < snaps.length; i++) {
        snaps[i].className = snaps[i].className.replace("over", "");
        if (currentCard != null) {

            if (isAnyElementsColliding(currentCard, snaps[i])) {
                snaps[i].className += " over";

                if (!isMouseDown) {

                    snapCurrentCardToGrid(currentCard, snaps[i]);
                }
            }
        }
    }
}, 50);

/**
 * Setup for testing creates number of cards.
 * If this was a prototype we would save the state of the boards by using some file format and writing to disk.
 */
function test() {

    snapGridSize = 6;
    columns = 4;

    setupSnapGrid(snapGridSize);

    let card1 = createCard("Turn ourselves into pickles", users[0].username);
    snapCardToColumnAndGridAtIndex(card1, 0, 0, snapGridSize);

    let card2 = createCard("Figure out the meaning of life", users[1].username, document.getElementById("doing-container"));
    snapCardToColumnAndGridAtIndex(card2, 0, 1, snapGridSize);

    let card3 = createCard("Run nuclear reactor test", users[2].username);
    snapCardToColumnAndGridAtIndex(card3, 0, 2, snapGridSize);


    setupCreateCard();
}

/**
 * Snaps the card to column- and grid index.
 * @param card to be snapped
 * @param columnIndex index of given column
 * @param index of row at at columnIndex
 * @param snapGridSize number of snap fields in column
 */
function snapCardToColumnAndGridAtIndex(card, columnIndex, index, snapGridSize) {
    allSnaps = document.getElementsByClassName("snap");
    snapIndex = (snapGridSize * columnIndex + index);
    snap = allSnaps[snapIndex];
    snapCardToGrid(card, snap);
}

/**
 * Creates a new card
 * @param content sets text inside of card
 * @param username the username to set on the card.
 * @param container the card will be added to
 * @returns {HTMLDivElement} a new card (div)
 */
function createCard(content, username, container = document.getElementById("todo-container")) {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = content + '<br>' + username;
    addEventListenersToCard(card);
    container.appendChild(card);
    return card;
}

/**
 * Adds eventlisteners to card
 * @param card the card to add eventlisteners to
 */
function addEventListenersToCard(card) {

    card.addEventListener("mousedown", (e) => {
        onMouseDown(e, card);
    });

    document.body.addEventListener("mousemove", (e) => {
        onMouseMove(e, card);
    });

    document.body.addEventListener("mouseup", (e) => {
        onMouseUp(e, card);
    });
}

/**
 * Creates snap elements in grid, for cards to snap into
 * @param gridsize number of rows in snapgrid
 */
function setupSnapGrid(gridsize) {
    let cardsContainers = document.getElementsByClassName("base-container");
    for (let i = 0; i < cardsContainers.length; i++) {
        for (let j = 0; j < gridsize; j++) {
            let snap = document.createElement("div");
            snap.className = "snap";
            cardsContainers[i].appendChild(snap);
        }
    }
}

/**
 * Checks if cards collide
 * @param element1 first card
 * @param element2 second card
 * @returns {boolean} true if elements are colliding
 */
function isAnyElementsColliding(element1, element2) {
    element1.offsetBottom = element1.offsetTop + element1.offsetHeight;
    element1.offsetRight = element1.offsetLeft + element1.offsetWidth;
    element2.offsetBottom = element2.offsetTop + element2.offsetHeight;

    element2.offsetRight = element2.offsetLeft + element2.offsetWidth;
    return !(
        (element1.offsetBottom < element2.offsetTop) ||
        (element1.offsetTop > element2.offsetBottom) ||
        (element1.offsetRight < element2.offsetLeft) ||
        (element1.offsetLeft > element2.offsetRight)
    );
}

/**
 * snaps card in place in grid
 * @param card to snap
 * @param container card snaps into
 */
function snapCardToGrid(card, container) {
    let box = container.getBoundingClientRect();
    card.style.left = box.x + "px";
    card.style.top = box.y - 10 + "px";
}

/**
 * Checks
 * @param card
 * @param container
 */
function snapCurrentCardToGrid(card, container) {
    if (currentCard != null) {
        let box = container.getBoundingClientRect();
        currentCard.style.left = box.x + "px";
        currentCard.style.top = box.y - 10 + "px";
    }
}

/**
 * Action for when a card is clicked
 * @param e
 * @param card
 */
function onMouseDown(e, card) {
    isMouseDown = true;
    currentCard = card;

    mouseOffset = {
        x: card.offsetLeft - e.clientX,
        y: card.offsetTop - e.clientY
    };

    card.style.backgroundColor = "#92C2CD";
}

/**
 * Action for when mouse is moved
 * @param e the event in question
 * @param card the card that is currently being clicked
 */
function onMouseMove(e, card) {
    if (currentCard != null) {
        e.preventDefault();
        if (isMouseDown) {
            currentCard.style.left = e.clientX + mouseOffset.x + "px";
            currentCard.style.top = e.clientY + mouseOffset.y + "px";
        }
    }
}


/**
 * Action for when mousebutton is released
 * @param e the event in question
 * @param card the card that is currently being clicked
 */
function onMouseUp(e, card) {
    isMouseDown = false;

    if (currentCard != null) {
        mouseOffset = {
            x: currentCard.offsetLeft - e.clientX,
            y: currentCard.offsetTop - e.clientY
        };

        currentCard.style.backgroundColor = "#DEBDD7";
    }
}

function refreshUserDropDown() {
    let dropdown = document.getElementById("dropdown-user");

    dropdown.innerHTML = '';

    for (let i = 0; i < window.users.length; i++) {
        let user = users[i];
        let dropDownUserElement = document.createElement("option");
        dropDownUserElement.innerHTML = user.username;
        dropdown.appendChild(dropDownUserElement);
    }
}

function setupCreateCard() {

    let dropdown = document.getElementById("dropdown-user");

    for (let i = 0; i < window.users.length; i++) {
        let user = users[i];
        let dropDownUserElement = document.createElement("option");
        dropDownUserElement.innerHTML = user.username;
        dropdown.appendChild(dropDownUserElement);
    }

    let button = document.getElementById("button-create-card");
    button.addEventListener("click", () => {
        onAddNewCardClicked();
    });
}

function onAddNewCardClicked() {
    let dropdownElement = document.getElementById("dropdown-user");
    let username = dropdownElement.options[dropdownElement.selectedIndex].value;
    let content = document.getElementById("textbox-card-content").value;
    let newCard = createCard(content, username);
    snapCardToColumnAndGridAtIndex(newCard, 0, 5, snapGridSize);
}



