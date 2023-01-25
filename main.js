window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = 'https://naveenresume.azurewebsites.net/api/HttpTrigger1?code=lepImb9vEWPvqemHKKvmWVq0dI4w-hZuA6D_n_Y-sToqAzFuyyl37w=='; 

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");

        count = response; document.getElementById('counter').innerText = count;
		
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}


