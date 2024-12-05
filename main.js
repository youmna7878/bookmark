var siteNameInput = document.getElementById('siteName')
var siteUrlInput = document.getElementById('siteUrl')
var box = document.getElementById('boxContent')
var deleteBox = document.getElementById('xMarkBtn')
tableContainer = [];

if (localStorage.getItem('bookmarks' !== null)) {
    tableContainer = JSON.parse(localStorage.getItem('bookmarks'));
    displayData();

}
function addData() {
    if (siteNameInput.value == "") {
        box.classList.remove('d-none')
    }
    else if (siteUrlInput.value == "") {
        box.classList.remove('d-none')

    }
    else {
        bookmark = {
            Name: siteNameInput.value,
            link: siteUrlInput.value,
        }
        tableContainer.push(bookmark)
        localStorage.setItem('bookmarks', JSON.stringify(tableContainer))
        clearData()
        displayData()
    }
}

function clearData() {
    siteNameInput.value = null
    siteUrlInput.value = null
}

function displayData() {
    var container = ""
    for (var i = 0; i < tableContainer.length; i++) {
        container += `<tr>
                        <td>${i}</td>
                        <td>${tableContainer[i].Name}</td>
                        <td ><button class="btn  visit"><span><i
                                        class="fa-solid fa-eye pe-2" onclick="visitBtn()" ></i></span>visit</button></td>
                        <td ><button class="btn  btn-danger" onclick=" deleteData(${i})"><span><i
                                        class="fa-solid fa-trash-can pe-2"></i></span>Delete</button></td>
                    </tr> `
    }
    document.getElementById('tableContent').innerHTML = container
}

function deleteData(deletedData) {
    tableContainer.splice(deletedData, 1)
    displayData()
    localStorage.setItem('bookmarks', JSON.stringify(tableContainer));
}
function validateNameInput() {
    var regex = /^\w{3}/
    if (regex.test(siteNameInput.value) == true) {
        siteNameInput.classList.add('is-valid')
        siteNameInput.classList.remove('is-invalid')
        return true
    }
    else {
        siteNameInput.classList.add('is-invalid')
        siteNameInput.classList.remove('is-valid')
        return false

    }
}
function validateUrlInput() {
    var regex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/
    if (regex.test(siteUrlInput.value) == true) {
        siteUrlInput.classList.add('is-valid')
        siteUrlInput.classList.remove('is-invalid')


        return true
    }
    else {
        siteUrlInput.classList.add('is-invalid')
        siteUrlInput.classList.remove('is-valid')

        return false

    }
}
function deleteTheBox() {
    box.classList.add('d-none')

}
function visitBtn() {
    window.open(siteUrlInput.value, )

}
