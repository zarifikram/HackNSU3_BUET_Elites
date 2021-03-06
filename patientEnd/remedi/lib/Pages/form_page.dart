import 'package:flutter/material.dart';
import 'package:remedi/Widgets/custom_drop_item.dart';
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
                CustomTextField(inputHint: "e.g Zarif Ikram" ,label: "Name",).py16(),
                CustomDropItem(items: ages, inputHint: "e.g 10", label: "Age",).py16(),
                CustomDropItem(items: ["Male", "Female"], inputHint: "e.g male", label: "Gender",).py16(),
                CustomTextField(label: "Height", inputHint: "e.g 1.56",).py16(),
                CustomTextField(label: "Weight", inputHint: "e.g 78",).py16(),
                CustomTextField(label: "Street", inputHint: "e.g Dhanmondi r/a",).py16(),
                CustomDropItem(items: cities, inputHint: "e.g Bronx", label: "City",).py16(),
                CustomTextField(label: "Phone Number", inputHint: "e.g +8806969420",).py16(),

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