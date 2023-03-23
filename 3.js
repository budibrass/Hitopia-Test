function checkBrackets (array) {
    let data = [];
 
    for(let i = 0; i < array.length; i++)
    {
        let x = array[i];
 
        if (x == '(' || x == '[' || x == '{')
        {
            data.push(x);
            continue;
        }
 
        if (data.length == 0) {
            console.log(`NO`);
            return false;
        }
             
        let check;
        switch (x){
        case ')':
            check = data.pop();
            if (check == '{' || check == '[') {
                console.log(`NO`);
                return false;
            }
            break;
 
        case '}':
            check = data.pop();
            if (check == '(' || check == '[') {
                console.log(`NO`);
                return false;
            }
            break;
 
        case ']':
            check = data.pop();
            if (check == '(' || check == '{') {
                console.log(`NO`);
                return false;
            }
            break;
        }
    }
 
    // Check Empty data
    if(data.length === 0) {
        console.log("YES");
    }
};

checkBrackets("{[()]}");