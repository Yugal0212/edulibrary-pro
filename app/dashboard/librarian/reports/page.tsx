"use client"

import DashboardLayout from "@/app/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Download, Calendar, BookOpen, Users, Clock, DollarSign } from "lucide-react"

export default function ReportsPage() {
  const reportStats = [
    { title: "Total Circulation", value: "15,234", change: "+12%", icon: BookOpen, color: "text-blue-600" },
    { title: "Active Members", value: "2,567", change: "+8%", icon: Users, color: "text-green-600" },
    { title: "Overdue Books", value: "45", change: "-15%", icon: Clock, color: "text-red-600" },
    { title: "Fines Collected", value: "$1,250", change: "+25%", icon: DollarSign, color: "text-purple-600" },
  ]

  const monthlyData = [
    { month: "Jan", issued: 1200, returned: 1150, overdue: 50 },
    { month: "Feb", issued: 1350, returned: 1300, overdue: 45 },
    { month: "Mar", issued: 1400, returned: 1380, overdue: 35 },
    { month: "Apr", issued: 1500, returned: 1450, overdue: 40 },
    { month: "May", issued: 1600, returned: 1580, overdue: 30 },
    { month: "Jun", issued: 1550, returned: 1520, overdue: 45 },
  ]

  const popularBooks = [
    { title: "Introduction to Algorithms", author: "Thomas H. Cormen", borrowed: 45, category: "Computer Science" },
    { title: "Clean Code", author: "Robert C. Martin", borrowed: 38, category: "Programming" },
    { title: "Design Patterns", author: "Gang of Four", borrowed: 32, category: "Software Engineering" },
    { title: "The Pragmatic Programmer", author: "Andrew Hunt", borrowed: 28, category: "Programming" },
    { title: "System Design Interview", author: "Alex Xu", borrowed: 25, category: "Computer Science" },
  ]

  return (
    <DashboardLayout userRole="librarian" userName="Sarah Librarian">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 animate-fade-in-up">Library Reports</h1>
            <p className="text-gray-600 mt-2 animate-fade-in-up delay-100">
              Comprehensive analytics and insights for library operations
            </p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="btn-animate animate-fade-in-up delay-200 bg-transparent">
              <Calendar className="h-4 w-4 mr-2" />
              Date Range
            </Button>
            <Button className="btn-animate animate-fade-in-up delay-300">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reportStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className={`hover-lift card-hover animate-fade-in-up`}
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                        <span className="text-sm text-gray-500 ml-1">vs last month</span>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <IconComponent className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Circulation Chart */}
          <Card className="animate-fade-in-up delay-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                Monthly Circulation Trends
              </CardTitle>
              <CardDescription>Book issuance and return patterns over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((data, index) => (
                  <div
                    key={data.month}
                    className={`flex items-center justify-between p-4 bg-gray-50 rounded-lg animate-fade-in-up`}
                    style={{ animationDelay: `${index * 100 + 1000}ms` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-semibold text-blue-600">{data.month}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Issued: {data.issued}</p>
                        <p className="text-sm text-gray-600">Returned: {data.returned}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={data.overdue > 40 ? "destructive" : "secondary"}>{data.overdue} overdue</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Popular Books */}
          <Card className="animate-fade-in-up delay-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                Most Popular Books
              </CardTitle>
              <CardDescription>Top borrowed books this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularBooks.map((book, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors duration-200 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 100 + 1100}ms` }}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{book.title}</p>
                      <p className="text-sm text-gray-600">by {book.author}</p>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {book.category}
                      </Badge>
                    </div>
                    <div className="text-right ml-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-blue-600">{index + 1}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{book.borrowed}</p>
                          <p className="text-xs text-gray-500">times</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Report Actions */}
        <Card className="animate-fade-in-up delay-1200">
          <CardHeader>
            <CardTitle>Generate Custom Reports</CardTitle>
            <CardDescription>Create detailed reports for specific time periods and categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Circulation Report", description: "Detailed book circulation statistics", icon: BookOpen },
                { title: "Member Activity", description: "Member borrowing patterns and behavior", icon: Users },
                { title: "Financial Report", description: "Fines, fees, and revenue analysis", icon: DollarSign },
              ].map((report, index) => (
                <div
                  key={index}
                  className={`p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-200 hover-lift animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100 + 1300}ms` }}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <report.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{report.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{report.description}</p>
                  <Button size="sm" variant="outline" className="w-full btn-animate bg-transparent">
                    Generate Report
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
