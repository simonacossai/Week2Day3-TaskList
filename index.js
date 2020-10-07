  /* EXERCISE 5: 
                Add a new task to the list.
                Suggestion:
                - Use document.getElementById to get the UL item and the input text
                - Use the document.createElement to create the new List Item
                - Append the child to the UL
            */
const addNewTask=()=>{
    let inputValue = document.getElementById('newTask');
    let ulElement = document.getElementById('myTaskList');
    
    let newItem = document.createElement('li');
    newItem.innerText = inputValue.value;
    ulElement.appendChild(newItem);
    inputValue.value= "";
}

      /* EXERCISE 6: 
                Create a method "removeLast" which removes the last item from the task list
            */
    const removeLast=()=>{
        let tasks= document.querySelectorAll('li');
        
            tasks[tasks.length-1].remove();     
    }

      /* EXERCISE 7: 
                Create a method "removeFirst" which removes the first item from the task list
            */
           const removeFirst=()=>{
            let tasks= document.querySelectorAll('li');
                tasks[0].remove();     
        }
    

      /* EXERCISE 8: 
               Create a method "getTasksAsArray" which returns (and print to the console) an array containing the tasks as string
            */
    const getTasksAsArray=()=>{
        let tasks= document.querySelectorAll('li');
        for(let i=0; i<tasks.length; i++){
            console.log(tasks[i].innerText);
        }
    }


      /* EXERCISE 9:
               Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an 
               onchange event listener ad applies it as background to every list item
            */

      /* EXTRA */

      /* EXERCISE 10: 
               Create a method "bubbleSort()" which sort the task list alphabetically using the bubble sort algorithm
            
               Use your spare time to beautify your task list with CSS.
               Suggestion:
               - Break the code into many function for semplicity 
               - Reuse the functions previously created
            */