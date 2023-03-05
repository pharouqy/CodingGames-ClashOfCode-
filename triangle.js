function triangle(X, c) {
    for (let i = 1; i <= X; i++) {
        console.log(" ".repeat(X-i) + c.repeat(2*i-1))
    }
}

triangle(3, "*");
triangle(8, "#");
triangle(15, "M");
