window.onload = function() {
    async function test () {
        const text = document.getElementById("text");
        try{
            let response = await fetch("http://localhost:8080/")
            
            if(response.ok) {
            let messeage = await response.json()
            text.innerText = messeage.data
            }
        } catch (err) {
            console.log(err)
        }
    }
    test()
}