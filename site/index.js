(async () => {
    const js = await import('@d_ttang/hello-wasm/hello_wasm');
    console.log(js);
    js.greet("WebAssembly");
})()
console.log('index');
// import { greet } from '@d_ttang/hello-wasm/hello_wasm';


// greet('ss')

