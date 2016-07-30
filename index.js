/**
 * Copyright (C) 2016 pentojs.xyz
 * read-transformer.js
 *
 * changelog
 * 2016-06-21[22:03:55]:revised
 * 2016-07-30[14:33:01]:isCacheable
 *
 * @author yanni4night@gmail.com
 * @version 0.3.2
 * @since 0.1.0
 */
'use strict';

const Transformer = require('panto-transformer');

class ReadTransformer extends Transformer {
    _transform(file) {
        const {
            filename,
            content
        } = file;
        // use cache if possible
        if (!panto.util.isNil(content)) {
            return Promise.resolve(file);
        } else {
            return panto.file.read(filename).then(content => {
                return panto.util.extend(file, {
                    content
                });
            });
        }
    }
    isCacheable() {
        return false;
    }
}

module.exports = ReadTransformer;