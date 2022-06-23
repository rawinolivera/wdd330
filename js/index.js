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
        label: "Comming soon...",
        url: "https://rawinolivera.github.io/wdd330/"
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