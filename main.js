function userid()
{
    Username = document.getElementById("input1").value;
    localStorage.setItem("username",Username);
    window.location = "main.html";
}