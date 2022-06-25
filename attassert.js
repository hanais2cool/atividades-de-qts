import {
    assertExists,
    assertMatch,
    assertNotMatch,
    assertNotEquals
} from "http://deno.land/std/testing/asserts.ts"

let quarto = ['Quarto 1','Quarto 2'];
let numero = [137, 34];
let hospedes = 0;
Deno.test("Teste de definação do assert", () => {
    assertExists(quarto, "Não foi encontrada a variavel quarto");
    assertExists(numero, "Não foi encontrada a variavel numero");
    assertExists(hospedes, "Não foi encontrada a variavel hospedes");
  })

Deno.test("Teste de não existencia", () => {
    assertNotEquals(quarto, "Quarto 2", "Erro: existe um Quarto 2");
    assertNotEquals(numero, 137, "Erro: existe uma numero 54");
    assertNotEquals(hospedes, 'hóspede1', "Erro: hóspede1 é existente ");
  });

  const Url = new RegExp("^https?://[a-z.]+.com$");

Deno.test("Teste de verificação ver.certo", () => {
    assertMatch("https://ibighit.com/", Url, "Erro: esse url não é o correto");
    assertMatch("http://thence.co.kr/", Url), "Erro: esse url não é o correto";
  });

Deno.test("Teste de verificação ver.errado", () => {
    assertNotMatch("https://www.somehowcom.com.br/", Url, "Erro: essa url é a correta");
  });
