var abc;
(function (abc) {
    abc[abc["e"] = 0] = "e";
    abc["f"] = "f";
    abc["g"] = "u";
    abc["h"] = "k";
})(abc || (abc = {}));
console.log(abc.e, abc.f, abc.g, abc.h);
