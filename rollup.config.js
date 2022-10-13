
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve, { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import { terser } from 'rollup-plugin-terser';

const projectSrcDir = path.resolve(__dirname,);
const aliasPath = (dir) => path.resolve(projectSrcDir, `app/${dir}`);


export function pathAlias() {
    return alias({
        entries: [
            {
                find: '@controller',
                replacement: aliasPath('controller'),
            },
            {
                find: '@helper',
                replacement: aliasPath('helper'),
            },
            {
                find: '@model',
                replacement: aliasPath('model'),
            },
            {
                find: '@service',
                replacement: aliasPath('service'),
            }
        ]
    });
}

export default {
    input: 'app/index.ts',
    output: {
        sourcemap: true,
        format: 'cjs',
        file: 'dist/index.js',
    },
    external: [
        'aws-sdk',
    ],
    plugins: [
        nodeResolve({
            exportConditions: ['node'],
            preferBuiltins: false,
        }),
        pathAlias(),
        resolve(),
        commonjs(),
        typescript(),
        terser({
            format: {
                comments: false
            }
        }),
        json()
    ]
}
