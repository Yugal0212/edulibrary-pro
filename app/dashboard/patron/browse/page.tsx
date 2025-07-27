import DashboardLayout from "@/app/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Search, Filter, Star, Heart, Calendar } from "lucide-react"

export default function PatronBrowsePage() {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Fiction",
      rating: 4.5,
      available: true,
      description: "A classic American novel set in the Jazz Age...",
      coverUrl: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
      rating: 4.8,
      available: true,
      description: "A gripping tale of racial injustice and childhood innocence...",
      coverUrl: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      category: "Dystopian",
      rating: 4.6,
      available: false,
      description: "A dystopian social science fiction novel...",
      coverUrl: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Romance",
      rating: 4.7,
      available: true,
      description: "A romantic novel of manners...",
      coverUrl: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      category: "Fiction",
      rating: 4.2,
      available: true,
      description: "A controversial novel about teenage rebellion...",
      coverUrl: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 6,
      title: "Lord of the Flies",
      author: "William Golding",
      category: "Adventure",
      rating: 4.1,
      available: false,
      description: "A novel about a group of British boys stranded on an island...",
      coverUrl: "/placeholder.svg?height=200&width=150",
    },
  ]

  const categories = ["All", "Fiction", "Non-Fiction", "Romance", "Mystery", "Science", "History", "Biography"]

  return (
    <DashboardLayout userRole="patron" userName="John Patron">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Browse Books</h1>
            <p className="text-gray-600 mt-2">Discover and reserve books from our collection</p>
          </div>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search books by title, author, or ISBN..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filters
              </Button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={category === "All" ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book) => (
            <Card key={book.id} className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img
                    src={book.coverUrl || "/placeholder.svg"}
                    alt={book.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  {!book.available && (
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                      <Badge variant="secondary" className="bg-white text-gray-900">
                        Not Available
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 line-clamp-2">{book.title}</h3>
                  <p className="text-sm text-gray-600">by {book.author}</p>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{book.rating}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {book.category}
                    </Badge>
                  </div>

                  <p className="text-xs text-gray-600 line-clamp-2">{book.description}</p>

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1" disabled={!book.available}>
                      {book.available ? (
                        <>
                          <BookOpen className="h-3 w-3 mr-1" />
                          Reserve
                        </>
                      ) : (
                        <>
                          <Calendar className="h-3 w-3 mr-1" />
                          Join Waitlist
                        </>
                      )}
                    </Button>
                    <Button size="sm" variant="outline">
                      Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Books
          </Button>
        </div>
      </div>
    </DashboardLayout>
  )
}
