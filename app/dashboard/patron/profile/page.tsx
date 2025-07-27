import DashboardLayout from "@/app/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { User, Mail, Phone, MapPin, Save, Bell, Book, CreditCard } from "lucide-react"

export default function PatronProfilePage() {
  return (
    <DashboardLayout userRole="patron" userName="John Patron">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
            <p className="text-gray-600 mt-2">Manage your account settings and preferences</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Navigation */}
          <div className="space-y-2">
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start bg-blue-50 text-blue-600">
                    <User className="h-4 w-4 mr-2" />
                    Personal Info
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Bell className="h-4 w-4 mr-2" />
                    Notifications
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Book className="h-4 w-4 mr-2" />
                    Reading Preferences
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Payment Methods
                  </Button>
                </nav>
              </CardContent>
            </Card>

            {/* Account Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Account Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Member Since</span>
                  <span className="font-medium">Jan 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Books Borrowed</span>
                  <span className="font-medium">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Fines</span>
                  <span className="font-medium text-green-600">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Membership Status</span>
                  <span className="font-medium text-green-600">Active</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details and contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Patron" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input id="email" defaultValue="john.patron@email.com" className="pl-10" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input id="phone" defaultValue="+1 (555) 123-4567" className="pl-10" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <div className="relative mt-1">
                    <MapPin className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                    <Textarea
                      id="address"
                      defaultValue="123 Main Street, Apartment 4B, City, State 12345"
                      className="pl-10"
                      rows={3}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input id="dateOfBirth" type="date" defaultValue="1990-01-01" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="studentId">Student ID (Optional)</Label>
                    <Input id="studentId" defaultValue="STU123456" className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notification Preferences */}
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailNotifications">Email Notifications</Label>
                      <p className="text-sm text-gray-600">Receive notifications via email</p>
                    </div>
                    <Switch id="emailNotifications" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="dueDateReminders">Due Date Reminders</Label>
                      <p className="text-sm text-gray-600">Get reminded when books are due</p>
                    </div>
                    <Switch id="dueDateReminders" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="reservationAlerts">Reservation Alerts</Label>
                      <p className="text-sm text-gray-600">Notifications when reserved books are available</p>
                    </div>
                    <Switch id="reservationAlerts" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="newBookAlerts">New Book Alerts</Label>
                      <p className="text-sm text-gray-600">Get notified about new book arrivals</p>
                    </div>
                    <Switch id="newBookAlerts" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="recommendations">Personalized Recommendations</Label>
                      <p className="text-sm text-gray-600">
                        Receive book recommendations based on your reading history
                      </p>
                    </div>
                    <Switch id="recommendations" defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reading Preferences */}
            <Card>
              <CardHeader>
                <CardTitle>Reading Preferences</CardTitle>
                <CardDescription>Help us recommend books you'll love</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="favoriteGenres">Favorite Genres</Label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {[
                      "Fiction",
                      "Mystery",
                      "Romance",
                      "Science Fiction",
                      "Biography",
                      "History",
                      "Self-Help",
                      "Fantasy",
                      "Thriller",
                    ].map((genre) => (
                      <label key={genre} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded"
                          defaultChecked={["Fiction", "Mystery", "Science Fiction"].includes(genre)}
                        />
                        <span className="text-sm">{genre}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="readingGoal">Annual Reading Goal</Label>
                  <Input
                    id="readingGoal"
                    type="number"
                    defaultValue="24"
                    className="mt-1"
                    placeholder="Number of books"
                  />
                  <p className="text-sm text-gray-600 mt-1">You've read 8 books so far this year!</p>
                </div>

                <div>
                  <Label htmlFor="favoriteAuthors">Favorite Authors</Label>
                  <Textarea
                    id="favoriteAuthors"
                    defaultValue="Agatha Christie, Isaac Asimov, Jane Austen"
                    className="mt-1"
                    rows={2}
                    placeholder="List your favorite authors..."
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
