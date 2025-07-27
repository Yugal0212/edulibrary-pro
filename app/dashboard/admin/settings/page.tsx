import DashboardLayout from "@/app/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Settings, Save, Database, Mail, Shield, Bell } from "lucide-react"

export default function AdminSettingsPage() {
  return (
    <DashboardLayout userRole="admin" userName="Admin User">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
            <p className="text-gray-600 mt-2">Configure system-wide settings and preferences</p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Settings Navigation */}
          <div className="space-y-2">
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start bg-red-50 text-red-600">
                    <Settings className="h-4 w-4 mr-2" />
                    General Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Database className="h-4 w-4 mr-2" />
                    Database Config
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Shield className="h-4 w-4 mr-2" />
                    Security
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Bell className="h-4 w-4 mr-2" />
                    Notifications
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* General Settings */}
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Basic library system configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="libraryName">Library Name</Label>
                    <Input id="libraryName" defaultValue="Central Public Library" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="libraryCode">Library Code</Label>
                    <Input id="libraryCode" defaultValue="CPL001" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Library Address</Label>
                  <Textarea id="address" defaultValue="123 Main Street, City, State 12345" className="mt-1" rows={3} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Contact Email</Label>
                    <Input id="email" defaultValue="info@library.com" className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="timezone">Timezone</Label>
                    <Input id="timezone" defaultValue="America/New_York" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="currency">Currency</Label>
                    <Input id="currency" defaultValue="USD" className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Loan Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Loan Settings</CardTitle>
                <CardDescription>Configure book borrowing rules and policies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="loanPeriod">Default Loan Period (days)</Label>
                    <Input id="loanPeriod" type="number" defaultValue="14" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="renewalLimit">Renewal Limit</Label>
                    <Input id="renewalLimit" type="number" defaultValue="2" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="maxBooks">Max Books per User</Label>
                    <Input id="maxBooks" type="number" defaultValue="5" className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="finePerDay">Fine per Day ($)</Label>
                    <Input id="finePerDay" type="number" step="0.01" defaultValue="0.50" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="maxFine">Maximum Fine ($)</Label>
                    <Input id="maxFine" type="number" step="0.01" defaultValue="10.00" className="mt-1" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="autoRenewal">Enable Auto-Renewal</Label>
                      <p className="text-sm text-gray-600">Automatically renew books if no holds exist</p>
                    </div>
                    <Switch id="autoRenewal" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailReminders">Email Reminders</Label>
                      <p className="text-sm text-gray-600">Send email reminders for due dates</p>
                    </div>
                    <Switch id="emailReminders" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="allowReservations">Allow Reservations</Label>
                      <p className="text-sm text-gray-600">Users can reserve books that are checked out</p>
                    </div>
                    <Switch id="allowReservations" defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Features */}
            <Card>
              <CardHeader>
                <CardTitle>System Features</CardTitle>
                <CardDescription>Enable or disable system features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="selfRegistration">Self Registration</Label>
                    <p className="text-sm text-gray-600">Allow users to register themselves as patrons</p>
                  </div>
                  <Switch id="selfRegistration" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="onlinePayments">Online Fine Payments</Label>
                    <p className="text-sm text-gray-600">Enable online payment for fines</p>
                  </div>
                  <Switch id="onlinePayments" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="bookReviews">Book Reviews</Label>
                    <p className="text-sm text-gray-600">Allow users to write book reviews</p>
                  </div>
                  <Switch id="bookReviews" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="socialFeatures">Social Features</Label>
                    <p className="text-sm text-gray-600">Enable reading lists and recommendations</p>
                  </div>
                  <Switch id="socialFeatures" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
