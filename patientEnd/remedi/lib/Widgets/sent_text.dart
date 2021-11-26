import 'package:flutter/material.dart';
import "package:velocity_x/velocity_x.dart";

class SentText extends StatelessWidget{
  final String text;

  const SentText({Key? key, required this.text}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return VxBox(
      child: text.text.xl.make().p16(),
    ).color(context.cardColor).withConstraints(BoxConstraints(maxWidth: context.percentWidth * 80)).rounded.make().py4()
        .box.alignCenterRight.width(context.percentWidth*100).make();
  }

}