import 'package:flutter/material.dart';
import "package:velocity_x/velocity_x.dart";

import '../person.dart';

class CustomTextField extends StatefulWidget{
  final String label, inputHint;

  const CustomTextField({Key? key, required this.label, required this.inputHint}) : super(key: key);

  @override
  State<CustomTextField> createState() => _CustomTextFieldState();
}

class _CustomTextFieldState extends State<CustomTextField> {
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        widget.label.text.make().p8(),
        TextFormField(
          onChanged: (e){
            switch(widget.label){
              case "Name" : Person.name = e; break;
              case "Height": Person.height = e;break;
              case "Weight": Person.weight = e;break;
              case "Street" : Person.street = e;break;
              case "Phone Number" : Person.phone = e;break;
            }
          },
          validator: (value)=>(value.isEmptyOrNull) ? "Please write your ${widget.label}" : null,
          style: TextStyle(
            fontWeight: FontWeight.bold,
          ),
          decoration: InputDecoration(
            hintText: widget.inputHint,
            contentPadding: EdgeInsets.symmetric(vertical: 27, horizontal: 25),
            focusColor: context.cardColor,
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(27),
              borderSide: BorderSide(
                color: context.cardColor,
              ),
            ),
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(27),
              borderSide: BorderSide(
                color: context.accentColor,
              ),
            ),

            hintStyle: TextStyle(
              color: context.accentColor,
              fontWeight: FontWeight.bold,
            ),
          ),

        ),
      ],
    );
  }

  getVariable()  {
    switch(widget.label){
      case "Name" : return Person.name;
      case "Height": return Person.height;
      case "Weight": return Person.weight;
      case "Street" : return Person.street;
      case "Phone Number" : return Person.phone;
    }
  }
}