import 'package:flutter/material.dart';
import "package:velocity_x/velocity_x.dart";

import '../person.dart';
import 'chat_page.dart';
import 'form_page.dart';

class HomePage extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: context.canvasColor,
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children:[
            "Welcome to ReMedi".text.xl4.bold.makeCentered(),
            "Where telemedicine is reimagined".text.center.xl2.makeCentered(),
            Image.network("https://i.postimg.cc/6qRmyFKT/landing-Pic.png", scale: .8),
            MaterialButton(
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
              child: "Get Started".text.color(context.cardColor).xl4.make().px64().py16(),
              color: context.cardColor.withOpacity(.3),
              onPressed: () => (Navigator.push(context, MaterialPageRoute(builder: (context)=>Person.isQuestionDone? ChatPage() : FormPage()))),
            ).py32(),
          ],
        ),
      ),
    );
  }
  
}