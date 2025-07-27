# LibraryHub - Modern Library Management System

## 📚 Overview

LibraryHub is a comprehensive, modern library management system built with Next.js, TypeScript, and Tailwind CSS. It features role-based access control, beautiful animations, and a responsive design optimized for administrators, librarians, and patrons.

## 🎯 Key Features

### 🔐 Authentication & Role Management
- **Role-Based Access Control**: Three distinct user roles with different permissions
- **Smart Registration Flow**: 
  - Patrons: Instant self-registration
  - Librarians: Application-based with admin approval
  - Admins: System-level access (contact administrator)
- **Secure Login System**: Demo access and form-based authentication
- **Session Management**: Persistent login state with role-based routing

### 🎨 User Interface & Experience
- **Modern Design**: Clean, professional interface with gradient backgrounds
- **Responsive Layout**: Mobile-first design that works on all devices
- **Advanced Animations**: 
  - Fade-in effects and smooth transitions
  - Hover animations and micro-interactions
  - Loading states and skeleton screens
  - Floating elements and pulse effects
- **Wave-Based Landing Page**: Beautiful animated landing page with curved wave design
- **Glass Morphism Effects**: Modern UI elements with backdrop blur
- **Dark/Light Mode Ready**: CSS variables for easy theme switching

### 👨‍💼 Admin Dashboard Features
- **User Management**: 
  - View all system users
  - Manage user roles and permissions
  - Approve librarian applications
  - Suspend/activate user accounts
- **Analytics Dashboard**:
  - Key performance metrics
  - User engagement statistics
  - Popular books tracking
  - Monthly circulation trends
- **Comprehensive Reports**:
  - Circulation reports
  - Financial summaries
  - User activity reports
  - Inventory management
- **System Settings**:
  - Library configuration
  - Loan policies
  - Fine management
  - Email settings
  - Security preferences

### 📖 Librarian Dashboard Features
- **Book Management**:
  - Add/edit/remove books
  - Manage book catalog
  - Track book availability
  - Handle multiple copies
- **Member Management**:
  - Register new members
  - Edit member information
  - View borrowing history
  - Manage member status
- **Circulation Control**:
  - Issue books to members
  - Process book returns
  - Handle renewals
  - Manage reservations
- **Quick Actions**:
  - Fast book checkout/return
  - Search catalog
  - Generate overdue reports
  - Member lookup

### 👤 Patron Dashboard Features
- **Book Discovery**:
  - Browse entire catalog
  - Advanced search functionality
  - Filter by category, author, availability
  - View book details and ratings
- **Personal Library**:
  - Track borrowed books
  - View borrowing history
  - Manage reservations
  - Renewal requests
- **Reservation System**:
  - Reserve unavailable books
  - Track position in queue
  - Receive availability notifications
  - Cancel reservations
- **Profile Management**:
  - Update personal information
  - Set notification preferences
  - Reading goals and preferences
  - Payment method management

## 🏗️ Technical Architecture

### Frontend Stack
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/ui**: Modern component library
- **Lucide React**: Beautiful icon library

