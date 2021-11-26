import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import "package:velocity_x/velocity_x.dart";
import '../api_caller.dart';
import '../person.dart';

class PatientPage extends StatefulWidget{
  @override
  State<PatientPage> createState() => _PatientPageState();
}

class _PatientPageState extends State<PatientPage> {
  List<bool> isOpens = [];
  late Future<Map<String, dynamic>> ResponseAPICall;
  late Future<Map<String, dynamic>> ResponseAPICall2;

  @override
  void initState() {
    ResponseAPICall = API_CALLER.DIAGNOSIS();
    for(int i = 0; i < 100; i++) isOpens.add(false);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    print(isOpens[0]);
    return SafeArea(
      child: Scaffold(
        body: Align(
          alignment: AlignmentDirectional.topStart,
          child: Column(
            children: [
              getFutureElements(context),
            ],
          ),
        ),
      ),
    );
  }

  Widget getFutureElements(BuildContext context) => FutureBuilder(
    builder: (context, snapshot){
      switch (snapshot.connectionState){
        case ConnectionState.none:
        case ConnectionState.waiting:
        case ConnectionState.active:
          return CircularProgressIndicator().centered();

        case ConnectionState.done:
          if(snapshot.hasError) return "Error".text.xl.make();
          else if(snapshot.hasData) return "data".text.make(); //need to change
          else return CircularProgressIndicator().centered();
      }
    },
    future: ResponseAPICall,//ResponseAPICall,
  );

  Widget GetDataColumn(BuildContext context, AsyncSnapshot<Object?> snapshot) {
    var response = snapshot.data! as Map<String, dynamic>;
    print(response);
    var tests = response["tests"];
    List<dynamic> docs = response["specialists"];
    List<Widget> testButtons = [];
    List<ExpansionPanel> docButtons = [];

    for(var test in tests){
      var button = MaterialButton(
        color: context.cardColor.withOpacity(0.3),
        textColor: context.cardColor,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
        onPressed: (){},
        child: (test as String).text.bold.center.xl2.make().box.width(context.percentWidth*70).make().py12(),
      ).box.rounded.makeCentered().py12();
      testButtons.add(button);
    }

    for(var doc in docs){
      int index = docs.indexOf(doc);
      String id = doc["id"];
      String email = doc["email"];
      String name = doc["name"];
      String address = doc["address"];
      var card = ExpansionPanel(
          canTapOnHeader: true,
          backgroundColor: context.canvasColor,
          headerBuilder: (context, isOpen){
            return name.text.xl3.make();
          },
          isExpanded: isOpens[index],
          body: Column(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  email.text.xl.make(),
                  Icon(Icons.mail_rounded),
                ],
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  address.text.xl.make(),
                  Icon(Icons.pin_drop)
                ],
              ),
              AppointButton(context, id),
            ],
          ).box.rounded.height(300).makeCentered().p12()
      );
      docButtons.add(card);
    }
    return SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          "Recommended Tests".text.xl4.bold.make().py16(),
          ...testButtons,
          ProceedButton(context, "Order Tests", (){
            (Navigator.push(context, MaterialPageRoute(builder: (context)=>PatientPage())));
          }),
          "Recommended ${Person.specialization} in ${Person.city.firstLetterUpperCase()}".text.xl4.bold.make().py16(),
          ExpansionPanelList(
            expansionCallback: (index, isExpanded){setState(() {isOpens[index] = !isExpanded;});},
            elevation: 0,
            dividerColor: context.canvasColor,
            children: docButtons,
          ),
        ],
      ).px12(),
    ).expand();
  }

  Widget ProceedButton(BuildContext context, String text, Null Function() param2) => Container();

  Widget AppointButton(BuildContext context, String id) => Container();



}