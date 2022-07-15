const address = document.getElementById("address")
const address1 = document.getElementById("address1")
const address2 = document.getElementById("address2")
const address3 = document.getElementById("address3")
const address4 = document.getElementById("address4")
const myInput = document.getElementById("myInput")
const myTable = document.getElementById("myTable")

address.onclick = function(){
    if(address.innerHTML) alert("Osoyishta Street N60")
}
address1.onclick = function(){
    if(address.innerHTML) alert("Niyyat Street N22")
}
address2.onclick = function(){
    if(address.innerHTML) alert("Olmazor street N45")
}
address3.onclick = function(){
    if(address.innerHTML) alert("Olmazor1 street N45")
}
address4.onclick = function(){
    if(address.innerHTML) alert("Saxovat street N45")
}

function myFunction(){
    let input,filter,table,tr,td,i,txtValue;
    input = myInput;
    filter = input.value.toUpperCase();
    table = myTable;
    tr = table.getElementsByTagName("tr");
    for(i = 0; i < tr.length; i++){
        td= tr[i].getElementsByTagName("td")[0];
        if(td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none"
            }
        }
    }
}