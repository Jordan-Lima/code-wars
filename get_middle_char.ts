import { assertEquals } from "jsr:@std/assert"

const getMiddle = (s:string): string => {
    const len = s.length
    if(len % 2 === 0) {
        return s[len / 2 - 1] + s[s.length / 2]
    } else {
        return s[Math.floor(len / 2)]
    }
}

Deno.test({
    name: "Teste de caracter do meio",
    fn: () => {
        assertEquals(getMiddle("test"), "es")
    }
})
