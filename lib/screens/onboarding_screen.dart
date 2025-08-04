import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class OnboardingScreen extends StatefulWidget {
  const OnboardingScreen({super.key});

  @override
  State<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends State<OnboardingScreen> {
  String selectedCountry = 'United States';
  final List<String> countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // Logo placeholder
              Container(
                width: 120,
                height: 120,
                decoration: BoxDecoration(
                  color: Theme.of(context).colorScheme.primary,
                  borderRadius: BorderRadius.circular(60),
                ),
                child: const Icon(
                  Icons.account_balance_wallet,
                  size: 60,
                  color: Colors.white,
                ),
              ),
              const SizedBox(height: 32),
              
              // App name and tagline
              Text(
                'WealthLoop',
                style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                  fontWeight: FontWeight.bold,
                  color: Theme.of(context).colorScheme.primary,
                ),
              ),
              const SizedBox(height: 16),
              Text(
                'Automate your savings, invest smarter, live richer.',
                style: Theme.of(context).textTheme.bodyLarge,
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 48),
              
              // Sign up buttons
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: () => _showEmailSignup(context),
                  child: const Text('Sign Up with Email'),
                ),
              ),
              const SizedBox(height: 16),
              SizedBox(
                width: double.infinity,
                child: OutlinedButton(
                  onPressed: () => _showSocialSignup(context),
                  child: const Text('Sign Up with Google/Apple'),
                ),
              ),
              const SizedBox(height: 32),
              
              // Country dropdown
              DropdownButtonFormField<String>(
                value: selectedCountry,
                decoration: const InputDecoration(
                  labelText: 'Country',
                  border: OutlineInputBorder(),
                ),
                items: countries.map((country) {
                  return DropdownMenuItem(
                    value: country,
                    child: Text(country),
                  );
                }).toList(),
                onChanged: (value) {
                  setState(() {
                    selectedCountry = value!;
                  });
                },
              ),
              const SizedBox(height: 24),
              
              // Bank linking and privacy
              Row(
                children: [
                  Expanded(
                    child: ElevatedButton.icon(
                      onPressed: () => _linkBankAccount(context),
                      icon: const Icon(Icons.account_balance),
                      label: const Text('Link Bank'),
                    ),
                  ),
                  const SizedBox(width: 16),
                  Expanded(
                    child: TextButton.icon(
                      onPressed: () => _showPrivacyInfo(context),
                      icon: const Icon(Icons.privacy_tip),
                      label: const Text('Privacy'),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 24),
              
              // Get started button
              SizedBox(
                width: double.infinity,
                child: FilledButton(
                  onPressed: () => context.go('/dashboard'),
                  child: const Text('Get Started'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  void _showEmailSignup(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Email Signup'),
        content: const Text('Email signup flow would be implemented here.'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Close'),
          ),
        ],
      ),
    );
  }

  void _showSocialSignup(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Social Signup'),
        content: const Text('Google/Apple signup flow would be implemented here.'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Close'),
          ),
        ],
      ),
    );
  }

  void _linkBankAccount(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Link Bank Account'),
        content: const Text('Bank linking flow would be implemented here.'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Close'),
          ),
        ],
      ),
    );
  }

  void _showPrivacyInfo(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Privacy Information'),
        content: const Text('Privacy policy and data handling information would be displayed here.'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Close'),
          ),
        ],
      ),
    );
  }
}