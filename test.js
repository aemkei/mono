r = "";

map = [
  0x1, 0x2,  0x4,  0x40,
  0x8, 0x10, 0x20, 0x80
]
for (x=0; x<256; x++){

  y = ("00000000" + x.toString(2)).substr(-8);

  h = 0;

  for (m=0; m<8; m++){
    if (y[m] == 1){
      h += map[m];
    }
  }

  r +=  String.fromCharCode(0x2800 + h);
}

console.log(r);