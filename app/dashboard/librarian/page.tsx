import DashboardLayout from "@/app/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, RotateCcw, Clock, Plus, Search } from "lucide-react"

export default function LibrarianDashboard() {
  const quickStats = [
    { title: "Books Available", value: "12,450", color: "green" },
    { title: "Books Issued", value: "892", color: "blue" },
    { title: "Overdue Returns", value: "23", color: "red" },
    { title: "New Members", value: "15", color: "purple" },
  ]

  const recentTransactions = [
    { id: 1, type: "Issue", book: "The Great Gatsby", member: "Alice Johnson", time: "10:30 AM" },
    { id: 2, type: "Return", book: "1984", member: "Bob Smith", time: "11:15 AM" },
    { id: 3, type: "Issue", book: "To Kill a Mockingbird", member: "Carol Brown", time: "2:45 PM" },
    { id: 4, type: "Return", book: "Pride and Prejudice", member: "David Wilson", time: "3:20 PM" },
  ]

  const pendingTasks = [
    { id: 1, task: "Process new book arrivals", priority: "High", count: 25 },
    { id: 2, task: "Send overdue notices", priority: "Medium", count: 12 },
    { id: 3, task: "Update book catalog", priority: "Low", count: 8 },
    { id: 4, task: "Member registration approvals", priority: "High", count: 6 },
  ]

  return (
    <DashboardLayout userRole="librarian" userName="Sarah Librarian">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Librarian Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage books, members, and circulation</p>
          </div>
          <div className="flex space-x-3">
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Book
            </Button>
            <Button variant="outline">
              <Users className="h-4 w-4 mr-2" />
              New Member
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used library operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                <BookOpen className="h-6 w-6 mb-2" />
                Issue Book
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                <RotateCcw className="h-6 w-6 mb-2" />
                Return Book
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                <Search className="h-6 w-6 mb-2" />
                Search Catalog
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
                <Clock className="h-6 w-6 mb-2" />
                Overdue Report
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Transactions */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Latest book issues and returns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          transaction.type === "Issue" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                        }`}
                      >
                        {transaction.type}
                      </span>
                      <div>
                        <p className="font-medium text-sm">{transaction.book}</p>
                        <p className="text-xs text-gray-600">{transaction.member}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{transaction.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending Tasks */}
          <Card>
            <CardHeader>
              <CardTitle>Pending Tasks</CardTitle>
              <CardDescription>Tasks requiring your attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pendingTasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{task.task}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            task.priority === "High"
                              ? "bg-red-100 text-red-800"
                              : task.priority === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {task.priority}
                        </span>
                        <span className="text-xs text-gray-600">{task.count} items</span>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
