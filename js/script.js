function showRandom () {
    let inputId = Math.floor(Math.random() * 30) + 1;
    let url = "https://punapi.azurewebsites.net/api/Pun/" + inputId
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', url, true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status = 200) {
                result = JSON.parse(xhr.responseText);
                document.getElementById('idNumber').innerHTML = result.Id + ".";
                document.getElementById('question').innerHTML = result.Question;
                document.getElementById('answer').innerHTML = result.Answer;
            }
        }
    }
    
    xhr.send();
}

function showById (id) {
    let url = "https://punapi.azurewebsites.net/api/Pun/" + id
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', url, true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status = 200) {
                result = JSON.parse(xhr.responseText);
                document.getElementById('idNumber').innerHTML = result.Id + ".";
                document.getElementById('question').innerHTML = result.Question;
                document.getElementById('answer').innerHTML = result.Answer;
            }
        }
    }
    
    xhr.send();
}

document.getElementById('random').onclick = showRandom;
document.getElementById('button').onclick = function () {
    id = document.getElementById('GetById').value;
    showById(id);
};