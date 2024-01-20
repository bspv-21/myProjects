let todo = [];

let req = prompt("Please Enter your request");

while(true)
{
    if(req == "quit"){
        console.log("quitting the app!");
        break;
    }

    if(req == "list"){
        console.log("------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("------------");
    } 
    else if(req == "add"){
        let task = prompt("Enter the task that you wanted to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete"){
        let idx = prompt("Enter the task's index");
        todo.splice(idx, 1);
        console.log("task deleted");
    }
    else{
        console.log("Wrong request!");
        let msg = "Please Enter a valid request";
        alert(msg);
    }
    req = prompt("Please Enter your request");
}