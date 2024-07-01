import 'package:flutter/material.dart';
import 'theme.dart';
import 'routes.dart';
import 'screens/auth_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Amazon Clone',
      theme: themeData,
      initialRoute: '/',
      routes: routes,
    );
  }
}
