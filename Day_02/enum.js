var abc;
(function (abc) {
    abc[abc["a"] = 0] = "a";
    abc[abc["b"] = 5] = "b";
    abc[abc["c"] = 6] = "c";
    abc[abc["d"] = 50] = "d";
})(abc || (abc = {}));
console.log(abc.a, abc.b, abc.c, abc.d);
