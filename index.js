/**
 * Copyright (C) 2016 pentojs.xyz
 * read-transformer.js
 *
 * changelog
 * 2016-06-21[22:03:55]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.3.0
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
}

module.exports = ReadTransformer;