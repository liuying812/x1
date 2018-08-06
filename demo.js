var fs = require('fs')
var dirName = process.argv[2]
//判断参数是否存在
if(typeof(dirName) == 'undefined'){
	console.log('param is missing')
	process.exit(0)
}
//判断文件夹是否已经存在
fs.exists('./'+dirName , function(exists){
	if(exists){
		console.log(dirName + 'dir exists')
	}else{
		fs.mkdirSync('./'+dirName)

		process.chdir('./'+dirName)

		fs.mkdirSync('css')
		fs.mkdirSync('js')

		fs.writeFileSync('./index.html','<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>')
		fs.writeFileSync('./css/style.css','h1{color: red;}')
		fs.writeFileSync('./js/main.js',"var string = 'Hello World'\nalert(string)");

		process.exit(0)
	}
})