import 'package:flutter/material.dart';
import 'package:remedi/Widgets/custom_text_field.dart';
import "package:velocity_x/velocity_x.dart";

import 'chat_page.dart';
class FormPage extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    List<String> ages = [];
    for(int i = 1; i < 101; i++) ages.add(i.toString());
    List<String> cities = ["Bronx","Brooklyn","Cedarhurst","Flushing","Jackson Heights","Manhattan","New York","Queens","Staten Island"];
    return SafeArea(
      child: Scaffold(
        backgroundColor: context.canvasColor,
        body: Form(
          child: SingleChildScrollView(
            child: Column(

              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container().box.make().py16(),
                "First tell us a bit about yourself.".text.xl2.bold.make().py16(),
                //custom input and dropdown needed
                CustomTextField(inputHint: "e.g zarif" ,label: "Name",),
                MaterialButton(
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                  onPressed: () => (Navigator.push(context, MaterialPageRoute(builder: (context)=>ChatPage()))),
                  child: "Proceed".text.color(context.cardColor).xl4.make().px64().py16(),
                  color: context.cardColor.withOpacity(.3),
                ).py32().box.makeCentered(),
              ],
            ).px12(),
          ),
        ),
      ),
    );
  }

}