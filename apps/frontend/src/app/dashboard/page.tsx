import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  GitBranch, 
  BarChart3, 
  Settings, 
  Activity, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <GitBranch className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">AutoMerge Pro</span>
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/dashboard" className="text-sm font-medium text-primary">
                Dashboard
              </Link>
              <Link href="/dashboard/rules" className="text-sm text-muted-foreground hover:text-primary">
                Rules
              </Link>
              <Link href="/dashboard/analytics" className="text-sm text-muted-foreground hover:text-primary">
                Analytics
              </Link>
              <Link href="/dashboard/settings" className="text-sm text-muted-foreground hover:text-primary">
                Settings
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline">Team Plan</Badge>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Michael!</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your pull request automation
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Auto-Merged</p>
                  <p className="text-2xl font-bold">127</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Avg. Merge Time</p>
                  <p className="text-2xl font-bold">12m</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <AlertTriangle className="h-8 w-8 text-orange-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">High Risk PRs</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-purple-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Time Saved</p>
                  <p className="text-2xl font-bold">24h</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Pull Requests */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Pull Requests</CardTitle>
                <CardDescription>
                  Latest pull requests processed by AutoMerge Pro
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Update dependencies to latest versions",
                      repo: "frontend-app",
                      author: "dependabot[bot]",
                      status: "merged",
                      riskScore: 0.2,
                      time: "2 minutes ago"
                    },
                    {
                      title: "Fix authentication bug in user login",
                      repo: "backend-api",
                      author: "john-doe",
                      status: "pending",
                      riskScore: 0.7,
                      time: "5 minutes ago"
                    },
                    {
                      title: "Add new feature documentation",
                      repo: "docs-site",
                      author: "jane-smith",
                      status: "merged",
                      riskScore: 0.1,
                      time: "10 minutes ago"
                    },
                    {
                      title: "Refactor payment processing logic",
                      repo: "backend-api",
                      author: "mike-wilson",
                      status: "review",
                      riskScore: 0.8,
                      time: "15 minutes ago"
                    }
                  ].map((pr, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{pr.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {pr.repo} • by {pr.author} • {pr.time}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={
                          pr.riskScore > 0.7 ? "destructive" : 
                          pr.riskScore > 0.4 ? "outline" : "secondary"
                        }>
                          Risk: {(pr.riskScore * 100).toFixed(0)}%
                        </Badge>
                        <Badge variant={
                          pr.status === "merged" ? "default" :
                          pr.status === "pending" ? "outline" : "secondary"
                        }>
                          {pr.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    <Activity className="mr-2 h-4 w-4" />
                    View All Pull Requests
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Create New Rule
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Team
                </Button>
              </CardContent>
            </Card>

            {/* Active Rules */}
            <Card>
              <CardHeader>
                <CardTitle>Active Rules</CardTitle>
                <CardDescription>
                  Currently configured automation rules
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      name: "Auto-approve docs",
                      description: "Documentation updates",
                      enabled: true
                    },
                    {
                      name: "Dependabot PRs",
                      description: "Dependency updates",
                      enabled: true
                    },
                    {
                      name: "Security patches",
                      description: "High-priority security fixes",
                      enabled: false
                    }
                  ].map((rule, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{rule.name}</p>
                        <p className="text-xs text-muted-foreground">{rule.description}</p>
                      </div>
                      <Badge variant={rule.enabled ? "default" : "outline"}>
                        {rule.enabled ? "Active" : "Disabled"}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Manage Rules
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Repository Status */}
            <Card>
              <CardHeader>
                <CardTitle>Repository Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Total Repositories</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Active Rules</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Plan Limit</span>
                    <span className="font-medium">10 repos</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Upgrade Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}