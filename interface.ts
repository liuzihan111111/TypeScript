/**
 * 接口
 */

// 普通示例
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}

let myObj = { size: 10, label: 'Hello word!!!' }

printLabel(myObj)


/***
 * 可选属性
 *
 */

interface squareConfig {
    color?: string;
    width?: number
}

function createSquare(config: squareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }

    return newSquare
}

let mySquare = createSquare({ color: "black" })


/**
 * 只读属性
 */

interface Point {
    readonly x: number;
    readonly y: number
}

let p1: Point = { x: 10, y: 20 }

// ReadonlyArray
let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a;
//ro[0] = 12; //error
//ro.push(5);   //error
//ro.length = 100   //error
//a = ro   //error

//可以使用类型断言重写
a = ro as number[];