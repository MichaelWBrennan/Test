import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class PremiumScreen extends StatelessWidget {
  const PremiumScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Premium Features'),
        leading: IconButton(
          onPressed: () => context.go('/dashboard'),
          icon: const Icon(Icons.arrow_back),
        ),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Header
            Card(
              color: Theme.of(context).colorScheme.primaryContainer,
              child: Padding(
                padding: const EdgeInsets.all(24.0),
                child: Column(
                  children: [
                    Icon(
                      Icons.star,
                      size: 64,
                      color: Theme.of(context).colorScheme.primary,
                    ),
                    const SizedBox(height: 16),
                    Text(
                      'Unlock Premium',
                      style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      'Get access to advanced features and personalized insights',
                      style: Theme.of(context).textTheme.bodyLarge,
                      textAlign: TextAlign.center,
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 24),
            
            // Premium features
            Text(
              'Premium Features',
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            _buildFeatureCard(
              context,
              'Advanced Analytics',
              'Detailed spending insights, investment performance tracking, and custom reports',
              Icons.analytics,
              Colors.blue,
            ),
            const SizedBox(height: 12),
            _buildFeatureCard(
              context,
              'Personal Coaching',
              'One-on-one financial coaching sessions with certified advisors',
              Icons.person,
              Colors.green,
            ),
            const SizedBox(height: 12),
            _buildFeatureCard(
              context,
              'Exclusive Investments',
              'Access to premium investment opportunities and early-stage startups',
              Icons.trending_up,
              Colors.purple,
            ),
            const SizedBox(height: 12),
            _buildFeatureCard(
              context,
              'Priority Support',
              '24/7 premium customer support with dedicated account manager',
              Icons.support_agent,
              Colors.orange,
            ),
            const SizedBox(height: 12),
            _buildFeatureCard(
              context,
              'Tax Optimization',
              'Automated tax-loss harvesting and optimized investment strategies',
              Icons.receipt,
              Colors.red,
            ),
            const SizedBox(height: 24),
            
            // Pricing
            Text(
              'Choose Your Plan',
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            Row(
              children: [
                Expanded(
                  child: _buildPricingCard(
                    context,
                    'Monthly',
                    '\$4.99',
                    'per month',
                    false,
                  ),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: _buildPricingCard(
                    context,
                    'Annual',
                    '\$49.99',
                    'per year',
                    true,
                    savings: 'Save 17%',
                  ),
                ),
              ],
            ),
            const SizedBox(height: 24),
            
            // Testimonial
            Card(
              color: Colors.grey[50],
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  children: [
                    Row(
                      children: List.generate(5, (index) => const Icon(
                        Icons.star,
                        color: Colors.amber,
                        size: 20,
                      )),
                    ),
                    const SizedBox(height: 12),
                    Text(
                      '"Premium has helped me save 40% more and make smarter investment decisions. The personal coaching is invaluable!"',
                      style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                        fontStyle: FontStyle.italic,
                      ),
                      textAlign: TextAlign.center,
                    ),
                    const SizedBox(height: 8),
                    Text(
                      '- Sarah M., Premium Member',
                      style: Theme.of(context).textTheme.bodySmall,
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 24),
            
            // Subscribe button
            SizedBox(
              width: double.infinity,
              child: FilledButton(
                onPressed: () => _startTrial(context),
                style: FilledButton.styleFrom(
                  padding: const EdgeInsets.symmetric(vertical: 16),
                ),
                child: const Text(
                  'Start 7-Day Free Trial',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
              ),
            ),
            const SizedBox(height: 16),
            
            // Terms
            Text(
              'Cancel anytime. No commitment required.',
              style: Theme.of(context).textTheme.bodySmall?.copyWith(
                color: Colors.grey[600],
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            Center(
              child: TextButton(
                onPressed: () => _showTerms(context),
                child: const Text('Terms & Conditions'),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildFeatureCard(
    BuildContext context,
    String title,
    String description,
    IconData icon,
    Color color,
  ) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: color.withOpacity(0.1),
                borderRadius: BorderRadius.circular(8),
              ),
              child: Icon(icon, color: color, size: 24),
            ),
            const SizedBox(width: 16),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: Theme.of(context).textTheme.titleSmall?.copyWith(
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    description,
                    style: Theme.of(context).textTheme.bodySmall?.copyWith(
                      color: Colors.grey[600],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildPricingCard(
    BuildContext context,
    String title,
    String price,
    String period,
    bool recommended, {
    String? savings,
  }) {
    return Container(
      decoration: BoxDecoration(
        border: Border.all(
          color: recommended
              ? Theme.of(context).colorScheme.primary
              : Colors.grey[300]!,
          width: recommended ? 2 : 1,
        ),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Stack(
        children: [
          if (recommended)
            Positioned(
              top: 0,
              left: 0,
              right: 0,
              child: Container(
                padding: const EdgeInsets.symmetric(vertical: 4),
                decoration: BoxDecoration(
                  color: Theme.of(context).colorScheme.primary,
                  borderRadius: const BorderRadius.only(
                    topLeft: Radius.circular(10),
                    topRight: Radius.circular(10),
                  ),
                ),
                child: Text(
                  'RECOMMENDED',
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 12,
                    fontWeight: FontWeight.bold,
                  ),
                  textAlign: TextAlign.center,
                ),
              ),
            ),
          Padding(
            padding: EdgeInsets.all(recommended ? 20 : 16),
            child: Column(
              children: [
                if (recommended) const SizedBox(height: 20),
                Text(
                  title,
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  price,
                  style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                    fontWeight: FontWeight.bold,
                    color: Theme.of(context).colorScheme.primary,
                  ),
                ),
                Text(
                  period,
                  style: Theme.of(context).textTheme.bodySmall,
                ),
                if (savings != null) ...[
                  const SizedBox(height: 8),
                  Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 8,
                      vertical: 4,
                    ),
                    decoration: BoxDecoration(
                      color: Colors.green.withOpacity(0.1),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Text(
                      savings,
                      style: const TextStyle(
                        color: Colors.green,
                        fontSize: 12,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }

  void _startTrial(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Start Free Trial'),
        content: const Text('Free trial signup functionality would be implemented here.'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Close'),
          ),
        ],
      ),
    );
  }

  void _showTerms(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Terms & Conditions'),
        content: const Text('Terms and conditions would be displayed here.'),
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