window.onload = function() {
    async function loadCats () {
        const displayCats = document.getElementById("cats-list") 
        try{
            let response = await fetch("http://localhost:8080/cats")
            
            if(response.ok) {
                let result = await response.json()
                
            result.data[0].forEach(cat => {
                console.log(cat)
                let catElement = document.createElement('div') 
                catElement.innerHTML = `
                    <h2>${cat.name}</h2>
                    <p>ID: ${cat.id}</p>
                    <p>Age: ${cat.age}</p>
                    <p>Breed: ${cat.breed}</p>
                ` 
                displayCats.appendChild(catElement) 
            }) 
            }
        } catch (err) {
            console.log(err)
        }
    }
    loadCats()
}