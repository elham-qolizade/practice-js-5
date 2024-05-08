

let names = [];

let showFormBtn = document.createElement("button");
showFormBtn.innerText = "فرم را نمایش بده";
showFormBtn.addEventListener("click", function () {
    let formDiv = document.createElement("div");

    let form = document.createElement("form");
    let fullNameInput = document.createElement("input");
    fullNameInput.setAttribute("type", "text");
    fullNameInput.setAttribute("name", "FullName");
    fullNameInput.setAttribute("placeholder", "Full Name");

    let passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("name", "password");
    passwordInput.setAttribute("placeholder", "Password");

    let submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "button");
    submitBtn.setAttribute("value", "button");

    form.appendChild(fullNameInput);
    form.appendChild(passwordInput);
    form.appendChild(submitBtn);

    formDiv.appendChild(form);

    document.body.appendChild(formDiv);

    submitBtn.addEventListener("click", function () {
        let fullNameValue = fullNameInput.value;
        let passwordValue = passwordInput.value;

        let fullNameParagraph = document.createElement("p");
        fullNameParagraph.innerText = "Full Name: " + fullNameValue;
        formDiv.appendChild(fullNameParagraph);

        let passwordParagraph = document.createElement("p");
        passwordParagraph.innerText = "Password: " + passwordValue;
        formDiv.appendChild(passwordParagraph);

        names.push(fullNameValue);

        fullNameInput.value = "";
        passwordInput.value = "";
    });

    let searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "نام را وارد کنید");

    let searchButton = document.createElement("button");
    searchButton.innerText = "جستجو";

    searchButton.addEventListener("click", function () {
        let searchValue = searchInput.value;
        searchFullName(searchValue);
    });

    document.body.appendChild(searchInput);
    document.body.appendChild(searchButton);

    document.body.appendChild(form);
});

document.body.appendChild(showFormBtn);

function searchFullName(fullName) {
    let searchResults = names.filter(function (name) {
        return name.includes(fullName);
    });

    let searchResultsDiv = document.createElement("div");
    searchResultsDiv.innerHTML = "<h3>نتایج جستجو:</h3>";

    if (searchResults.length === 0) {
        searchResultsDiv.innerHTML += "<p>نتیجه‌ای یافت نشد.</p>";
    } else {
        let resultList = document.createElement("ul");
        searchResults.forEach(function (result) {
            let listItem = document.createElement("li");
            listItem.innerText = result;
            resultList.appendChild(listItem);
        });
        searchResultsDiv.appendChild(resultList);
    }

    document.body.appendChild(searchResultsDiv);
}