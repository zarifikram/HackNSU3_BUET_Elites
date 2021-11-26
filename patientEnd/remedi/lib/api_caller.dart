import 'dart:convert';

import 'package:remedi/person.dart';
import "package:http/http.dart" as http;

class API_CALLER{
  static String base_url = "http://151.106.113.197:5000";

  static Future<Map<String, dynamic>> INIT(String text) async {
    text = text.replaceAll(" ", "%20");
    String name = Person.name.replaceAll(" ", "%20");
    String age = Person.age.toString();
    String height = Person.height;
    String weight = Person.weight;
    String sex = Person.sex;
    String street = Person.street.replaceAll(" ", "%20");
    String city = Person.city.replaceAll(" ", "%20");
    String phone = Person.phone;

    print(base_url + "/init?name=$name&age=$age&height=$height&weight=$weight&sex=$sex&street=$street&city=$city&phone=$phone&text=$text");
    var responseJson = await http.get(Uri.parse(base_url + "/init?name=${name}&age=${age}&height=${height}&weight=${weight}&sex=${sex}&street=${street}&city=${city}&phone=${phone}&text=${text}"));
    Map<String, dynamic> response = jsonDecode(responseJson.body);
    print(response["question"]);
    return response;
  }

  static Future<Map<String, dynamic>> CONTINUE() async {
    String key = Person.key;
    String choice = Person.choice;
    print(base_url + "/continue?key=$key&choice=$choice");
    var responseJson = await http.get(Uri.parse(base_url + "/continue?key=$key&choice=$choice"));
    var response = jsonDecode(responseJson.body);
    return response;
  }

  static Future<Map<String, dynamic>> DIAGNOSIS() async {
    String key = Person.key;
    String specialization = Person.specialization.replaceAll(" ", "%20");

    specialization = specialization.replaceAll(" ", "%20");
    print(base_url + "/get-tests?key=${key}&specialist=${specialization}");
    var responseJson = await http.get(Uri.parse(base_url + "/get-tests?key=${key}&specialist=${specialization}"));
    var response = jsonDecode(responseJson.body);
    return response;
  }

  static Future<Map<String, dynamic>> APPOINT() async {
    String key = Person.key;
    String doctorId = Person.doctorId.replaceAll(" ", "%20");
    print(base_url + "/appoint?key=${key}&doctor=${doctorId}");
    var responseJson = await http.get(Uri.parse(base_url + "/appoint?key=${key}&doctor=${doctorId}"));
    var response = jsonDecode(responseJson.body);
    return response;
  }

}