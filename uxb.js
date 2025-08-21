const uxb = {
  ale: function (value) {
    alert(value);
  },
  conlog: function (value) {
    console.log(value);
  },
  locset: function (key, value) {
    localStorage.setItem(key, value);
  },
  locget: function (key) {
    return localStorage.getItem(key);
  },
  locrem: function (key) {
    localStorage.removeItem(key);
  },
  loccle: function () {
    localStorage.clear();
  },
  locof: function () {
    let locofa = "", locofb = "", locofc = "";
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const val = localStorage.getItem(key);
      locofa += key + "," + val;
      locofb += key + "," + val + "\n";
      locofc += key + "," + val + "<br>";
    }
    return { locofa, locofb, locofc };
  },
  write: function (value) {
    document.write(value);
  },
  prom: function (value) {
    return window.prompt(value);
  },
  goTo: function (value) {
    window.location.href = value;
  },
  lockey: function (number) {
    return localStorage.key(number);
  },
  mapzh: new Map([
    ["A", 0], ["B", 1], ["C", 2], ["D", 3], ["E", 4], ["F", 5], ["G", 6], ["H", 7], ["I", 8],
    ["J", 9], ["K", 10], ["L", 11], ["M", 12], ["N", 13], ["O", 14], ["P", 15], ["Q", 16],
    ["R", 17], ["S", 18], ["T", 19], ["U", 20], ["V", 21], ["W", 22], ["X", 23], ["Y", 24],
    ["Z", 25], ["a", 26], ["b", 27], ["c", 28], ["d", 29], ["e", 30], ["f", 31], ["g", 32],
    ["h", 33], ["i", 34], ["j", 35], ["k", 36], ["l", 37], ["m", 38], ["n", 39], ["o", 40],
    ["p", 41], ["q", 42], ["r", 43], ["s", 44], ["t", 45], ["u", 46], ["v", 47], ["w", 48],
    ["x", 49], ["y", 50], ["z", 51], ["0", 52], ["1", 53], ["2", 54], ["3", 55], ["4", 56],
    ["5", 57], ["6", 58], ["7", 59], ["8", 60], ["9", 61], ["+", 62], ["/", 63]
  ]),
  jza: function (value) {
    const mapzh = this.mapzh;
    let fhmap = [], szshi = 0, bsbs = 0;
    for (const ch of value) {
      if (!mapzh.has(ch)) return "NaN";
      fhmap.push(mapzh.get(ch) * (64 ** (value.length - 1 - bsbs)));
      bsbs++;
    }
    szshi = fhmap.reduce((a, b) => a + b, 0);
    if (szshi > 9007199254740991) return "undefined";
    return szshi;
  },
  jzb: function (number) {
    return BigInt(number).toString(2);
  },
  err: function (value) {
    console.error(value);
  },
  va: function (name, value) {
    window[name] = value;
  },
  idinnerHTML: function (id, value) {
    document.getElementById(id).innerHTML = value;
  }
};