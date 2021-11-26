import 'package:flutter/material.dart';
import "package:velocity_x/velocity_x.dart";

import '../person.dart';

class CustomDropItem extends StatefulWidget{
  final List<String> items;
  final String label,inputHint;
  const CustomDropItem({Key? key, required this.items, required this.inputHint, required this.label}) : super(key: key);

  @override
  State<CustomDropItem> createState() => _CustomDropItemState();
}

class _CustomDropItemState extends State<CustomDropItem> {
  var valueChoose;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        widget.label.text.make().p8(),
        DropdownButton(
          hint: widget.inputHint.text.make(),
          borderRadius: BorderRadius.circular(27),
          isExpanded: true,
          value: valueChoose,

          underline: Container(),
          icon: Icon(Icons.arrow_drop_down),
          iconSize: 36,
          onChanged: (e)=>setState(() {
            valueChoose=e;
            switch(widget.label){
              case "Gender" : Person.sex = (e as String).toLowerCase(); break;
              case "City" : Person.city = (e as String).toLowerCase(); break;
              case "Age" : Person.age = int.parse(e as String); break;
            }
          }
          ),
          items: widget.items.map((e) => DropdownMenuItem(child: e.text.bold.make(), value: e,)).toList(),
        ).px24().py8().box.border(color: context.accentColor).customRounded(BorderRadius.circular(27)).make(),
      ],
    );
  }
}