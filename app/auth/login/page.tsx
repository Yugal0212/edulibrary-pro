"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BookOpen, Shield, Users, UserCheck, Eye, EyeOff, ArrowRight, Sparkles, Library, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const handleLogin = async (role: string) => {
    setIsLoading(true)
    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1500))
    router.push(`/dashboard/${role}`)
  }

  const handleQuickLogin = (role: string) => {
    // Demo credentials for quick access
    const demoCredentials = {
      admin: { email: "admin@edulibrary.com", password: "admin123" },
      librarian: { email: "librarian@edulibrary.com", password: "lib123" },
      patron: { email: "patron@edulibrary.com", password: "patron123" },
    }

    setLoginData(demoCredentials[role as keyof typeof demoCredentials])
    setTimeout(() => handleLogin(role), 500)
  }

  const roles = [
    {
      id: "admin",
      title: "Administrator",
      description: "System management and user control",
      icon: Shield,
      color: "red",
      gradient: "from-red-500 to-pink-500",
    },
    {
      id: "librarian",
      title: "Librarian",
      description: "Book and member management",
      icon: BookOpen,
      color: "green",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: "patron",
      title: "Patron",
      description: "Browse and reserve books",
      icon: Users,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="w-full max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center space-x-3 mb-6 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <Library className="h-6 w-6 text-white group-hover:animate-bounce" />
              </div>
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-500 animate-ping" />
            </div>
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                EduLibrary Pro
              </span>
              <div className="flex items-center space-x-1">
                <Award className="h-3 w-3 text-yellow-500" />
                <span className="text-xs text-gray-600">Premium Edition</span>
              </div>
            </div>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome Back</h1>
          <p className="text-xl text-gray-600">Sign in to access your library dashboard</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Login Form */}
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Sign In</CardTitle>
              <CardDescription>Enter your credentials to continue</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="form" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="form">Login Form</TabsTrigger>
                  <TabsTrigger value="demo">Quick Demo</TabsTrigger>
                </TabsList>

                <TabsContent value="form" className="space-y-6">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleLogin("patron")
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={loginData.email}
                        onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="Enter your email"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="password">Password</Label>
                      <div className="relative mt-1">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={loginData.password}
                          onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                          placeholder="Enter your password"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-600">Remember me</span>
                      </label>
                      <Link href="/auth/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-700">
                        Forgot password?
                      </Link>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing In..." : "Sign In"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="demo" className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <UserCheck className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-blue-800">Demo Access</span>
                    </div>
                    <p className="text-sm text-blue-700">
                      Click any role below for instant demo access with sample data
                    </p>
                  </div>

                  <div className="space-y-3">
                    {roles.map((role) => {
                      const IconComponent = role.icon
                      return (
                        <Button
                          key={role.id}
                          variant="outline"
                          className="w-full justify-start h-auto p-4 hover:shadow-lg transform hover:scale-105 transition-all duration-300 bg-transparent"
                          onClick={() => handleQuickLogin(role.id)}
                          disabled={isLoading}
                        >
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${role.gradient} mr-4`}>
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div className="text-left">
                            <div className="font-medium">{role.title} Demo</div>
                            <div className="text-sm text-gray-600">{role.description}</div>
                          </div>
                        </Button>
                      )
                    })}
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/auth/signup" className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Sign up here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Role Information */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Experience</h2>
              <p className="text-gray-600">Different roles provide different levels of access and functionality</p>
            </div>

            <div className="space-y-4">
              {roles.map((role, index) => {
                const IconComponent = role.icon
                return (
                  <Card
                    key={role.id}
                    className="border-2 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${role.gradient} flex-shrink-0`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{role.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">{role.description}</p>
                          <div className="space-y-1">
                            {role.id === "admin" && (
                              <>
                                <div className="flex items-center text-xs text-gray-500">
                                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                                  User management & system control
                                </div>
                                <div className="flex items-center text-xs text-gray-500">
                                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                                  Analytics & reporting dashboard
                                </div>
                              </>
                            )}
                            {role.id === "librarian" && (
                              <>
                                <div className="flex items-center text-xs text-gray-500">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                  Book catalog management
                                </div>
                                <div className="flex items-center text-xs text-gray-500">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                  Member registration & circulation
                                </div>
                              </>
                            )}
                            {role.id === "patron" && (
                              <>
                                <div className="flex items-center text-xs text-gray-500">
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                                  Browse & search book catalog
                                </div>
                                <div className="flex items-center text-xs text-gray-500">
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                                  Reserve books & track history
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Additional Info */}
            <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-indigo-900 mb-3">New to EduLibrary Pro?</h3>
                <p className="text-indigo-700 text-sm mb-4">
                  Join thousands of users who trust EduLibrary Pro for their library management needs. Get started with
                  a patron account for instant access, or apply for librarian privileges.
                </p>
                <Link href="/auth/signup">
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300">
                    Create Account
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
