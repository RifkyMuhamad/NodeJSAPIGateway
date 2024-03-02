import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        "rules": {
            // harus menggunakan ;
            "semi": "error",
            // harus ada spasi di antara { }
            "object-curly-spacing": [ "error", "always" ],
            // jangan membuat variabel jika tidak diperlukan
            "no-unused-vars": "error",
            // harus menggunakan "" alih-alih ''
            "quotes": [ "error", "double" ],
            // jangan menggunakan console.log()
            "no-console": "error",
            // dalam satu baris harus 80 karakter saja
            "max-len": [ "error", { "code": 80 } ],
            // jangan ada double semi ;;
            "no-extra-semi": "error",
            // harus ada spasi di antara arrow function
            "arrow-spacing": [ "error", { "before": true, "after": true } ],
            // spasi tiap indentasi harus 4
            "indent": [ "error", 4 ],
            // jangan ada blok kode kosong
            "no-empty": "error",
            // jangan ada baris kosong berturut-turut lebih dari 2
            "no-multiple-empty-lines": [ "error", {
                "max": 2
            } ],
            // jangan ada perubahan tipe data implisit
            "no-implicit-coercion": "error",
            // jangan ada expressi yang tidak digunakan
            "no-unused-expressions": "error",
            // jangan ada campuran spasi dan tab pada indentasi
            "no-mixed-spaces-and-tabs": "error",
            // jangan ada return await dalam function async yang tidak perlu
            "no-return-await": "error",
            // jangan pake kata kunci var
            "no-var": "error",
            // jangan ada function kosong
            "no-empty-function": "error",
            // harus ada spasi di antara [ ]
            "array-bracket-spacing": [ "error", "always" ],
            // harus ada spasi sebelum () pada function
            "space-before-function-paren": [ "error", "always" ],
            // jangan membuat variabel dalam blok case
            "no-case-declarations": "error",
            // jangan membuat kode yang tidak akan dieksekusi
            "no-unreachable": "error",
            // harus ada spasi sebelum {}
            "space-before-blocks": [ "error", "always" ],
            // function async harus ada kata kunci await
            "require-await": "error",
            // harus ada spasi di antara operator infix
            "space-infix-ops": "error",
            // harus ada spasi di dalam { } pada string template
            "template-curly-spacing": [ "error", "always" ],
            // jangan ada komentar dengan tanda TODO, FIXME, XXX
            "no-warning-comments": [ "error", {
                "terms": [ "todo", "fixme", "xxx" ],
                "location": "start"
            } ]
        }
    }
];