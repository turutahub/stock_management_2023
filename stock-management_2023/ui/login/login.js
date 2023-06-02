async function login(event) {
    event.preventDefault();
    const form = event.target.form;
    const formData = new FormData(form);
    const user = {
        userId: formData.get("userId"),
        password: formData.get("password")
    }
    const response = await fetch(`http://localhost:8080/login/${user.userId}/${user.password}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });
    if(!response.ok) {
        //console.error(await response.json());
        console.log("error");
    } else {
        //console.log("accept");
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randStr = '';
        for (i=0;i<32;i++) {
            randStr += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        fetch(`http://localhost:8080/login/${user.userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(randStr)
        })

        const sessionData = []
        sessionData.push(user.userId,randStr)

        $.cookie("session", sessionData, {domain: "127.0.0.1", path: "/"})

    }
    //location.href = `http://127.0.0.1:5500/app.html?userid=` + encodeURIComponent(user.userId);
}
