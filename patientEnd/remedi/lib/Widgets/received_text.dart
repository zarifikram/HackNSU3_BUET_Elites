import 'package:flutter/material.dart';
import "package:velocity_x/velocity_x.dart";

class ReceivedText extends StatelessWidget{
  final String text;

  const ReceivedText({Key? key, required this.text}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return VxBox(
      child: text.text.xl.make().p16(),
    ).color(context.cardColor.withOpacity(.3)).withConstraints(BoxConstraints(maxWidth: context.percentWidth * 80)).rounded.make().py4()
        .box.alignCenterLeft.width(context.percentWidth*100).make();
  }

}