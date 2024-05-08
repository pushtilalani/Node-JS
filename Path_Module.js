var path =require("path")

console.log(path.dirname("C:\Users\LJENG\Desktop\FSD-II\A5-173\Node JS\Path_Module.js"))

console.log(path.extname("C:\Users\LJENG\Desktop\FSD-II\A5-173\Node JS\Path_Module.js"))

console.log(path.basename("C:\Users\LJENG\Desktop\FSD-II\A5-173\Node JS\Path_Module.js"))

console.log(path.parse("C:\Users\LJENG\Desktop\FSD-II\A5-173\Node JS\Path_Module.js"))

var  p  =  path.parse("C:\Users\LJENG\Desktop\FSD-II\A5-173\Node JS\Path_Module.js")

console.log(p.root)
console.log(p.dir)
console.log(p.base)
console.log(p.ext)
console.log(p.name)

// output

// PS C:\Users\LJENG\Desktop\FSD-II\A5-173\Node JS> node Path_Module.js
// C:
// .js
// UsersLJENGDesktopFSD-IIA5-173Node JSPath_Module.js
// PS C:\Users\LJENG\Desktop\FSD-II\A5-173\Node JS> node Path_Module.js
// C:
// .js
// UsersLJENGDesktopFSD-IIA5-173Node JSPath_Module.js
// {
//   root: 'C:',
//   dir: 'C:',
//   base: 'UsersLJENGDesktopFSD-IIA5-173Node JSPath_Module.js',
//   ext: '.js',
//   name: 'UsersLJENGDesktopFSD-IIA5-173Node JSPath_Module'
// }