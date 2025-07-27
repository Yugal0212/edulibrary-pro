import DashboardLayout from "@/app/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, Users, BookOpen, Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminAnalyticsPage() {
  const metrics = [
    {
      title: "Total Circulation",
      value: "15,678",
      change: "+12.5%",
      trend: "up",
      icon: BookOpen,
    },
    {
      title: "Active Members",
      value: "2,345",
      change: "+8.2%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Monthly Visits",
      value: "45,123",
      change: "+15.3%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Book Reservations",
      value: "892",
      change: "-2.1%",
      trend: "down",
      icon: Calendar,
    },
  ]

  return (
    <DashboardLayout userRole="admin" userName="Admin User">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600 mt-2">Monitor library performance and user engagement</p>
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => {
            const IconComponent = metric.icon
            return (
              <Card key={metric.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                      <p className={`text-sm mt-1 ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                        {metric.change} from last month
                      </p>
                    </div>
                    <div className="p-3 rounded-full bg-blue-100">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Circulation Trends</CardTitle>
              <CardDescription>Book borrowing patterns over the last 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Chart visualization would go here</p>
                  <p className="text-sm text-gray-500">Integration with charting library needed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Activity</CardTitle>
              <CardDescription>Daily active users and engagement metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Activity chart would go here</p>
                  <p className="text-sm text-gray-500">Real-time user engagement data</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Books */}
        <Card>
          <CardHeader>
            <CardTitle>Most Popular Books</CardTitle>
            <CardDescription>Top borrowed books this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "The Great Gatsby", author: "F. Scott Fitzgerald", borrows: 45 },
                { title: "To Kill a Mockingbird", author: "Harper Lee", borrows: 38 },
                { title: "1984", author: "George Orwell", borrows: 35 },
                { title: "Pride and Prejudice", author: "Jane Austen", borrows: 32 },
                { title: "The Catcher in the Rye", author: "J.D. Salinger", borrows: 28 },
              ].map((book, index) => (
                <div key={book.title} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{book.title}</p>
                      <p className="text-sm text-gray-600">by {book.author}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{book.borrows}</p>
                    <p className="text-sm text-gray-600">borrows</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
