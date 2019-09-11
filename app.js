var newListHtml = "<table class=\"col-lg-2 col-sm-12\"> <tr> <th>New List</th> </tr>  <tr> <td><a href=\"#\" class=\"newItemAdder\">Add new Item</a></td> </tr> </table>"
var newCardForm = "<tr class=\"card card-form\"> <td><input type=\"text\" class=\"form-control\"><button class=\"btn btn-md btn-success\">Insert</button></td> </tr>";
function newItemFunction(elem){
    elem.parentElement.parentElement.insertAdjacentHTML("beforebegin",newCardForm);
    var card = document.querySelector(".card-form");
    var insertButton = document.querySelector(".btn-success");
    
function newCard(){
    var input = document.querySelector(".form-control").value;
    card.outerHTML = "<tr class=\"card\"><td>"+input+"</td> </tr>";
}

    insertButton.addEventListener("click",function(){
        newCard();
    });


    document.querySelector(".form-control").addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { 
          newCard();
        }
    });
}

function titlesHandler(){

    var titles = document.getElementsByTagName("th");
    titles[titles.length-1].addEventListener("click",function(){
        console.log(titles.length);
        var name = prompt("Enter name for the list");
        this.innerText = name;
    });
}

titlesHandler();
var addNewItembtn = document.querySelectorAll(".newItemAdder");
addNewItembtn[addNewItembtn.length-1].addEventListener("click",function(){
    newItemFunction(addNewItembtn[addNewItembtn.length-1]);
});


function stickHandlerToButton() {
    var addNewListButton = document.querySelector(".btn-list-adder");
    addNewListButton.addEventListener("click", function () {
            addNewListButton.parentElement.parentElement.parentElement.parentElement.insertAdjacentHTML("beforebegin",newListHtml);
            var index = document.querySelectorAll(".newItemAdder").length;
            document.querySelectorAll(".newItemAdder")[index-1].addEventListener("click",function(){
                newItemFunction(document.querySelectorAll(".newItemAdder")[index-1]);
                
            });
            titlesHandler();

        });

    
}

stickHandlerToButton();

