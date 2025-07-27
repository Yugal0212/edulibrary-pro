"use client"

import { useState } from "react"
import DashboardLayout from "@/app/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BookOpen, Users, CheckCircle, AlertCircle, Search, Clock, RotateCcw } from "lucide-react"

export default function CirculationPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const circulationData = [
    {
      id: "C001",
      bookTitle: "Introduction to Computer Science",
      memberName: "John Smith",
      memberType: "Student",
      issueDate: "2024-01-15",
      dueDate: "2024-02-15",
      status: "active",
      fine: 0,
    },
    {
      id: "C002",
      bookTitle: "Advanced Mathematics",
      memberName: "Sarah Johnson",
      memberType: "Faculty",
      issueDate: "2024-01-10",
      dueDate: "2024-02-10",
      status: "overdue",
      fine: 25,
    },
    {
      id: "C003",
      bookTitle: "Physics Fundamentals",
      memberName: "Mike Wilson",
      memberType: "Student",
      issueDate: "2024-01-20",
      dueDate: "2024-02-20",
      status: "returned",
      fine: 0,
    },
    {
      id: "C004",
      bookTitle: "Database Systems",
      memberName: "Emma Davis",
      memberType: "Student",
      issueDate: "2024-01-18",
      dueDate: "2024-02-18",
      status: "active",
      fine: 0,
    },
    {
      id: "C005",
      bookTitle: "Machine Learning Basics",
      memberName: "Robert Brown",
      memberType: "Faculty",
      issueDate: "2024-01-12",
      dueDate: "2024-02-12",
      status: "overdue",
      fine: 15,
    },
  ]

  const stats = [
    { title: "Active Loans", value: "1,234", icon: BookOpen, color: "text-blue-600", bgColor: "bg-blue-50" },
    { title: "Overdue Items", value: "45", icon: AlertCircle, color: "text-red-600", bgColor: "bg-red-50" },
    { title: "Returns Today", value: "89", icon: CheckCircle, color: "text-green-600", bgColor: "bg-green-50" },
    { title: "Total Members", value: "2,567", icon: Users, color: "text-purple-600", bgColor: "bg-purple-50" },
  ]

  const recentActivity = [
    { action: "Book Issued", book: "Clean Code", member: "Alice Johnson", time: "2 minutes ago" },
    { action: "Book Returned", book: "Design Patterns", member: "Bob Smith", time: "5 minutes ago" },
    { action: "Book Renewed", book: "JavaScript Guide", member: "Carol White", time: "10 minutes ago" },
    { action: "Fine Paid", book: "Python Cookbook", member: "David Lee", time: "15 minutes ago" },
  ]

  return (
    <DashboardLayout userRole="librarian" userName="Sarah Librarian">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 animate-fade-in-up">Circulation Management</h1>
            <p className="text-gray-600 mt-2 animate-fade-in-up delay-100">
              Manage book loans, returns, and member circulation
            </p>
          </div>
          <div className="flex space-x-3">
            <Button className="btn-animate animate-fade-in-up delay-200">Issue Book</Button>
            <Button variant="outline" className="btn-animate animate-fade-in-up delay-300 bg-transparent">
              Return Book
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
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
                    </div>
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <IconComponent className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Issue Book", icon: BookOpen, color: "bg-blue-500", description: "Lend a book to member" },
            { title: "Return Book", icon: RotateCcw, color: "bg-green-500", description: "Process book returns" },
            { title: "Renew Book", icon: Clock, color: "bg-orange-500", description: "Extend loan period" },
            { title: "View Overdue", icon: AlertCircle, color: "bg-red-500", description: "Check overdue items" },
          ].map((action, index) => (
            <Card
              key={index}
              className={`cursor-pointer hover-lift card-hover animate-fade-in-up`}
              style={{ animationDelay: `${index * 100 + 800}ms` }}
            >
              <CardContent className="p-4 text-center">
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Circulation Records */}
          <div className="lg:col-span-2">
            <Card className="animate-fade-in-up delay-1000">
              <CardHeader>
                <CardTitle>Recent Circulation Records</CardTitle>
                <CardDescription>Latest book transactions and activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search by book title, member name, or ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <Button variant="outline" className="btn-animate bg-transparent">
                    Filter
                  </Button>
                </div>

                {/* Circulation Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold text-gray-700">Book</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Member</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Due Date</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Status</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {circulationData.slice(0, 5).map((record, index) => (
                        <tr
                          key={record.id}
                          className={`border-b hover:bg-gray-50 transition-colors duration-200 animate-fade-in-up`}
                          style={{ animationDelay: `${index * 100 + 1200}ms` }}
                        >
                          <td className="p-3">
                            <div className="font-medium text-gray-900">{record.bookTitle}</div>
                            <div className="text-sm text-gray-500">ID: {record.id}</div>
                          </td>
                          <td className="p-3">
                            <div className="font-medium text-gray-900">{record.memberName}</div>
                            <div className="text-sm text-gray-500">{record.memberType}</div>
                          </td>
                          <td className="p-3 text-sm text-gray-600">{record.dueDate}</td>
                          <td className="p-3">
                            <Badge
                              variant={
                                record.status === "active"
                                  ? "default"
                                  : record.status === "overdue"
                                    ? "destructive"
                                    : "secondary"
                              }
                              className="capitalize"
                            >
                              {record.status}
                            </Badge>
                          </td>
                          <td className="p-3">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline" className="btn-animate bg-transparent">
                                View
                              </Button>
                              {record.status === "active" && (
                                <Button size="sm" className="btn-animate">
                                  Return
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="animate-fade-in-up delay-1100">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest circulation activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 animate-fade-in-up`}
                      style={{ animationDelay: `${index * 100 + 1300}ms` }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600 truncate">{activity.book}</p>
                        <p className="text-xs text-gray-500">by {activity.member}</p>
                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
