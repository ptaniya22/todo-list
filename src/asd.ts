export let value: number[] = [1,2,3,];

export let value2: Array<number> = [5,10,15]

// tuple - кортеж

let tuple: [string, boolean, number] = ['text', true, 2]

// type - в основном для описания примитивов

type Tuple = [string, number, boolean]

let tuple2: Tuple = ['hi', 20, true]




type Qwerty = number | boolean | string[]

let data: Qwerty = ['dsa','dasdsa']


type User = {
    id: number,
    name: string,
    age: number,
    salary?: number | string,
    city: string
}


type Developer = {
    skills: string[]
    lvl: string
}

type DevAndUser = Developer & User 


let zafar: DevAndUser = {
    skills: ['html','css'],
    lvl: 'middle',
    name: 'Zafar',
    age: 24,
    id: 2,
    city: 'easdasd'
}


// interface - они используются для описания массива и объекта

// interface IProduct {
//     id: number
//     price: number | string
//     title: string
//     info: () => void
// }

// let array: IProduct[] = []

// const apple: IProduct = {
//     id: 100,
//     price: '1000$',
//     title: 'Good',
//     info() {
//         alert('dasdsa')
//     }
// }



// generics - это универсальный тип данных

function gen<T>(value: T): T[] {
    return [value]
}

gen<number>(10)
gen<string>('html')
gen<boolean>(true)