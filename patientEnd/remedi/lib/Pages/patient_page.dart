import 'package:flutter/cupertino.dart';

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
    return Container();
  }
}