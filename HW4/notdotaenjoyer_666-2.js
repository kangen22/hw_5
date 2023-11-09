class Vector {
    constructor(components) {
        this.components = components;
    }

    checkDimensions(other) {
        if (this.components.length !== other.components.length) {
            throw new Error('Vectors have different lengths');
        }
    }

    equals(other) {
        if (this.components.length !== other.components.length) {
            return false;
        }
        return this.components.every((component, index) => component === other.components[index]);
    }


    add(other) {
        this.checkDimensions(other)
        let sum = this.components.map((a, i) => a + other.components[i]);
        return new Vector(sum);
    }

    subtract(other) {
        this.checkDimensions(other)
        let subtract = this.components.map((a, i) => a - other.components[i]);
        return new Vector(subtract);
    }

    dot(other) {
        this.checkDimensions(other);
        let dot = this.components.reduce((sum, component, i) => sum + component * other.components[i], 0);
        return dot;
    }
    norm() {
        return parseFloat(Math.sqrt(this.components.reduce((sum, current) => sum + current * current, 0,)));
    }

    toString() {
        return '(' + this.components.join(',') + ')';
    }
}


let a = new Vector([1, 2, 3]);
let b = new Vector([3, 4, 5]);

let vector3 = a.add(b);
let vector4= a.subtract(b)
let vector5 = a.dot(b)
let vector6 = a.toString()
let vector7 = a.norm()
console.log(vector3)
console.log(vector4)
console.log(vector5)
console.log(vector6)
console.log(vector7)