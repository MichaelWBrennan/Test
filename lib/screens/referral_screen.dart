import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class ReferralScreen extends StatelessWidget {
  const ReferralScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Referral & Rewards'),
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
            // Header message
            Card(
              color: Theme.of(context).colorScheme.primaryContainer,
              child: Padding(
                padding: const EdgeInsets.all(20.0),
                child: Column(
                  children: [
                    Icon(
                      Icons.card_giftcard,
                      size: 64,
                      color: Theme.of(context).colorScheme.primary,
                    ),
                    const SizedBox(height: 16),
                    Text(
                      'Invite Friends to Earn Rewards!',
                      style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                        fontWeight: FontWeight.bold,
                      ),
                      textAlign: TextAlign.center,
                    ),
                    const SizedBox(height: 8),
                    Text(
                      'Get \$5 for every friend who joins and starts saving',
                      style: Theme.of(context).textTheme.bodyMedium,
                      textAlign: TextAlign.center,
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 24),
            
            // Sharing options
            Text(
              'Share WealthLoop',
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            Row(
              children: [
                Expanded(
                  child: _buildShareButton(
                    context,
                    'SMS',
                    Icons.message,
                    Colors.green,
                    () => _inviteViaSMS(context),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: _buildShareButton(
                    context,
                    'Share Link',
                    Icons.link,
                    Colors.blue,
                    () => _shareLink(context),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: _buildShareButton(
                    context,
                    'Achievement',
                    Icons.share,
                    Colors.purple,
                    () => _shareAchievement(context),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 24),
            
            // Referral code
            Card(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Your Referral Code',
                      style: Theme.of(context).textTheme.titleMedium?.copyWith(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 12),
                    Container(
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        color: Colors.grey[100],
                        borderRadius: BorderRadius.circular(8),
                        border: Border.all(color: Colors.grey[300]!),
                      ),
                      child: Row(
                        children: [
                          Expanded(
                            child: Text(
                              'WEALTH123',
                              style: Theme.of(context).textTheme.titleLarge?.copyWith(
                                fontWeight: FontWeight.bold,
                                letterSpacing: 2,
                              ),
                            ),
                          ),
                          IconButton(
                            onPressed: () => _copyCode(context),
                            icon: const Icon(Icons.copy),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 24),
            
            // Referral stats
            Card(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Your Referrals',
                      style: Theme.of(context).textTheme.titleMedium?.copyWith(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 16),
                    Row(
                      children: [
                        Expanded(
                          child: _buildStatItem(
                            context,
                            '3',
                            'Friends Joined',
                            Icons.people,
                          ),
                        ),
                        Expanded(
                          child: _buildStatItem(
                            context,
                            '\$15',
                            'Earned',
                            Icons.monetization_on,
                          ),
                        ),
                        Expanded(
                          child: _buildStatItem(
                            context,
                            '2',
                            'Pending',
                            Icons.hourglass_empty,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 24),
            
            // Recent referrals
            Text(
              'Recent Activity',
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            Card(
              child: Column(
                children: [
                  _buildReferralItem(
                    context,
                    'Sarah M.',
                    'Joined and started saving',
                    '\$5.00',
                    true,
                  ),
                  const Divider(),
                  _buildReferralItem(
                    context,
                    'Mike R.',
                    'Joined and started saving',
                    '\$5.00',
                    true,
                  ),
                  const Divider(),
                  _buildReferralItem(
                    context,
                    'Alex K.',
                    'Joined and started saving',
                    '\$5.00',
                    true,
                  ),
                  const Divider(),
                  _buildReferralItem(
                    context,
                    'Emma L.',
                    'Joined (pending first save)',
                    '\$0.00',
                    false,
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),
            
            // Call to action
            SizedBox(
              width: double.infinity,
              child: FilledButton.icon(
                onPressed: () => _inviteMore(context),
                icon: const Icon(Icons.person_add),
                label: const Text('Invite More Friends'),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildShareButton(
    BuildContext context,
    String label,
    IconData icon,
    Color color,
    VoidCallback onTap,
  ) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: color.withOpacity(0.1),
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: color.withOpacity(0.3)),
        ),
        child: Column(
          children: [
            Icon(icon, color: color, size: 32),
            const SizedBox(height: 8),
            Text(
              label,
              style: Theme.of(context).textTheme.bodySmall?.copyWith(
                fontWeight: FontWeight.bold,
                color: color,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildStatItem(
    BuildContext context,
    String value,
    String label,
    IconData icon,
  ) {
    return Column(
      children: [
        Icon(
          icon,
          color: Theme.of(context).colorScheme.primary,
          size: 32,
        ),
        const SizedBox(height: 8),
        Text(
          value,
          style: Theme.of(context).textTheme.titleLarge?.copyWith(
            fontWeight: FontWeight.bold,
            color: Theme.of(context).colorScheme.primary,
          ),
        ),
        Text(
          label,
          style: Theme.of(context).textTheme.bodySmall,
          textAlign: TextAlign.center,
        ),
      ],
    );
  }

  Widget _buildReferralItem(
    BuildContext context,
    String name,
    String status,
    String amount,
    bool completed,
  ) {
    return ListTile(
      leading: CircleAvatar(
        backgroundColor: completed
            ? Colors.green.withOpacity(0.1)
            : Colors.orange.withOpacity(0.1),
        child: Icon(
          completed ? Icons.check : Icons.hourglass_empty,
          color: completed ? Colors.green : Colors.orange,
        ),
      ),
      title: Text(name),
      subtitle: Text(status),
      trailing: Text(
        amount,
        style: Theme.of(context).textTheme.titleMedium?.copyWith(
          fontWeight: FontWeight.bold,
          color: completed ? Colors.green : Colors.grey,
        ),
      ),
    );
  }

  void _inviteViaSMS(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Invite via SMS'),
        content: const Text('SMS invitation functionality would be implemented here.'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Close'),
          ),
        ],
      ),
    );
  }

  void _shareLink(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Share Link'),
        content: const Text('Link sharing functionality would be implemented here.'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Close'),
          ),
        ],
      ),
    );
  }

  void _shareAchievement(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Share Achievement'),
        content: const Text('Achievement sharing functionality would be implemented here.'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Close'),
          ),
        ],
      ),
    );
  }

  void _copyCode(BuildContext context) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Referral code copied to clipboard!'),
        duration: Duration(seconds: 2),
      ),
    );
  }

  void _inviteMore(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Invite Friends'),
        content: const Text('Additional invitation options would be implemented here.'),
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