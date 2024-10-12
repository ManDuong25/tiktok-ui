/* config-overrides.js */

// Cú pháp này gọi là common js
const { override, useBabelRc } = require("customize-cra");


// module.exports = export default của ES6
module.exports = override(
    useBabelRc()
);