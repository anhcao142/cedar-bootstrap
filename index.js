var sass = require('node-sass');
var fs = require('fs');

sass.render({
    file: './sass/cedar-bootstrap.scss',
    success: function (result) {
        fs.writeFile('./css/cedar-bootstrap.css', result.css, function (err) {
            if (err) {
                console.log(err);
                return;
            };

            console.log('success');
        })
    },
    error: function (error) {
        console.log(error.message);
        console.log(error.code);
        console.log(error.line);
        console.log(error.column); // new in v2
    }
});