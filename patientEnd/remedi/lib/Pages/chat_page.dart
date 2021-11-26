import 'package:flutter/material.dart';
import 'package:remedi/Pages/patient_page.dart';
import 'package:remedi/Widgets/received_text.dart';
import 'package:remedi/Widgets/sent_text.dart';
import "package:velocity_x/velocity_x.dart";


import '../api_caller.dart';
import '../person.dart';


class ChatPage extends StatefulWidget{
  @override
  State<ChatPage> createState() => _ChatPageState();
}

class _ChatPageState extends State<ChatPage> {
  TextEditingController newText = TextEditingController();
  late Future<Map<String, dynamic>> ResponseAPICall;
  List<Widget> texts = [
    SentText(text: "hiiiii"),
    ReceivedText(text: "Hi ${Person.name.split(' ')[0]}! This is Heal-On Bot. I am your friend. Please tell me exactly how you feel, in your words."),
  ];

  List<Widget> bottoms = [];

  @override
  void initState(){
    super.initState();
    // ResponseAPICall = API_CALLER.INIT(Person.name, Person.age, Person.sex, "body pain");
  }
  @override
  Widget build(BuildContext context) {
    print(Person.name + Person.sex + Person.age.toString() + Person.street + Person.city + Person.height + Person.weight);
    return SafeArea(
      child: GestureDetector(
        onTap: ()=>FocusScope.of(context).unfocus(),
        child: Scaffold(
          backgroundColor: context.canvasColor,
          appBar: AppBar(backgroundColor: context.accentColor,),
          body: Person.isQuestionDone? getFutureElements(context) : getNonFutureElements(context),
        ),
      ),
    );
  }
  void getText() {
    texts.add(SentText(text: newText.text));
    // displayQuestion(); // questionDone
    ResponseAPICall = API_CALLER.INIT(newText.text);
    Person.isQuestionDone = true;
    setState(() {});
  }


  Widget getTextField(BuildContext context) => Row(
    mainAxisAlignment: MainAxisAlignment.spaceBetween,
    children: [
      TextFormField(
        decoration: InputDecoration(
          border: InputBorder.none,
          fillColor: context.accentColor,
          hintText: "how do you feel?",
        ),
        controller: newText,
        onFieldSubmitted: (text)=>getText,
        style: TextStyle(fontSize: 20),
      ).expand(),
      InkWell(
        child: Icon(Icons.send_rounded).p12(),
        onTap: getText,
      ),
    ],
  ).box.px12.color(context.accentColor.withOpacity(0.3)).rounded.make().p12();

  Widget getFutureElements(BuildContext context) => FutureBuilder(
    builder: (context, snapshot){
      switch (snapshot.connectionState){
        case ConnectionState.none:
        case ConnectionState.waiting:
        case ConnectionState.active:
          return getNonFutureElements(context);//CircularProgressIndicator().centered();

        case ConnectionState.done:
          if(snapshot.hasError) return "Error".text.xl.make();
          else if(snapshot.hasData) return GetDataColumn(context, snapshot);
          else return getNonFutureElements(context);// CircularProgressIndicator().centered();
      }
    },
    future: ResponseAPICall,//ResponseAPICall,
  );

  Widget ProceedButton(BuildContext context) => MaterialButton(
    color: context.cardColor.withOpacity(0.3),
    textColor: context.cardColor,
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
    onPressed: (){
      (Navigator.push(context, MaterialPageRoute(builder: (context)=>PatientPage())));
    },
    child: ("Proceed").text.bold.center.xl3.make().box.width(context.percentWidth*70).make().py8(),
  ).box.rounded.make().py32();

  getNonFutureElements(BuildContext context) =>Column(
    children: [
      SingleChildScrollView(
        reverse: true,
        child: Column(
          children: texts,
        ).px12(),
      ).expand(),
      Person.isQuestionDone? Container() : getTextField(context),
    ],
  );

  Widget GetDataColumn(BuildContext context, AsyncSnapshot<Object?> snapshot) {
    var response = snapshot.data! as Map<String, dynamic>;
    print(response);
    if(response["complete"] as bool == true) {
      print("in");
      Person.isContinue = true;
      Person.specialization = response["specialization"];
    }
    var choices = Person.isContinue? [] : response["choices"];
    print(response["complete"] as bool);

    var question = Person.isContinue? "We suggest you consult with a ${Person.specialization}.":response["question"];
    if(Person.question != question)texts.add(ReceivedText(text: question));
    Person.question = question;
    List<Widget> buttons = [];
    for(var choice in choices){
      print("adsf");
      var button = MaterialButton(
        color: context.cardColor.withOpacity(0.3),
        textColor: context.cardColor,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
        onPressed: (){
          Person.choice = choice["id"];
          Person.choiceLabel = choice["label"];
          Person.key = response["key"];
          texts.add(SentText(text: Person.choiceLabel));
          ResponseAPICall = API_CALLER.CONTINUE();
          setState(() {});
        },
        child: (choice["label"] as String).text.bold.center.xl3.make().box.width(context.percentWidth*70).make().py8(),
      ).box.rounded.make().py12();
      buttons.add(button);
    }
    print("adfas");
    return Column(
      children: [
        SingleChildScrollView(
          reverse: true,
          child: Column(
            children: texts,
          ).px12(),
        ).expand(),
        Person.isContinue ? ProceedButton(context) : Column(children: buttons,mainAxisSize: MainAxisSize.min,),
      ],
    );
  }


}