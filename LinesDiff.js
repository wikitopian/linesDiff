export default class LinesDiff {
  static getPatch(str1, str2) {
    str1 = str1.split("\n");
    str2 = str2.split("\n");

    console.log("str1:\n", str1);
    console.log("str2:\n", str2);
  }

  static setPatch(orig, patch) {
    console.log("orig:\n", orig);
    console.log("patch:\n", patch);
  }
}
