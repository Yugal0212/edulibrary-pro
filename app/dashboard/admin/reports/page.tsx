import DashboardLayout from "@/app/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Calendar, Filter, BarChart3, Users, BookOpen, TrendingUp } from "lucide-react"

export default function AdminReportsPage() {
  const reports = [
    {
      title: "Monthly Circulation Report",
      description: "Detailed analysis of book borrowing patterns",
      type: "circulation",
      lastGenerated: "2024-01-28",
      icon: BookOpen,
    },
    {
      title: "User Activity Report",
      description: "Member engagement and usage statistics",
      type: "users",
      lastGenerated: "2024-01-27",
      icon: Users,
    },
    {
      title: "Financial Summary",
      description: "Revenue, fines, and financial overview",
      type: "financial",
      lastGenerated: "2024-01-26",
      icon: TrendingUp,
    },
    {
      title: "Inventory Report",
      description: "Book catalog status and availability",
      type: "inventory",
      lastGenerated: "2024-01-25",
      icon: BarChart3,
    },
  ]

  return (
    <DashboardLayout userRole="admin" userName="Admin User">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
            <p className="text-gray-600 mt-2">Generate and download comprehensive library reports</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-red-600 hover:bg-red-700">
              <FileText className="h-4 w-4 mr-2" />
              New Report
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">156</p>
                <p className="text-sm text-gray-600">Reports Generated</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">89%</p>
                <p className="text-sm text-gray-600">Automation Rate</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">24</p>
                <p className="text-sm text-gray-600">Scheduled Reports</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">12</p>
                <p className="text-sm text-gray-600">Custom Templates</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Available Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Available Reports</CardTitle>
            <CardDescription>
              Generate comprehensive reports for different aspects of library operations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {reports.map((report) => {
                const IconComponent = report.icon
                return (
                  <Card key={report.title} className="border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{report.title}</h3>
                          <p className="text-gray-600 text-sm mb-4">{report.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Last: {report.lastGenerated}</span>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Calendar className="h-3 w-3 mr-1" />
                                Schedule
                              </Button>
                              <Button size="sm">
                                <Download className="h-3 w-3 mr-1" />
                                Generate
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>Recently generated reports available for download</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "January 2024 Circulation Report",
                  type: "PDF",
                  size: "2.4 MB",
                  date: "2024-01-28",
                  status: "Ready",
                },
                {
                  name: "User Activity Summary Q4 2023",
                  type: "Excel",
                  size: "1.8 MB",
                  date: "2024-01-27",
                  status: "Ready",
                },
                {
                  name: "Financial Report December 2023",
                  type: "PDF",
                  size: "3.1 MB",
                  date: "2024-01-26",
                  status: "Processing",
                },
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">{report.name}</p>
                      <p className="text-sm text-gray-600">
                        {report.type} • {report.size} • {report.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        report.status === "Ready" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {report.status}
                    </span>
                    <Button size="sm" variant="outline" disabled={report.status !== "Ready"}>
                      <Download className="h-3 w-3 mr-1" />
                      Download
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
