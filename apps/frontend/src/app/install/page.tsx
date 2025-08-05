import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GitBranch, Check, ExternalLink } from 'lucide-react'

export default function InstallPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <GitBranch className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">AutoMerge Pro</span>
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
            ← Back to Home
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Install AutoMerge Pro</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get started with AI-powered pull request automation in just a few clicks
            </p>
            
            {/* GitHub App Install Button */}
            <Button size="lg" className="text-lg px-8 py-4 mb-4" asChild>
              <a 
                href={`https://github.com/apps/automerge-pro-install`}
                className="inline-flex items-center"
              >
                <GitBranch className="mr-2 h-5 w-5" />
                Install on GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Free for up to 3 repositories • No credit card required
            </p>
          </div>

          {/* Installation Steps */}
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      1
                    </div>
                    <CardTitle className="text-lg">Install App</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Click the install button above to add AutoMerge Pro to your GitHub organization or repositories.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      2
                    </div>
                    <CardTitle className="text-lg">Configure Rules</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Set up your automation rules in the dashboard to define when PRs should be auto-approved and merged.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      3
                    </div>
                    <CardTitle className="text-lg">Start Automating</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    AutoMerge Pro will now automatically analyze and process your pull requests according to your rules.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features Included */}
          <Card>
            <CardHeader>
              <CardTitle>What You Get</CardTitle>
              <CardDescription>
                All the features you need to automate your pull request workflow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'AI-powered risk analysis',
                  'Custom automation rules',
                  'Real-time dashboard',
                  'Slack & email notifications',
                  'Pull request insights',
                  'Team collaboration features',
                  'Security-first approach',
                  'Easy setup & configuration'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <a 
                href={`https://github.com/apps/automerge-pro-install`}
                className="inline-flex items-center"
              >
                <GitBranch className="mr-2 h-5 w-5" />
                Install AutoMerge Pro Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}