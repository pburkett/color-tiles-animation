import { useCurrentFrame, random } from 'remotion';


class Utils {
  constructor(colors, newColors, mixer, seed, colorDuration) {
    this.colors = colors;
    this.newColors = newColors;
    this.mixer = mixer;
    this.seed = seed;
    this.colorDuration = colorDuration;
  }
  pickColor(rowIndex = 0, tileIndex = 0) {
    const frame = useCurrentFrame()
    const previousColor = this.colors[Math.floor(random(seed) + (random(tileIndex + rowIndex) + random(Math.floor((frame - this.colorDuration) / this.colorDuration) - rowIndex + tileIndex) * this.colors.length)) % this.colors.length]
    const newColor = this.newColors[Math.floor(random(seed) + (random(tileIndex + rowIndex) + random(Math.floor(frame / this.colorDuration) - rowIndex + tileIndex) * this.colors.length)) % this.colors.length]
    const weight = ( (frame % this.colorDuration) / this.colorDuration) * 100 
    if (this.colors.includes(this.mix( newColor, previousColor, weight))) console.log('match');
  if (weight == 0) console.log('here');
      
    return this.mix( newColor, previousColor, weight)
  }


  tweakColors(){
    const frame = useCurrentFrame()
    if (( (frame % this.colorDuration) / this.colorDuration) * 100 == 0){
      this.colors = []
      this.newColors.forEach(element => {
        this.colors.push(element)
      });
      
      let color1Index = Math.floor(random(frame / 2) * this.colors.length)
      this.newColors[color1Index] = this.mix(this.colors[color1Index], 'ffffff').substring(1)    
       console.log(colors,newColors);
       
    } 
  }

  mix(color_1, color_2, weight = 50) {
    function d2h(d) { return d.toString(16); }  // convert a decimal value to hex
    function h2d(h) { return parseInt(h, 16); } // convert a hex value to decimal 
    let color = "#";
    for (let i = 0; i <= 5; i += 2) { // loop through each of the 3 hex pairs—red, green, and blue
      let v1 = h2d(color_1.substr(i, 2)), // extract the current pairs
        v2 = h2d(color_2.substr(i, 2)),

        // combine the current pairs from each source color, according to the specified weight
        val = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0)));

      while (val.length < 2) { val = '0' + val; } // prepend a '0' if val results in a single digit

      color += val; // concatenate val to our new color string
    }
    return color; // PROFIT!
  };

}
const colors = ["d03161", "ee8080", "bfd8d1", "178a94", "2b374b"];
const newColors = ["d03161", "ee8080", "bfd8d1", "178a94","2b374b" ];
const mixer = "2b374b"
// const colors = ["ffb997", "f67e7d", "843b62", "621940", "0b032d"];
// const colors = ["511515", "723232", "ac2020", "fe8738", "119b84"];
// const colors = ["2A2C05", "EFE0B9", "E4B04A", "643B0F", "B7521E",]
// const colors = ['1E6E9A', '2997AD', 'CECAB3', 'D2B53A', 'EAD66B', '936F48']
// spring palette
// const colors =  ["0C6301", "60AF02",   "FD3469",  "850D52"]
const seed = 98765123

export const utils = new Utils(colors,newColors, mixer, seed, 50)
