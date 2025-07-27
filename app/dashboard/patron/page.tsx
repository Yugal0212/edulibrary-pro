import DashboardLayout from "@/app/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Heart, Calendar, Search, Star } from "lucide-react"

export default function PatronDashboard() {
  const borrowedBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      dueDate: "2024-02-15",
      status: "active",
      coverUrl: "/placeholder.svg?height=120&width=80",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      dueDate: "2024-02-10",
      status: "overdue",
      coverUrl: "/placeholder.svg?height=120&width=80",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      dueDate: "2024-02-20",
      status: "active",
      coverUrl: "/placeholder.svg?height=120&width=80",
    },
  ]

  const recommendedBooks = [
    {
      id: 1,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      rating: 4.8,
      available: true,
      coverUrl: "/placeholder.svg?height=160&width=120",
    },
    {
      id: 2,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      rating: 4.2,
      available: true,
      coverUrl: "/placeholder.svg?height=160&width=120",
    },
    {
      id: 3,
      title: "Lord of the Flies",
      author: "William Golding",
      rating: 4.1,
      available: false,
      coverUrl: "/placeholder.svg?height=160&width=120",
    },
    {
      id: 4,
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      rating: 4.6,
      available: true,
      coverUrl: "/placeholder.svg?height=160&width=120",
    },
  ]

  const accountStats = [
    { label: "Books Borrowed", value: "3", icon: BookOpen },
    { label: "Overdue Books", value: "1", icon: Clock },
    { label: "Favorites", value: "12", icon: Heart },
    { label: "Reservations", value: "2", icon: Calendar },
  ]

  return (
    <DashboardLayout userRole="patron" userName="John Patron">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Library</h1>
            <p className="text-gray-600 mt-2">Welcome back! Manage your books and discover new ones.</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Search className="h-4 w-4 mr-2" />
            Browse Books
          </Button>
        </div>

        {/* Account Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {accountStats.map((stat) => {
            const IconComponent = stat.icon
            return (
              <Card key={stat.label} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Currently Borrowed */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Currently Borrowed</CardTitle>
                <CardDescription>Your active book loans</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {borrowedBooks.map((book) => (
                    <div key={book.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <img
                        src={book.coverUrl || "/placeholder.svg"}
                        alt={book.title}
                        className="w-12 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{book.title}</h4>
                        <p className="text-sm text-gray-600">by {book.author}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-gray-500">Due: {book.dueDate}</span>
                          <Badge variant={book.status === "overdue" ? "destructive" : "default"}>
                            {book.status === "overdue" ? "Overdue" : "Active"}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Renew
                        </Button>
                        <Button size="sm">Return</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Search className="h-4 w-4 mr-2" />
                  Search Catalog
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Heart className="h-4 w-4 mr-2" />
                  View Favorites
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Calendar className="h-4 w-4 mr-2" />
                  My Reservations
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Clock className="h-4 w-4 mr-2" />
                  Borrowing History
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommended Books */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended for You</CardTitle>
            <CardDescription>Books you might enjoy based on your reading history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {recommendedBooks.map((book) => (
                <div key={book.id} className="group cursor-pointer">
                  <div className="bg-white rounded-lg border hover:shadow-lg transition-shadow p-4">
                    <img
                      src={book.coverUrl || "/placeholder.svg"}
                      alt={book.title}
                      className="w-full h-32 object-cover rounded mb-3"
                    />
                    <h4 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">{book.title}</h4>
                    <p className="text-xs text-gray-600 mb-2">by {book.author}</p>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600">{book.rating}</span>
                      </div>
                      <Badge variant={book.available ? "default" : "secondary"}>
                        {book.available ? "Available" : "Reserved"}
                      </Badge>
                    </div>
                    <Button size="sm" className="w-full" disabled={!book.available}>
                      {book.available ? "Reserve" : "Join Waitlist"}
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
