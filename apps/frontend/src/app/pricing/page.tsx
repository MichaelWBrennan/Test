import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GitBranch, Check, Calculator, TrendingUp } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <GitBranch className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">AutoMerge Pro</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
              Home
            </Link>
            <Button asChild>
              <Link href="/install">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the plan that fits your team size and automation needs. 
            All plans include our core AI-powered features.
          </p>
          
          {/* ROI Calculator Preview */}
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <Calculator className="h-5 w-5" />
                <span>ROI Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$12,480</div>
                <p className="text-sm text-muted-foreground">
                  Estimated annual savings for a 10-person dev team
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Based on 24 hours saved per month at $65/hour
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Free Tier */}
          <Card className="relative">
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <CardDescription>Perfect for getting started</CardDescription>
              <div className="text-3xl font-bold">$0<span className="text-sm font-normal">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Up to 3 repositories
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Basic AI analysis
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Standard rules engine
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Email notifications
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Community support
                </li>
              </ul>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/install">Get Started</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Team Tier */}
          <Card className="relative border-primary shadow-lg">
            <Badge className="absolute -top-2 left-1/2 -translate-x-1/2">Most Popular</Badge>
            <CardHeader>
              <CardTitle>Team</CardTitle>
              <CardDescription>For growing development teams</CardDescription>
              <div className="text-3xl font-bold">$99<span className="text-sm font-normal">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Up to 10 repositories
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Advanced AI features
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Custom rule priorities
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Slack notifications
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Analytics dashboard
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Priority support
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/install">Start Free Trial</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Growth Tier */}
          <Card>
            <CardHeader>
              <CardTitle>Growth</CardTitle>
              <CardDescription>For scaling organizations</CardDescription>
              <div className="text-3xl font-bold">$299<span className="text-sm font-normal">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Unlimited repositories
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Premium AI models (GPT-4)
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Advanced integrations
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Custom webhooks
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Priority support
                </li>
              </ul>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Tier */}
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large enterprises</CardDescription>
              <div className="text-3xl font-bold">$999<span className="text-sm font-normal">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Everything in Growth
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  SSO integration (SAML)
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Custom SLA (99.9% uptime)
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Dedicated support manager
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  On-premise deployment
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Custom integrations
                </li>
              </ul>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* ROI Calculator */}
        <Card className="max-w-4xl mx-auto mb-16">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6" />
              <span>Calculate Your ROI</span>
            </CardTitle>
            <CardDescription>
              See how much time and money AutoMerge Pro can save your team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">4.2 hours</div>
                <p className="text-sm text-muted-foreground">Average time saved per developer per week</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">65%</div>
                <p className="text-sm text-muted-foreground">Reduction in manual PR review time</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">40%</div>
                <p className="text-sm text-muted-foreground">Faster deployment cycles</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-slate-50 rounded-lg">
              <h4 className="font-semibold mb-4">For a team of 10 developers:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p>Time saved per week: <strong>42 hours</strong></p>
                  <p>Time saved per month: <strong>168 hours</strong></p>
                  <p>Annual time savings: <strong>2,016 hours</strong></p>
                </div>
                <div>
                  <p>Cost savings per month: <strong>$10,920</strong></p>
                  <p>Annual cost savings: <strong>$131,040</strong></p>
                  <p>Team plan cost: <strong>$1,188/year</strong></p>
                  <p className="font-bold text-green-600">Net annual savings: <strong>$129,852</strong></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "Can I change plans at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes! The Team and Growth plans come with a 14-day free trial. No credit card required to start."
              },
              {
                question: "What happens if I exceed my repository limit?",
                answer: "You'll receive a notification when you approach your limit. You can either upgrade your plan or remove repositories from AutoMerge Pro."
              },
              {
                question: "Do you offer discounts for open source projects?",
                answer: "Yes, we offer free Team plan access for verified open source projects. Contact us for more details."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Workflow?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start with our free plan and upgrade as your team grows
          </p>
          <Button size="lg" asChild>
            <Link href="/install">
              <GitBranch className="mr-2 h-5 w-5" />
              Get Started for Free
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}