document.addEventListener("DOMContentLoaded", () => {
    if(document.cookie === "") {
        location.href = `http://127.0.0.1:5500/login/login.html`
    } else {
    const userId = $.cookie("sessionData").split(",")[0];
    const sessionId = $.cookie("sessionData").split(",")[1];
    checkId(userId, sessionId)
    }
})

async function checkId(userId, sessionId){
    const response = await fetch(`http://localhost:8080/login/check/${userId}/${sessionId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });
    if(!response.ok) {
        console.error(await response.json());
        location.href = `http://127.0.0.1:5500/login/login.html`
        console.log("error")
    } else {
        console.log("OK")
    }
}


  
