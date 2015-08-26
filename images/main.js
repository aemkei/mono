c = c.getContext('2d');
M = new Image

// move into doc

M.src = "data:image/webp;base64,UklGRvQAAABXRUJQVlA4IOgAAACwCwCdASpVAJAAP83g6Wy/trGsp7O7U/A5iWkAAKcTjmQYh5UJQ0jYpMX0oL/BEs/Nf1sjIFKDnW6C0eVxBnhAYsV2qJD7jkqjxCBZjU7VBrL4wUySIvuVqQeMIvT4oyrkLrEn3+AA/uNARvC7AcSDL17nlxal+g714Zb0pP35maC4uSRnedwCuSEyeFdXZCwMAM25RrBr71HxYgUvGf5S3SHZiXPiCN7Uqji/ddVr8ZmLB+yaJ3jSlUklLq55pEKPWuMRgz3Ri4eYScvXAHEM/dP1n+A/7ciOK0Sic5URg+KDXjMmQAAA";

c.drawImage(M, 0, 0);

I = 0;

setInterval(function () {
  r = "";

  for (y = 36; y--;){

    for (x = 42; x--;){

      H = 0;

      for (i = 8; i--;){

        d=c.getImageData(x*2, y*4, 2, 4).data[i * 4]

          H += (d < I % 85) && [
            0x8,  0x1,
            0x10, 0x2,
            0x20, 0x4,
            0x80, 0x40
          ][i];

        I += d
      }

      r += String.fromCharCode(0x2800 + H);
    }
    r += "\n";
  }

  p.innerHTML = r;
})