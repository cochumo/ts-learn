import * as fs from "fs"

interface Data {
	name: string,
	count: number
}

function total(data: Data[]) {
	let t = 0
	data.forEach(item => {
		console.log(item.count);

		t += item.count
	});
	return t
}

const content = fs.readFileSync('data.json')
const data: Data[] = JSON.parse(content.toString())
console.log(`total: ${total(data)}`);

