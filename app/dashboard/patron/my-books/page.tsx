"use client"

import DashboardLayout from "@/app/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, Clock, Search, Star, RotateCcw, AlertCircle } from "lucide-react"

export default function MyBooksPage() {
  const currentBooks = [
    {
      id: "B001",
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      isbn: "978-0132350884",
      issueDate: "2024-01-15",
      dueDate: "2024-02-15",
      renewals: 1,
      maxRenewals: 2,
      status: "active",
      coverUrl: "/placeholder.svg?height=120&width=80&text=Clean+Code",
    },
    {
      id: "B002",
      title: "The Pragmatic Programmer",
      author: "David Thomas, Andrew Hunt",
      isbn: "978-0201616224",
      issueDate: "2024-01-10",
      dueDate: "2024-02-10",
      renewals: 2,
      maxRenewals: 2,
      status: "due_soon",
      coverUrl: "/placeholder.svg?height=120&width=80&text=Pragmatic+Programmer",
    },
    {
      id: "B003",
      title: "Design Patterns: Elements of Reusable Object-Oriented Software",
      author: "Gang of Four",
      isbn: "978-0201633612",
      issueDate: "2024-01-05",
      dueDate: "2024-02-05",
      renewals: 0,
      maxRenewals: 2,
      status: "overdue",
      coverUrl: "/placeholder.svg?height=120&width=80&text=Design+Patterns",
    },
  ]

  const borrowingHistory = [
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      returnDate: "2024-01-20",
      rating: 5,
      status: "returned",
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      returnDate: "2024-01-18",
      rating: 4,
      status: "returned",
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      returnDate: "2024-01-15",
      rating: 5,
      status: "returned",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "due_soon":
        return "bg-yellow-100 text-yellow-800"
      case "overdue":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Active"
      case "due_soon":
        return "Due Soon"
      case "overdue":
        return "Overdue"
      default:
        return "Unknown"
    }
  }

  const getDaysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate)
    const today = new Date()
    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <DashboardLayout userRole="patron" userName="John Student">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 animate-fade-in-up">My Books</h1>
            <p className="text-gray-600 mt-2 animate-fade-in-up delay-100">
              Manage your borrowed books and view borrowing history
            </p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="btn-animate animate-fade-in-up delay-200 bg-transparent">
              <Search className="h-4 w-4 mr-2" />
              Browse Books
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Currently Borrowed", value: "3", icon: BookOpen, color: "text-blue-600" },
            { title: "Due This Week", value: "1", icon: Calendar, color: "text-orange-600" },
            { title: "Overdue", value: "1", icon: AlertCircle, color: "text-red-600" },
            { title: "Total Read", value: "47", icon: Star, color: "text-green-600" },
          ].map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className={`hover-lift card-hover animate-fade-in-up`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    </div>
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Currently Borrowed Books */}
        <Card className="animate-fade-in-up delay-700">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
              Currently Borrowed Books
            </CardTitle>
            <CardDescription>Books you have checked out from the library</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentBooks.map((book, index) => (
                <div
                  key={book.id}
                  className={`border rounded-lg p-4 hover:shadow-lg transition-all duration-200 hover-lift animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100 + 800}ms` }}
                >
                  <div className="flex space-x-4">
                    <img
                      src={book.coverUrl || "/placeholder.svg"}
                      alt={book.title}
                      className="w-16 h-20 object-cover rounded shadow-sm"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1">{book.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                      <Badge className={getStatusColor(book.status)}>{getStatusText(book.status)}</Badge>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Due Date:</span>
                      <span className="font-medium">{book.dueDate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Days Left:</span>
                      <span
                        className={`font-medium ${
                          getDaysUntilDue(book.dueDate) < 0
                            ? "text-red-600"
                            : getDaysUntilDue(book.dueDate) <= 3
                              ? "text-orange-600"
                              : "text-green-600"
                        }`}
                      >
                        {getDaysUntilDue(book.dueDate) < 0
                          ? `${Math.abs(getDaysUntilDue(book.dueDate))} days overdue`
                          : `${getDaysUntilDue(book.dueDate)} days`}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Renewals:</span>
                      <span className="font-medium">
                        {book.renewals}/{book.maxRenewals}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    {book.renewals < book.maxRenewals && book.status !== "overdue" && (
                      <Button size="sm" variant="outline" className="flex-1 btn-animate bg-transparent">
                        <RotateCcw className="h-4 w-4 mr-1" />
                        Renew
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="flex-1 btn-animate bg-transparent">
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Borrowing History */}
        <Card className="animate-fade-in-up delay-1100">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-green-600" />
              Recent Reading History
            </CardTitle>
            <CardDescription>Books you've recently returned</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {borrowingHistory.map((book, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100 + 1200}ms` }}
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{book.title}</h4>
                    <p className="text-sm text-gray-600">{book.author}</p>
                    <p className="text-xs text-gray-500 mt-1">Returned on {book.returnDate}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < book.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <Button size="sm" variant="outline" className="btn-animate bg-transparent">
                      Borrow Again
                    </Button>
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
