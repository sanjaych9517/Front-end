console.log("Tassk started")

async function DataTransfer() {
    let responce = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log( await responce.json());
}


DataTransfer()

console.log("task completed")