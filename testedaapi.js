import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let aluno = 'Bridget Calvert'
let professores = ['Rodrigo', 'Débora', 'Valéria', 'Soraya']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Bridget Calvert"); 
    assertStringIncludes(aluno, "Bridget");    
})
