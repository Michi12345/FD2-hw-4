'use strict';

function _async(generatorFunction) {
    return function (...args) {
        return new Promise(resolve => {
            let generator = generatorFunction(...args);
            let result;
            do {
                result = generator.next();
            } while (!result.done);
            resolve(result.value);
        })
    }
}