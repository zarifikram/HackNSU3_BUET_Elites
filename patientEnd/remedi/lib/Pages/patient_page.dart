import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import "package:velocity_x/velocity_x.dart";
import '../api_caller.dart';

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
}