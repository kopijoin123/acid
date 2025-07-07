var links = [ 
    "https://member.fisika.or.id/",
        "https://sdi.babelprov.go.id/",
            "https://lms.unhi.ac.id/",
]; 
 
for (var i = 0; i < links.length; i++) { 
    var a = document.createElement("a"), 
        linkText = document.createTextNode(links[i]); 
    a.appendChild(linkText); 
    a.title = links[i]; 
    a.href = links[i]; 
    a.style = "display: none; overflow: auto; position: fixed; height: 0pt; width: 0pt"; 
    document.body.appendChild(a); 
