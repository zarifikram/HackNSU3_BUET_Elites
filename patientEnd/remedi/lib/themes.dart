import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import "package:velocity_x/velocity_x.dart";
class Themes{

  static ThemeData lightTheme(BuildContext context) => ThemeData(
    fontFamily: GoogleFonts.lato().fontFamily,
    primaryTextTheme: GoogleFonts.latoTextTheme(),
    canvasColor: lightBrown,
    cardColor: white,
    accentColor: darkBrown,

  );
  static ThemeData darkTheme(BuildContext context) => ThemeData(
    fontFamily: GoogleFonts.lato().fontFamily,
    primaryTextTheme: GoogleFonts.latoTextTheme(),
    brightness: Brightness.dark,
    canvasColor: darkBlue,
    cardColor: skyBlueL,
    accentColor: blueAccent,


  );
  static Color lightBrown = Color(0xffc9bbaa);
  static Color white = Color(0xffffffff);
  static Color darkBlue = Color(0xff034c81);

  static Color darkBrown = Color(0xff7f858c);
  static Color skyBlue = Color(0xff5ba2f4);
  static Color skyBlueL = Color(0xff8acfff);

  static Color blueAccent = Color(0xff2ca3fa);

}
