document.addEventListener("DOMContentLoaded", function(event) {
  if (localStorage.getItem('Classic') === 'on') {
    document.body.style.backgroundColor = "#015611";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty('--bg-c', "#015611");
    document.getElementById("Themes").value = "Classic";
  } else if (localStorage.getItem('Ocean') === 'on') {
    document.body.style.backgroundColor = "#015611";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty('--bg-c', "#015611");
    document.getElementById("Themes").value = "Ocean";
  } else if (localStorage.getItem('Midnight') === 'on') {
    document.body.style.backgroundColor = "#015611";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty('--bg-c', "#000");
    document.getElementById("Themes").value = "Midnight";
   } else if (localStorage.getItem('Light') === 'on') {
    document.body.style.backgroundColor = "#015611";
    document.body.style.color = "#000";
    document.body.style.setProperty('--bg-c', "#fff");
    document.getElementById("Themes").value = "Light";
  }
});
