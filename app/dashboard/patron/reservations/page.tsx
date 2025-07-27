import DashboardLayout from "@/app/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, X, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function PatronReservationsPage() {
  const reservations = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      reservedDate: "2024-01-25",
      estimatedAvailable: "2024-02-05",
      position: 1,
      status: "ready",
      coverUrl: "/placeholder.svg?height=120&width=80",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      reservedDate: "2024-01-20",
      estimatedAvailable: "2024-02-10",
      position: 3,
      status: "waiting",
      coverUrl: "/placeholder.svg?height=120&width=80",
    },
    {
      id: 3,
      title: "Lord of the Flies",
      author: "William Golding",
      reservedDate: "2024-01-22",
      estimatedAvailable: "2024-02-15",
      position: 2,
      status: "waiting",
      coverUrl: "/placeholder.svg?height=120&width=80",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ready":
        return "bg-green-100 text-green-800"
      case "waiting":
        return "bg-yellow-100 text-yellow-800"
      case "expired":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <DashboardLayout userRole="patron" userName="John Patron">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Reservations</h1>
            <p className="text-gray-600 mt-2">Track your book reservations and waitlist status</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Reservations</p>
                  <p className="text-3xl font-bold text-gray-900">3</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Ready to Pickup</p>
                  <p className="text-3xl font-bold text-green-600">1</p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">In Queue</p>
                  <p className="text-3xl font-bold text-yellow-600">2</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reservations List */}
        <Card>
          <CardHeader>
            <CardTitle>Current Reservations</CardTitle>
            <CardDescription>Your active book reservations and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reservations.map((reservation) => (
                <div key={reservation.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={reservation.coverUrl || "/placeholder.svg"}
                    alt={reservation.title}
                    className="w-16 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{reservation.title}</h4>
                    <p className="text-sm text-gray-600">by {reservation.author}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>Reserved: {reservation.reservedDate}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>Est. Available: {reservation.estimatedAvailable}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Badge className={getStatusColor(reservation.status)}>
                      {reservation.status === "ready" ? "Ready for Pickup" : `Position ${reservation.position}`}
                    </Badge>
                    {reservation.status === "ready" && (
                      <p className="text-xs text-green-600 mt-1">Available until Feb 7</p>
                    )}
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <X className="h-4 w-4 mr-2" />
                        Cancel Reservation
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Reservation Tips */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="font-semibold text-blue-900 mb-3">Reservation Tips</h3>
            <div className="space-y-2 text-blue-800 text-sm">
              <p>• You'll receive an email notification when your reserved book is ready</p>
              <p>• Reserved books are held for 3 days after becoming available</p>
              <p>• You can cancel reservations at any time before pickup</p>
              <p>• Check your position in the queue to estimate wait time</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
