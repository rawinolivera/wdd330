const links = [
    {
        label: "L01 notes - Week 01",
        url: "lesson01/index.html"
    },
    {
        label: "L02 notes - Week 01",
        url: "lesson02/index.html"
    },
    {
        label: "L03 notes - Week 02",
        url: "lesson03/index.html"
    },
    {
        label: "L04 notes - Week 02",
        url: "lesson04/index.html"
    },
    {
        label: "L05 notes - Week 03",
        url: "lesson05/index.html"
    },
    {
        label: "L06 notes - Week 03",
        url: "lesson06/index.html"
    },
    {
        label: "L07 notes - Week 04",
        url: "lesson07/index.html"
    },
    {
        label: "L08 notes - Week 04",
        url: "lesson08/index.html"
    },
    {
        label: "L09 notes - Week 05",
        url: "lesson09/index.html"
    },
    {
        label: "L10 notes - Week 05",
        url: "lesson10/index.html"
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