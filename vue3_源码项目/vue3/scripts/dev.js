import { parseArgs } from 'node:util';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import esbuild from 'esbuild';

const { values: { format }, positionals } = parseArgs({
    allowPositionals: true,
    options: {
        format: {
            type: 'string',
            short: 'f',
            default: 'esm',
        },
    },
});
// 创建 esm 的 __filename
const __filename = fileURLToPath(import.meta.url)
// 创建 esm 的 __dirname
const __dirname = dirname(__filename)

const target = positionals.length ? positionals[0] : 'vue'
const entry = resolve(__dirname, `../packages/${target}/src/index.ts`)
esbuild.context({
    entryPoints: [entry],//入口文件
    outfile: resolve(__dirname, `../packages/${target}/dist/${target}.${format}.js`),//输出的文件
    format,
    bundle: true,
    platform: format === 'cjs' ? 'node' : 'browser',//打包平台
    sourcemap: true,//开启sourcemap方便调试
}).then(ctx => ctx.watch())


console.log(__filename);
console.log(__dirname);
console.log(target);
console.log(entry);

