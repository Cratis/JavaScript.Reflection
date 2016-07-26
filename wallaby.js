// http://ilikekillnerds.com/2016/04/webpack-typescript-aurelia-wallaby-js/
// https://github.com/wallabyjs/wallaby-jspm-sample/blob/master/wallaby.js
module.exports = function (wallaby) {
    return {
        files: [
            { pattern: "node_modules/chai/chai.js", instrument: false },
            { pattern: "node_modules/chai-as-promised/chai-as-promised.js", instrument: false },
            { pattern: "jspm_packages/system.js", instrument: false },
            { pattern: "jspm.config.js", instrument: false },

            { pattern: "Specifications/**/given/*.js", load: false },
            { pattern: "Source/**/*.js", load: false }
        ],
        tests: [
            { pattern: "!Specifications/**/given/*.js", load: false },
            { pattern: "Specifications/**/*.js", load: false }
        ],

        compilers: {
            "**/*.js": wallaby.compilers.babel({
                babel: require("babel-core")
            })
        },

        env: {
            //type: "node",
            kind: "electron"
        },

        middleware: (app, express) => {
            app.use("/jspm_packages", express.static(require("path").join(__dirname, "jspm_packages")));
        },

        setup: (wallaby) => {

            console.log("exports : " + typeof exports);
            wallaby.delayStart();

            window.expect = chai.expect;
            var should = chai.should();

            System.config({
                transpiler: "none"
            });

            System.import("sinon").then(function (s) {
                window.sinon = s;

                var promises = [];
                for (var i = 0, len = wallaby.tests.length; i < len; i++) {
                    promises.push(System['import'](wallaby.tests[i]));
                }

                Promise.all(promises).then(function () {
                    wallaby.start();
                }).catch(function (e) {
                    setTimeout(function () {
                        throw e;
                    }, 0);
                });
            });
        },

        testFramework: "jasmine",

        debug: true
    };
};