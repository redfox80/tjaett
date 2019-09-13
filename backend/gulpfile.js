const gulp = require("gulp");
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const spawn = require('child_process').spawn;
let node;

gulp.task('watch', function() {

    //Start server
    server();

    //Compile js and restart server if file change occurs
    gulp.watch('./src', gulp.series(['compile', 'server']));

});

//Make server task?
gulp.task('server', () => {
    server();
});

//Start or restart the server
function server() {
    
    if(node) node.kill();



    node = spawn('node', ['./dist/main.js'], {stdio: 'inherit'});

    node.on('close', (code) => {
        if(code === 8) {
            gulp.log('Error detected, waiting for changes');
        }
    });

}

//Compile js
gulp.task("compile", function () {

    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));

});