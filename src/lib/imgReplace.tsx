export function imgReplace(src: string) {
  console.log(src);

  const regex = /ebazaar\.mn/;
  if (regex.test(src)) {
    src = src.replace(regex, "m.ebazaar.mn");
    return src;
  } else return src;
}
