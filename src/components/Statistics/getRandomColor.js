export default function getRandomColor() {
  let clr = 0xffffff;
  while (clr > 0x999999) {
    clr = Math.floor(Math.random() * 0xffffff);
  }
  return `#${clr.toString(16)}`;
}
