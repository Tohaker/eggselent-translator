var rosegga_stone = {
  a: "eg",
  b: "geee",
  c: "gege",
  d: "gee",
  e: "e",
  f: "eege",
  g: "gge",
  h: "eeee",
  i: "ee",
  j: "eggg",
  k: "geg",
  l: "egee",
  m: "gg",
  n: "ge",
  o: "ggg",
  q: "ggeg",
  r: "ege",
  s: "eee",
  t: "g",
  u: "eeg",
  v: "eeeg",
  w: "egg",
  x: "geeg",
  y: "gegg",
  z: "ggee",
  "1": "egggg",
  "2": "eeggg",
  "3": "eeegg",
  "4": "eeeeg",
  "5": "eeeee",
  "6": "geeee",
  "7": "ggeee",
  "8": "gggee",
  "9": "gggge",
  "0": "ggggg"
};

function translegg() {
  var seggtance = document.getElementById("human-seggtance").value;

  var new_seggtance = "";

  for (var i = 0; i < seggtance.length; i++) {
    if (seggtance.charAt(i) == " ") {
      new_seggtance += " ";
      continue;
    }

    var legger = rosegga_stone[seggtance.charAt(i).toLowerCase()];

    if (legger) {
      new_seggtance += legger + " ";
    }
  }

  document.getElementById("answer-human").innerHTML = new_seggtance;
}

function gegeeggeeeeegeeeggegge() {
  var seggtance = document.getElementById("egg-seggtance").value.split(" ");

  var reggult = "";

  for (var i = 0; i < seggtance.length; i++) {
    if (seggtance[i] === "") {
      reggult += " ";
      continue;
    }

    for (var key in rosegga_stone) {
      if (rosegga_stone[key] === seggtance[i]) {
        reggult += key;
        break;
      }
    }
  }

  document.getElementById("answer-egg").innerHTML = reggult;
}
