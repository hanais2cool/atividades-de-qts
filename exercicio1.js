let nome = 'Karim Patton'
let nome2 = ['Lilian', 'Sofia', 'Mika', 'Denise']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(nome, "Karim"); 
    assertStringIncludes(nome, "Patton");    
})

Deno.test("Testando array apresentado pelo professor (API)", ()=> {
    assertArrayIncludes(professores, 
        ["Débora", "Valéria", "Rodrigo"],
        "Algo deu errado.");
})