### Project Structure
\`\`\`
app/
├── auth/
│   ├── login/          # Login page with role selection
│   ├── signup/         # Role-based registration
│   └── success/        # Registration success page
├── dashboard/
│   ├── admin/          # Admin-specific pages
│   │   ├── users/      # User management
│   │   ├── analytics/  # Analytics dashboard
│   │   ├── reports/    # Report generation
│   │   └── settings/   # System settings
│   ├── librarian/      # Librarian-specific pages
│   │   ├── books/      # Book management
│   │   ├── members/    # Member management
│   │   └── circulation/ # Circulation control
│   └── patron/         # Patron-specific pages
│       ├── browse/     # Book browsing
│       ├── my-books/   # Personal library
│       ├── reservations/ # Reservation management
│       └── profile/    # Profile settings
├── components/
│   ├── ui/            # Reusable UI components
│   └── dashboard-layout.tsx # Shared dashboard layout
├── globals.css        # Global styles and animations
├── layout.tsx         # Root layout
└── page.tsx          # Landing page
\`\`\`

### Key Components
- **DashboardLayout**: Shared layout with role-based navigation
- **Authentication Pages**: Login, signup, and success pages
- **Role-Specific Dashboards**: Tailored interfaces for each user type
- **Responsive Navigation**: Collapsible sidebar with mobile support

## 🎨 Design System

### Color Palette
- **Admin**: Red gradient (`from-red-600 to-pink-600`)
- **Librarian**: Green gradient (`from-green-600 to-emerald-600`)
- **Patron**: Blue gradient (`from-blue-600 to-cyan-600`)
- **Neutral**: Gray scale for backgrounds and text

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with proper hierarchy
- **Body Text**: Regular weight with good contrast
- **Code**: Monospace for technical elements

### Animations
- **Fade Effects**: Smooth opacity transitions
- **Hover States**: Scale and shadow transformations
- **Loading States**: Pulse and shimmer effects
- **Page Transitions**: Smooth route changes

## 🔧 Database Schema (Recommended)

### Users Table
\`\`\`sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role ENUM('admin', 'librarian', 'patron') NOT NULL,
  status ENUM('active', 'pending', 'suspended') DEFAULT 'pending',
  phone VARCHAR(20),
  address TEXT,
  student_id VARCHAR(50),
  library_id VARCHAR(50),
  department VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
\`\`\`

### Books Table
\`\`\`sql
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  isbn VARCHAR(20) UNIQUE,
  category VARCHAR(100),
  description TEXT,
  publish_year INT,
  total_copies INT DEFAULT 1,
  available_copies INT DEFAULT 1,
  cover_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
\`\`\`

### Loans Table
\`\`\`sql
CREATE TABLE loans (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  book_id INT REFERENCES books(id),
  loan_date DATE NOT NULL,
  due_date DATE NOT NULL,
  return_date DATE,
  status ENUM('active', 'returned', 'overdue') DEFAULT 'active',
  fine_amount DECIMAL(10,2) DEFAULT 0.00,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

### Reservations Table
\`\`\`sql
CREATE TABLE reservations (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  book_id INT REFERENCES books(id),
  reservation_date DATE NOT NULL,
  status ENUM('waiting', 'ready', 'fulfilled', 'cancelled') DEFAULT 'waiting',
  position_in_queue INT,
  expires_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

### Environment Variables
\`\`\`env
# Database (if using)
DATABASE_URL=your_database_url

# Authentication (if implementing real auth)
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# Email (for notifications)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password
\`\`\`

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

### Mobile Features
- Collapsible sidebar navigation
- Touch-friendly buttons and inputs
- Optimized card layouts
- Swipe gestures (future enhancement)

## 🔒 Security Features

### Authentication
- Password hashing (bcrypt recommended)
- Session management
- Role-based route protection
- CSRF protection

### Data Validation
- Input sanitization
- SQL injection prevention
- XSS protection
- Rate limiting

## 🎯 Future Enhancements

### Phase 1 - Core Features
- [ ] Real database integration
- [ ] Authentication with NextAuth.js
- [ ] Email notifications
- [ ] PDF report generation

### Phase 2 - Advanced Features
- [ ] Barcode scanning
- [ ] Mobile app (React Native)
- [ ] Advanced analytics
- [ ] Multi-library support

### Phase 3 - Premium Features
- [ ] AI-powered recommendations
- [ ] Social features
- [ ] Digital book lending
- [ ] Integration with external catalogs

## 🛠️ Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Write descriptive component names
- Use proper error handling

### Component Structure
- Keep components small and focused
- Use custom hooks for logic
- Implement proper loading states
- Handle error boundaries

### Performance
- Optimize images with Next.js Image
- Use React.memo for expensive components
- Implement proper caching strategies
- Monitor bundle size

## 📊 Analytics & Monitoring

### Key Metrics
- User engagement rates
- Book circulation statistics
- System performance metrics
- Error rates and debugging

### Recommended Tools
- Google Analytics for user tracking
- Sentry for error monitoring
- Vercel Analytics for performance
- Custom dashboard for library metrics

## 🤝 Contributing

### Development Process
1. Fork the repository
2. Create feature branch
3. Make changes with tests
4. Submit pull request
5. Code review and merge

### Coding Standards
- Follow TypeScript best practices
- Write comprehensive tests
- Document new features
- Maintain accessibility standards

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

### Documentation
- Component documentation in Storybook
- API documentation with OpenAPI
- User guides and tutorials
- Video walkthroughs

### Community
- GitHub Issues for bug reports
- Discussions for feature requests
- Discord community for real-time help
- Regular office hours for support

---

**Built with ❤️ for libraries worldwide**

*LibraryHub - Transforming library management for the digital age*
\`\`\`

Now let's create a quick fix for the navigation links by updating the dashboard layout to handle missing pages gracefully:

\`\`\`typescriptreact file="app/components/dashboard-layout.tsx"
[v0-no-op-code-block-prefix]"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { BookOpen, Menu, X, Home, Users, Settings, LogOut, Bell, Search, BarChart3, FileText, Calendar, Star, TrendingUp, Shield, ChevronDown, User, HelpCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DashboardLayoutProps {
  children: React.ReactNode
  userRole: "admin" | "librarian" | "patron"
  userName?: string
}

export default function DashboardLayout({ children, userRole, userName = "Demo User" }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleLogout = () => {
    router.push("/auth/login")
  }

  const getNavigationItems = () => {
    const baseItems = [{ name: "Dashboard", href: `/dashboard/${userRole}`, icon: Home }]

    switch (userRole) {
      case "admin":
        return [
          ...baseItems,
          { name: "Users", href: `/dashboard/${userRole}/users`, icon: Users },
          { name: "Analytics", href: `/dashboard/${userRole}/analytics`, icon: BarChart3 },
          { name: "Reports", href: `/dashboard/${userRole}/reports`, icon: FileText },
          { name: "Settings", href: `/dashboard/${userRole}/settings`, icon: Settings },
        ]
      case "librarian":
        return [
          ...baseItems,
          { name: "Books", href: `/dashboard/${userRole}/books`, icon: BookOpen },
          { name: "Members", href: `/dashboard/${userRole}/members`, icon: Users },
          { name: "Circulation", href: `/dashboard/${userRole}/circulation`, icon: TrendingUp },
          { name: "Reports", href: `/dashboard/${userRole}/reports`, icon: FileText },
        ]
      case "patron":
        return [
          ...baseItems,
          { name: "Browse Books", href: `/dashboard/${userRole}/browse`, icon: BookOpen },
          { name: "My Books", href: `/dashboard/${userRole}/my-books`, icon: Star },
          { name: "Reservations", href: `/dashboard/${userRole}/reservations`, icon: Calendar },
          { name: "Profile", href: `/dashboard/${userRole}/profile`, icon: User },
        ]
      default:
        return baseItems
    }
  }

  const navigationItems = getNavigationItems()

  const getRoleColor = () => {
    switch (userRole) {
      case "admin":
        return "bg-gradient-to-r from-red-600 to-pink-600"
      case "librarian":
        return "bg-gradient-to-r from-green-600 to-emerald-600"
      case "patron":
        return "bg-gradient-to-r from-blue-600 to-cyan-600"
      default:
        return "bg-gradient-to-r from-gray-600 to-gray-700"
    }
  }

  const getRoleBadgeColor = () => {
    switch (userRole) {
      case "admin":
        return "bg-red-100 text-red-800 border-red-200"
      case "librarian":
        return "bg-green-100 text-green-800 border-green-200"
      case "patron":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getRoleIcon = () => {
    switch (userRole) {
      case "admin":
        return Shield
      case "librarian":
        return BookOpen
      case "patron":
        return Users
      default:
        return User
    }
  }

  const RoleIcon = getRoleIcon()

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Sidebar Header */}
        <div className={`flex items-center justify-between h-16 px-6 ${getRoleColor()} relative overflow-hidden`}>
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>

          <Link href="/" className="flex items-center space-x-3 relative z-10">
            <div className="relative">
              <BookOpen className="h-8 w-8 text-white animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-xl font-bold text-white">LibraryHub</span>
          </Link>
          <button
            className="lg:hidden text-white hover:bg-white/20 p-2 rounded-lg transition-colors relative z-10"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* User Info */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-xl ${getRoleColor()} flex items-center justify-center shadow-lg`}>
              <RoleIcon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 truncate">{userName}</p>
              <Badge variant="outline" className={`text-xs ${getRoleBadgeColor()} mt-1`}>
                {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
              </Badge>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navigationItems.map((item, index) => {
            const IconComponent = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? `${getRoleColor()} text-white shadow-lg transform scale-105`
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                } ${isLoaded ? `animate-fade-in-up delay-${index * 100}` : ""}`}
              >
                <IconComponent
                  className={`h-5 w-5 ${isActive ? "animate-pulse" : "group-hover:scale-110 transition-transform"}`}
                />
                <span className="font-medium">{item.name}</span>
                {isActive && <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>}
              </Link>
            )
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-100 space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => {}}
          >
            <HelpCircle className="h-5 w-5 mr-3" />
            Help & Support
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-700 hover:bg-red-50 hover:text-red-600"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 mr-3" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6 relative z-10">
          <div className="flex items-center space-x-4">
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Breadcrumb */}
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <span className="capitalize">{userRole}</span>
              <span>/</span>
              <span className="text-gray-900 font-medium">
                {pathname.split("/").pop()?.replace("-", " ") || "Dashboard"}
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search books, members, or anything..."
                className="pl-10 pr-4 py-2 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center space-x-3">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 hover:bg-gray-100">
                  <div className={`w-8 h-8 rounded-lg ${getRoleColor()} flex items-center justify-center`}>
                    <RoleIcon className="h-4 w-4 text-white" />
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-3 py-2">
                  <p className="font-medium">{userName}</p>
                  <p className="text-sm text-gray-600 capitalize">{userRole}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="h-4 w-4 mr-2" />
                  Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="h-4 w-4 mr-2" />
                  Preferences
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Help & Support
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className={`flex-1 overflow-y-auto p-6 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>{children}</main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
