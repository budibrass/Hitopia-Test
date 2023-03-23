function Recursive (string) {
    let data = [];
    string.map((e) => {
        data.unshift(e)
    })
    console.log(data);
};

Recursive(["h","e","l","l","o"])