let getRootProperty = (obj, target, rootKey = null) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let currentRootKey = rootKey !== null ? rootKey : key;
            if (Array.isArray(obj[key]) && obj[key].includes(target)) {
                return currentRootKey;  
            } else if (typeof obj[key] === 'object') {
                let result = getRootProperty(obj[key], target, currentRootKey);
                if (result !== null) {
                    return result;  
                }
            }
        }
    }
    return null; 
}

const object = {
    "one": {
        "nest1": {
            "val1": [9, 34 , 92, 100]
        }
    }, 
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
}

console.log(getRootProperty(object, 9));      
