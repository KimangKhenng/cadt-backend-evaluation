// server.js 
import { createServer } from 'http'; 
const server = createServer((req, res) => { 
res.write('Hello, World!'); 
// return res.endd(); 
return res.end(); 
}); 
server.listen(3000, () => { 
console.log('Server running on http://localhost:3000'); 
});