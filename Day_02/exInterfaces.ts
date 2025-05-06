interface abcd {
    a: string,
    b: string,
    c: number,
    d: number
}

interface ef extends abcd {
    f :string,
}

const AB: ef = {
    a: "A",
    b: "B",
    c: 5,
    d: 10,
    f: "f"
}

console.log(AB)