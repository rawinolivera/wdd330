const links = [
    {
        label: "L01 notes",
        url: "lesson01/index.html"
    },
    {
        label: "L02 notes",
        url: "lesson02/index.html"
    },
    {
        label: "L03 notes",
        url: "lesson03/index.html"
    },
    {
        label: "L04 notes",
        url: "lesson04/index.html"
    },
    {
        label: "L05 notes",
        url: "lesson05/index.html"
    },
    {
        label: "L06 notes",
        url: "lesson06/index.html"
    },
    {
        label: "L07 notes",
        url: "lesson07/index.html"
    },
    {
        label: "L08 notes",
        url: "lesson08/index.html"
    },
    {
        label: "L09 notes",
        url: "lesson09/index.html"
    }
]

let olist = document.querySelector("ol");
links.forEach(displayLinks);

function displayLinks (link) {
    let list = document.createElement('li');
    let a = document.createElement('a');

    a.textContent = `${link.label}`;
    a.href = `${link.url}`;
    
    list.appendChild(a); 
    olist.appendChild(list);
    
}