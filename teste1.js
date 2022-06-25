let a = 'oii'
let b = 'oie'

Deno.test("Teste oii", () => {
    if (a != "oii") {
        throw new Error(`${a} não é oii`);
    }
})

Deno.test("Não pode ser oii", () => {
    if (b == "oii") {
        throw new Error(`${a}  é oii`);
    }
})
