import gulp from 'gulp'
import watcher from './config/tasks/lib/watcher'

import {browserify, vendor} from './config/tasks/browserify'
gulp.task('clean', require('./config/tasks/clean'))
gulp.task('sass', require('./config/tasks/scss'))
gulp.task('component', require('./config/tasks/component'))
gulp.task('image', require('./config/tasks/image'))
gulp.task('browserify', browserify)
gulp.task('vendor', vendor)

let buildTasks = ['browserify', 'vendor', 'component', 'sass', 'image']

gulp.task('watch', ['clean'], () => {
  watcher.watch()
  gulp.start(buildTasks)
})

gulp.task('build', ['clean'], () => {
  gulp.start(buildTasks)
});

gulp.task('default', ['watch', 'build'])
