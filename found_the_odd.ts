import { assertEquals } from "jsr:@std/assert" 

const findOdd = (numeros: number[]): number | undefined => {
    const contagem: {[chave: number]: number } = {}
    for (const numero of numeros) contagem[numero] = (contagem[numero] || 0) + 1
    for (const numero in contagem) if (contagem[numero] % 2 !== 0) return Number(numero)
}

Deno.test({
    name: "Encontrar o impar de repetição",
    fn() {
        assertEquals(findOdd([1, 2, 2]), 1)
        assertEquals(findOdd([2, 2, 3, 4, 4]), 3)
    }
})
