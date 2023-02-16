fetch('https://catfact.ninja/fact')
.then(response => response.json())
.then(data => {
    const parsedData = JSON.parse(JSON.stringify(data));
    const div = document.getElementById("catFacto");
  for (const key in parsedData) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${key}:</strong> ${parsedData[key]}`;
    div.appendChild(p);
  }

})
.then(cat => {
console.log(cat.fact);
});
try {
    
} catch (error) {
  
}(error => console.error(error));