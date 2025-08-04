import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:wealthloop/main.dart';

void main() {
  testWidgets('WealthLoop app smoke test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const WealthLoopApp());

    // Verify that the onboarding screen is displayed
    expect(find.text('WealthLoop'), findsOneWidget);
    expect(find.text('Automate your savings, invest smarter, live richer.'), findsOneWidget);
    
    // Verify sign up buttons are present
    expect(find.text('Sign Up with Email'), findsOneWidget);
    expect(find.text('Sign Up with Google/Apple'), findsOneWidget);
  });

  testWidgets('Navigation to dashboard works', (WidgetTester tester) async {
    await tester.pumpWidget(const WealthLoopApp());

    // Tap the get started button
    await tester.tap(find.text('Get Started'));
    await tester.pumpAndSettle();

    // Verify we're on the dashboard
    expect(find.text('Hello, [User]!'), findsOneWidget);
    expect(find.text('Total Savings'), findsOneWidget);
    expect(find.text('Micro-Investments'), findsOneWidget);
  });

  testWidgets('Navigation between screens works', (WidgetTester tester) async {
    await tester.pumpWidget(const WealthLoopApp());

    // Navigate to dashboard
    await tester.tap(find.text('Get Started'));
    await tester.pumpAndSettle();

    // Navigate to savings screen
    await tester.tap(find.text('Boost My Savings'));
    await tester.pumpAndSettle();

    // Verify we're on the savings screen
    expect(find.text('Automated Savings'), findsOneWidget);
    expect(find.text('Configure Round-Up Amount'), findsOneWidget);
  });
}