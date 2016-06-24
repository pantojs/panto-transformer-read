/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-06-24[10:35:29]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const ReadTransformer = require('../');

describe('panto-transformer-read', () => {
    describe('#transform', () => {
        it('should get origin if content is not null/undefined', done => {
            const file = {
                filename: 'a.js',
                content: 'x'
            };
            new ReadTransformer().transform(file).then(tfile => {
                assert.deepEqual(tfile, file);
                done();
            }).catch(console.error.bind(console));
        });
        it('should get content', done => {
            const file = {
                filename: 'test.js'
            };
            panto.setOptions({
                cwd: __dirname
            });
            new ReadTransformer().transform(file).then(tfile => {
                assert.ok(!!tfile.content);
                done();
            }).catch(console.error.bind(console));
        });
    });
});