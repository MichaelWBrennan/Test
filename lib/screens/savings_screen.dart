import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class SavingsScreen extends StatefulWidget {
  const SavingsScreen({super.key});

  @override
  State<SavingsScreen> createState() => _SavingsScreenState();
}

class _SavingsScreenState extends State<SavingsScreen> {
  double roundUpAmount = 1.0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Automated Savings'),
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
            // Configure round-up amount
            Card(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Configure Round-Up Amount',
                      style: Theme.of(context).textTheme.titleMedium?.copyWith(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 16),
                    Text(
                      'Round up to nearest: \$${roundUpAmount.toStringAsFixed(2)}',
                      style: Theme.of(context).textTheme.bodyLarge,
                    ),
                    Slider(
                      value: roundUpAmount,
                      min: 0.5,
                      max: 5.0,
                      divisions: 9,
                      label: '\$${roundUpAmount.toStringAsFixed(2)}',
                      onChanged: (value) {
                        setState(() {
                          roundUpAmount = value;
                        });
                      },
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 24),
            
            // Recent round-ups
            Text(
              'Recent Round-Ups',
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            Card(
              child: Column(
                children: [
                  _buildRoundUpItem(
                    context,
                    'Starbucks',
                    '\$0.32',
                    'Coffee & Tea',
                    Icons.local_cafe,
                  ),
                  const Divider(),
                  _buildRoundUpItem(
                    context,
                    'Amazon',
                    '\$0.87',
                    'Shopping',
                    Icons.shopping_cart,
                  ),
                  const Divider(),
                  _buildRoundUpItem(
                    context,
                    'Gas Station',
                    '\$0.45',
                    'Transportation',
                    Icons.local_gas_station,
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),
            
            // Milestones
            Text(
              'Milestones',
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            Row(
              children: [
                Expanded(
                  child: _buildMilestoneCard(
                    context,
                    '🏅',
                    '\$100 saved',
                    'Achievement unlocked!',
                    true,
                  ),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: _buildMilestoneCard(
                    context,
                    '🔥',
                    '1 month streak',
                    'Keep it up!',
                    true,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 24),
            
            // Progress to goal
            Card(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Progress to Goal',
                      style: Theme.of(context).textTheme.titleMedium?.copyWith(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 16),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text('\$650'),
                        Text('65%'),
                        Text('\$1,000'),
                      ],
                    ),
                    const SizedBox(height: 8),
                    LinearProgressIndicator(
                      value: 0.65,
                      backgroundColor: Colors.grey[300],
                      valueColor: AlwaysStoppedAnimation<Color>(
                        Theme.of(context).colorScheme.primary,
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      '\$350 remaining to reach your goal',
                      style: Theme.of(context).textTheme.bodySmall,
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 24),
            
            // Action buttons
            Row(
              children: [
                Expanded(
                  child: OutlinedButton(
                    onPressed: () => _adjustGoal(context),
                    child: const Text('Adjust Goal'),
                  ),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: FilledButton(
                    onPressed: () => _boostSavings(context),
                    child: const Text('Boost Savings'),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildRoundUpItem(
    BuildContext context,
    String merchant,
    String amount,
    String category,
    IconData icon,
  ) {
    return ListTile(
      leading: Icon(icon, color: Theme.of(context).colorScheme.primary),
      title: Text(merchant),
      subtitle: Text(category),
      trailing: Text(
        amount,
        style: Theme.of(context).textTheme.titleMedium?.copyWith(
          fontWeight: FontWeight.bold,
          color: Colors.green,
        ),
      ),
    );
  }

  Widget _buildMilestoneCard(
    BuildContext context,
    String emoji,
    String title,
    String subtitle,
    bool achieved,
  ) {
    return Card(
      color: achieved
          ? Theme.of(context).colorScheme.primaryContainer
          : Colors.grey[100],
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Text(
              emoji,
              style: const TextStyle(fontSize: 32),
            ),
            const SizedBox(height: 8),
            Text(
              title,
              style: Theme.of(context).textTheme.titleSmall?.copyWith(
                fontWeight: FontWeight.bold,
              ),
              textAlign: TextAlign.center,
            ),
            Text(
              subtitle,
              style: Theme.of(context).textTheme.bodySmall,
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }

  void _adjustGoal(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Adjust Savings Goal'),
        content: const Text('Goal adjustment functionality would be implemented here.'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Close'),
          ),
        ],
      ),
    );
  }

  void _boostSavings(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Boost Savings'),
        content: const Text('Additional savings boost functionality would be implemented here.'),
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