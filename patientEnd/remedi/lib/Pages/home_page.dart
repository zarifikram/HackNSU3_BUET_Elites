import 'package:flutter/material.dart';
import "package:velocity_x/velocity_x.dart";

class HomePage extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children:[
            VxBox().red600.make(),
            VxBox().red800.make(),
          ],
        ),
      ),
    );
  }
  
}