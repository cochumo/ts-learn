// String
const str: string = "文字列です"

// Number
const num: number = 1

// Boolean
const bool: boolean = true

// Any
const any: any = "なんでも入るよ"

// Void
const func = (target: string, length: number): void => {
    console.log(target);
    console.log(length);
    console.log('func');
}

// Array
const strAry: string[] = ["a", "b", "c"]
const numAry: number[] = [0, 1, 2]

// Object
interface ObjInterface {
	a: string,
	b: number,
	c: boolean,
	d: number[]
	e: {
		a: string
	}
}
const object: ObjInterface = {
	a: "str",
	b: 1,
	c: true,
	d: [0, 1, 2],
	e: {
		a: "hoge"
	}
}

// Nullable
interface NullInterface {
	a: number | null
}
const nullable: NullInterface = {
	a: null
}

// Undefined
interface UndefinedInterface {
	a: number,
	b?: number
}
const undef :UndefinedInterface = {
	a: 1,
	b: undefined
}

