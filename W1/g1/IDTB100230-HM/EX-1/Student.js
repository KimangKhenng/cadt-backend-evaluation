
import { promises as fs} from 'fs'

const filePath = './hello.txt'

/**
 * write a message to a file asynchronously
 * then read and log the content.
 *
 * use fs.promises to perform asynchronous file operations.
 * log error if the operation fail.
 *
 * @async
 * @function run
 * @returns {Promise<void>} a promise that resolves when the file has been written and read.
 */

async function run() {
    try {
        await fs.writeFile(filePath, "Hello, Welcome to backend developement course")
        const content = await fs.readFile(filePath, 'utf8')
        console.log("File content: ", content)
    } catch (err) {
        console.log(err)
    }
}

run()