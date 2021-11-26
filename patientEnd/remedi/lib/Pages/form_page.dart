import 'package:flutter/material.dart';
import "package:velocity_x/velocity_x.dart";
class FormPage extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    List<String> ages = [];
    for(int i = 1; i < 101; i++) ages.add(i.toString());
    List<String> cities = ["Bronx","Brooklyn","Cedarhurst","Flushing","Jackson Heights","Manhattan","New York","Queens","Staten Island"];
    return Container().box.red600.rounded.make();
  }

}