// import './subPageA'
// import './subPageB'
// import * as _ from 'lodash'
require.include('./module.js')
var page = 'subPageA'
var subPageA
if(page === 'subPageA') {
    require.ensure([], function() {
        subPageA = require('./subPageA')
        console.log(subPageA)
    }, 'subPageA')
}else {
    require.ensure([], function() {
        var subPageB = require('./subPageB')
    }, 'subPageB')
}
console.log(subPageA)

export default 'pageA'