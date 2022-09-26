const btnShow = document.querySelector('button');
const list_el = document.querySelector("tasks");

// check when button is clicked
btnShow.addEventListener('click', (e) => {
    e.preventDefault(); // stop page from refreshing
    const form_data = new FormData(document.querySelector("form"));
    
    console.log(list_el)
    console.log("form data: ");
    // pair is name and value
    for(let pair of form_data.entries()) 
    {
        console.log(pair);
        // create a new div element
        const newDiv = document.createElement("div");

        // and give it some content
        const newContent = document.createTextNode(pair[0]+ ' : '+ pair[1]);

        // add the text node to the newly created div
        newDiv.appendChild(newContent);

        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementById("tasks");
        document.body.insertBefore(newDiv, currentDiv);
    }
    
    return true;
});