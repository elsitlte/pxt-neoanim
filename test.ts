
const strip = light.createStrip();
const nleds = strip.length();
const ncolors = 3;
const nframes = 2;
const sheet = pins.createBuffer(6 + ncolors * 3 + nleds * nframes);
const opalette = 6;
const oframes = opalette + ncolors * 3;

// magic number
//sheet.setNumber(0, NumberFormat.UInt32BE, 0x2e0a2188);
// palette
sheet[0] = 0x2e;
sheet[1] = 0x0a;
sheet[2] = 0x21;
sheet[3] = 0x88;
sheet[4] = ncolors;
sheet[opalette + 0] = 0xff; // red
sheet[opalette + 4] = 0xff; // green
sheet[opalette + 8] = 0xff; // blue
// filing up colors
let k = 0;
for (let i = 0; i < nleds; ++i) {
    for (let j = 0; j < nframes; ++j) {
        sheet[oframes + k] = k % ncolors;
        k++;
    }
}
const anim = light.animationSheet(sheet);
strip.showAnimationFrame(anim);

const animationData = hex`2EA2188AE0001D001F00200021002400250028002A002C002F003000320033003400350036003700380039003A003B003D003E004000
430044004600470048004A004B004C004D004E004F00500051005200540055005600580059005C005D005E005F00600061006200640
06500660069006B006C006D006E006F0070007300740075007700780079007A007B007C007D007E0080008100820084008500870088
0089008A008B008D008E00900092009300940096009700980099009A009B009C009D009E009F00A000A100A200A300A400A500A800
A900AA00AB00AC00AD00AF00B000B100B200B400B500B600B700B800BA00BB00BC00BD00BE00C000C300C400C500C600C700C800C90
0CA00CB00CC00CD00CE00D000D100D300D400D600D700D800D900DA00DB00DC00DD00DF00E000E200E300E400E600E700E800E900EA
00EC00ED00EE00EF00F000F100F200F300F400F500F600F800FA00FC00FE00FFACB79ACAB1A12AB7651AC1A7CACAB291FAB7B59ADADADADADADADADADADADAD
ADADADADADADADADAC65AA9AC3E571A695AC1563A9AC491377A797ADADADADADADADADADADADADADADADADADADADADAC34A67ACE612AC3AACF536EAC1C151FAC45ADADADADADADADADADADADAD
ADADADADADADADADAC48481EAC16710AC4AC51512BAC23161DAC12ADADADADADADADADADADADADADADADADADADADADACA5565AC7E730AC65ACA65F13AC83163BAC6BADADADADADADADADADADADAD
ADADADADADADADADACAC793ACAC1635ACABACAC7CFACAC233FACABADADADADADADADADADADADADADADADADADADADADACAC9F14ACAC42EACACACACA021ACAC4C1CACACADADADADADADADADADADADAD
ADADADADADADADADACACAC58ACAC98EACACACACAC62ACAC991CACACADADADADADADADADADADADADADADADADADADADADACACACA3ACACAC4EACACACACACA4ACACAC56ACACADADADADADADADADADADADAD
ADADADADADADADADACACACACACACACA2ACACACACACACACACACA3ACACADADADADADADADADADADADADADADADADADADADADACACACACACACACACACACACACACACACACACACACACADADADADADADADADADADADAD
ADADADADADADADADACACACACACACACACACACACACACACACACACACACACADADADADADADADADADADADADADADADADADADADADACACACACABACACAC8EA8ACACACACABACACAC91A8ADADADADADADADADADADADAD
ADADADADADADADADA1ACACAC699EACAC2653A2ACACAC709FACAC325BADADADADADADADADADADADADADADADADADADADAD499FACAC1246ACACB952A0ACAC1F4FACAC1A18ADADADADADADADADADADADAD
ADADADADADADADAD`;
const animation = light.animationSheet(animationData);
strip.showAnimationFrame(animation)