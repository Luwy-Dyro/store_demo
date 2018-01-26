var Module = (function (window, undefined) {
    var modules = {};
    return {
        create: function (name, credit) {
            if (modules[name] === undefined) {
                modules[name] = {};
            }

            modules[name].credit = function () {
                return credit;
            }
        },
        append: function (name, module) {
            if (modules[name] === undefined) {
                throw 'Modulo de no existe';
            }

            for (var k in module) {
                modules[name][k] = module[k];
            }
        },
        get: function (name) {
            if (modules[name] === undefined) {
                throw 'Modulo no existe';
            }
            return modules[name];
        }
    }
})(window);

