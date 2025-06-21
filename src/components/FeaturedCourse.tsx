"use client"

import { Star, BookOpen, Users, Play, Clock, Award, TrendingUp, Zap, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"


export default function FeaturedCourse() {
    return (
        <section className="relative min-h-screen bg-[#F7FAFC] py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 header-animation">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2D3748]">
                        📚{" "}
                        <span className="bg-gradient-to-r from-[#5B7CFA] to-[#4DD0E1] bg-clip-text text-transparent">
                            Featured Courses
                        </span>
                    </h2>
                    <p className="text-lg text-[#718096] max-w-2xl mx-auto">
                        Discover our most popular courses and start your learning journey today
                    </p>

                    {/* Stats */}
                    <div className="flex flex-col sm:flex-row justify-center gap-8 mt-12">
                        <Card className="text-center p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300 stats-card">
                            <CardContent className="p-0">
                                <div className="text-2xl font-bold bg-gradient-to-r from-[#5B7CFA] to-[#4DD0E1] bg-clip-text text-transparent mb-1">
                                    50,000+
                                </div>
                                <div className="text-sm text-[#718096] font-medium">Students</div>
                            </CardContent>
                        </Card>
                        <Card className="text-center p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300 stats-card">
                            <CardContent className="p-0">
                                <div className="text-2xl font-bold bg-gradient-to-r from-[#5B7CFA] to-[#4DD0E1] bg-clip-text text-transparent mb-1">
                                    150+
                                </div>
                                <div className="text-sm text-[#718096] font-medium">Courses</div>
                            </CardContent>
                        </Card>
                        <Card className="text-center p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300 stats-card">
                            <CardContent className="p-0">
                                <div className="text-2xl font-bold bg-gradient-to-r from-[#5B7CFA] to-[#4DD0E1] bg-clip-text text-transparent mb-1">
                                    4.8
                                </div>
                                <div className="text-sm text-[#718096] font-medium">Rating</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="popular" className="w-full">
                    <div className="flex justify-center mb-12 tabs-animation">
                        <TabsList className="grid w-full max-w-md grid-cols-3 bg-white border border-[#E2E8F0] shadow-sm h-auto p-1">
                            <TabsTrigger
                                value="popular"
                                className="flex items-center gap-2 py-2.5 px-4 text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#5B7CFA] data-[state=active]:to-[#4DD0E1] data-[state=active]:text-white transition-all duration-200"
                            >
                                <TrendingUp className="h-4 w-4" />
                                <span className="hidden sm:inline">Most Popular</span>
                                <span className="sm:hidden">Popular</span>
                                <Badge variant="secondary" className="ml-1 text-xs px-1.5 py-0.5 bg-white/20 text-current border-0">
                                    4
                                </Badge>
                            </TabsTrigger>
                            <TabsTrigger
                                value="new"
                                className="flex items-center gap-2 py-2.5 px-4 text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#5B7CFA] data-[state=active]:to-[#4DD0E1] data-[state=active]:text-white transition-all duration-200"
                            >
                                <Zap className="h-4 w-4" />
                                <span className="hidden sm:inline">New Courses</span>
                                <span className="sm:hidden">New</span>
                                <Badge variant="secondary" className="ml-1 text-xs px-1.5 py-0.5 bg-white/20 text-current border-0">
                                    4
                                </Badge>
                            </TabsTrigger>
                            <TabsTrigger
                                value="free"
                                className="flex items-center gap-2 py-2.5 px-4 text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#5B7CFA] data-[state=active]:to-[#4DD0E1] data-[state=active]:text-white transition-all duration-200"
                            >
                                <Award className="h-4 w-4" />
                                <span className="hidden sm:inline">Free Courses</span>
                                <span className="sm:hidden">Free</span>
                                <Badge variant="secondary" className="ml-1 text-xs px-1.5 py-0.5 bg-white/20 text-current border-0">
                                    4
                                </Badge>
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="popular" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 courses-grid">
                            {/* Course Card 1 */}
                            <Card className="group relative overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 course-card">
                                <div className="relative">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            width={100}
                                            height={100}
                                            src="/placeholder.svg?height=200&width=300"
                                            alt="Complete React Development Course"
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#5B7CFA]/80 to-[#4DD0E1]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Button
                                                size="icon"
                                                className="rounded-full bg-white/95 hover:bg-white text-[#5B7CFA] shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300 ease-out"
                                            >
                                                <Play className="h-5 w-5" />
                                            </Button>
                                        </div>
                                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                                            <Badge className="bg-gradient-to-r from-[#5B7CFA] to-[#4DD0E1] text-white border-0 shadow-sm text-xs px-2 py-1">
                                                🔥
                                            </Badge>
                                            <Badge className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white border-0 shadow-sm text-xs px-2 py-1">
                                                Bestseller
                                            </Badge>
                                        </div>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 hover:bg-white text-[#718096] hover:text-[#FF6B6B] transition-colors duration-200 shadow-sm"
                                        >
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                        <div className="absolute bottom-3 right-3">
                                            <Badge className="text-xs px-2 py-1 text-white border-0 bg-gradient-to-r from-[#ED8936] to-[#F6AD55]">
                                                Intermediate
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <Badge
                                                variant="outline"
                                                className="text-xs px-2 py-1 text-[#5B7CFA] border-[#5B7CFA]/20 bg-[#5B7CFA]/5"
                                            >
                                                Frontend
                                            </Badge>
                                            <div className="flex items-center gap-1">
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`h-3 w-3 ${i < 4 ? "text-[#F6AD55] fill-[#F6AD55]" : "text-[#E2E8F0]"}`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-xs font-medium text-[#718096] ml-1">4.8</span>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#2D3748] mb-1 line-clamp-2 leading-tight group-hover:text-[#5B7CFA] transition-colors duration-200">
                                            Complete React Development Course
                                        </h3>
                                        <p className="text-sm text-[#718096] mb-4">by Sarah Johnson</p>
                                        <div className="mb-4">
                                            <div className="flex justify-between text-xs text-[#718096] mb-2">
                                                <span>Progress</span>
                                                <span>85%</span>
                                            </div>
                                            <Progress value={85} className="h-1.5 bg-[#E2E8F0]" />
                                        </div>
                                        <div className="flex gap-4 mb-4 text-xs text-[#718096]">
                                            <div className="flex items-center gap-1">
                                                <BookOpen className="h-3.5 w-3.5" />
                                                <span>45 lessons</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3.5 w-3.5" />
                                                <span>12h 30m</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="h-3.5 w-3.5" />
                                                <span>12,500</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl font-bold text-[#2D3748]">$89</span>
                                                <span className="text-sm text-[#A0AEC0] line-through">$129</span>
                                            </div>
                                            <Button
                                                size="sm"
                                                className="bg-gradient-to-r from-[#5B7CFA] to-[#4DD0E1] hover:from-[#5B7CFA]/90 hover:to-[#4DD0E1]/90 text-white shadow-sm border-0"
                                            >
                                                Enroll
                                            </Button>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>

                            {/* Course Card 2 */}
                            <Card className="group relative overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 course-card">
                                <div className="relative">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            width={100}
                                            height={100}
                                            src="/placeholder.svg?height=200&width=300"
                                            alt="Advanced JavaScript Mastery"
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#5B7CFA]/80 to-[#4DD0E1]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Button
                                                size="icon"
                                                className="rounded-full bg-white/95 hover:bg-white text-[#5B7CFA] shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300 ease-out"
                                            >
                                                <Play className="h-5 w-5" />
                                            </Button>
                                        </div>
                                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                                            <Badge className="bg-gradient-to-r from-[#5B7CFA] to-[#4DD0E1] text-white border-0 shadow-sm text-xs px-2 py-1">
                                                🔥
                                            </Badge>
                                            <Badge className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white border-0 shadow-sm text-xs px-2 py-1">
                                                Bestseller
                                            </Badge>
                                        </div>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 hover:bg-white text-[#718096] hover:text-[#FF6B6B] transition-colors duration-200 shadow-sm"
                                        >
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                        <div className="absolute bottom-3 right-3">
                                            <Badge className="text-xs px-2 py-1 text-white border-0 bg-gradient-to-r from-[#F56565] to-[#FC8181]">
                                                Advanced
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <Badge
                                                variant="outline"
                                                className="text-xs px-2 py-1 text-[#5B7CFA] border-[#5B7CFA]/20 bg-[#5B7CFA]/5"
                                            >
                                                Programming
                                            </Badge>
                                            <div className="flex items-center gap-1">
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`h-3 w-3 ${i < 5 ? "text-[#F6AD55] fill-[#F6AD55]" : "text-[#E2E8F0]"}`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-xs font-medium text-[#718096] ml-1">4.9</span>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#2D3748] mb-1 line-clamp-2 leading-tight group-hover:text-[#5B7CFA] transition-colors duration-200">
                                            Advanced JavaScript Mastery
                                        </h3>
                                        <p className="text-sm text-[#718096] mb-4">by Mike Chen</p>
                                        <div className="mb-4">
                                            <div className="flex justify-between text-xs text-[#718096] mb-2">
                                                <span>Progress</span>
                                                <span>92%</span>
                                            </div>
                                            <Progress value={92} className="h-1.5 bg-[#E2E8F0]" />
                                        </div>
                                        <div className="flex gap-4 mb-4 text-xs text-[#718096]">
                                            <div className="flex items-center gap-1">
                                                <BookOpen className="h-3.5 w-3.5" />
                                                <span>38 lessons</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3.5 w-3.5" />
                                                <span>10h 45m</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="h-3.5 w-3.5" />
                                                <span>8,900</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl font-bold text-[#2D3748]">$79</span>
                                                <span className="text-sm text-[#A0AEC0] line-through">$119</span>
                                            </div>
                                            <Button
                                                size="sm"
                                                className="bg-gradient-to-r from-[#5B7CFA] to-[#4DD0E1] hover:from-[#5B7CFA]/90 hover:to-[#4DD0E1]/90 text-white shadow-sm border-0"
                                            >
                                                Enroll
                                            </Button>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>

                            {/* Course Card 3 */}
                            <Card className="group relative overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 course-card">
                                <div className="relative">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            width={100}
                                            height={100}
                                            src="/placeholder.svg?height=200&width=300"
                                            alt="UI/UX Design Fundamentals"
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#5B7CFA]/80 to-[#4DD0E1]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Button
                                                size="icon"
                                                className="rounded-full bg-white/95 hover:bg-white text-[#5B7CFA] shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300 ease-out"
                                            >
                                                <Play className="h-5 w-5" />
                                            </Button>
                                        </div>
                                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                                            <Badge className="bg-gradient-to-r from-[#5B7CFA] to-[#4DD0E1] text-white border-0 shadow-sm text-xs px-2 py-1">
                                                🔥
                                            </Badge>
                                        </div>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 hover:bg-white text-[#718096] hover:text-[#FF6B6B] transition-colors duration-200 shadow-sm"
                                        >
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                        <div className="absolute bottom-3 right-3">
                                            <Badge className="text-xs px-2 py-1 text-white border-0 bg-gradient-to-r from-[#48BB78] to-[#68D391]">
                                                Beginner
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <Badge
                                                variant="outline"
                                                className="text-xs px-2 py-1 text-[#5B7CFA] border-[#5B7CFA]/20 bg-[#5B7CFA]/5"
                                            >
                                                Design
                                            </Badge>
                                            <div className="flex items-center gap-1">
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`h-3 w-3 ${i < 4 ? "text-[#F6AD55] fill-[#F6AD55]" : "text-[#E2E8F0]"}`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-xs font-medium text-[#718096] ml-1">4.7</span>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#2D3748] mb-1 line-clamp-2 leading-tight group-hover:text-[#5B7CFA] transition-colors duration-200">
                                            UI/UX Design Fundamentals
                                        </h3>
                                        <p className="text-sm text-[#718096] mb-4">by Emma Davis</p>
                                        <div className="mb-4">
                                            <div className="flex justify-between text-xs text-[#718096] mb-2">
                                                <span>Progress</span>
                                                <span>78%</span>
                                            </div>
                                            <Progress value={78} className="h-1.5 bg-[#E2E8F0]" />
                                        </div>
                                        <div className="flex gap-4 mb-4 text-xs text-[#718096]">
                                            <div className="flex items-center gap-1">
                                                <BookOpen className="h-3.5 w-3.5" />
                                                <span>32 lessons</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3.5 w-3.5" />
                                                <span>8h 20m</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="h-3.5 w-3.5" />
                                                <span>6,700</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl font-bold text-[#2D3748]">$69</span>
                                                <span className="text-sm text-[#A0AEC0] line-through">$99</span>
                                            </div>
                                            <Button
                                                size="sm"
                                                className="bg-gradient-to-r from-[#5B7CFA] to-[#4DD0E1] hover:from-[#5B7CFA]/90 hover:to-[#4DD0E1]/90 text-white shadow-sm border-0"
                                            >
                                                Enroll
                                            </Button>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>

                            {/* Course Card 4 */}
                            <Card className="group relative overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 course-card">
                                <div className="relative">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            width={100}
                                            height={100}
                                            src="/placeholder.svg?height=200&width=300"
                                            alt="Python for Data Science"
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#5B7CFA]/80 to-[#4DD0E1]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Button
                                                size="icon"
                                                className="rounded-full bg-white/95 hover:bg-white text-[#5B7CFA] shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300 ease-out"
                                            >
                                                <Play className="h-5 w-5" />
                                            </Button>
                                        </div>
                                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                                            <Badge className="bg-gradient-to-r from-[#5B7CFA] to-[#4DD0E1] text-white border-0 shadow-sm text-xs px-2 py-1">
                                                🔥
                                            </Badge>
                                            <Badge className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white border-0 shadow-sm text-xs px-2 py-1">
                                                Bestseller
                                            </Badge>
                                        </div>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 hover:bg-white text-[#718096] hover:text-[#FF6B6B] transition-colors duration-200 shadow-sm"
                                        >
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                        <div className="absolute bottom-3 right-3">
                                            <Badge className="text-xs px-2 py-1 text-white border-0 bg-gradient-to-r from-[#ED8936] to-[#F6AD55]">
                                                Intermediate
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <Badge
                                                variant="outline"
                                                className="text-xs px-2 py-1 text-[#5B7CFA] border-[#5B7CFA]/20 bg-[#5B7CFA]/5"
                                            >
                                                Data Science
                                            </Badge>
                                            <div className="flex items-center gap-1">
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`h-3 w-3 ${i < 4 ? "text-[#F6AD55] fill-[#F6AD55]" : "text-[#E2E8F0]"}`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-xs font-medium text-[#718096] ml-1">4.6</span>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#2D3748] mb-1 line-clamp-2 leading-tight group-hover:text-[#5B7CFA] transition-colors duration-200">
                                            Python for Data Science
                                        </h3>
                                        <p className="text-sm text-[#718096] mb-4">by Alex Rodriguez</p>
                                        <div className="mb-4">
                                            <div className="flex justify-between text-xs text-[#718096] mb-2">
                                                <span>Progress</span>
                                                <span>88%</span>
                                            </div>
                                            <Progress value={88} className="h-1.5 bg-[#E2E8F0]" />
                                        </div>
                                        <div className="flex gap-4 mb-4 text-xs text-[#718096]">
                                            <div className="flex items-center gap-1">
                                                <BookOpen className="h-3.5 w-3.5" />
                                                <span>52 lessons</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3.5 w-3.5" />
                                                <span>15h 10m</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="h-3.5 w-3.5" />
                                                <span>9,200</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl font-bold text-[#2D3748]">$99</span>
                                                <span className="text-sm text-[#A0AEC0] line-through">$149</span>
                                            </div>
                                            <Button
                                                size="sm"
                                                className="bg-gradient-to-r from-[#5B7CFA] to-[#4DD0E1] hover:from-[#5B7CFA]/90 hover:to-[#4DD0E1]/90 text-white shadow-sm border-0"
                                            >
                                                Enroll
                                            </Button>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="new" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 courses-grid">
                            {/* New Course Cards - Similar structure with different content */}
                            <Card className="group relative overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 course-card">
                                <div className="relative">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            width={100}
                                            height={100}
                                            src="/placeholder.svg?height=200&width=300"
                                            alt="Next.js 14 Complete Guide"
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#5B7CFA]/80 to-[#4DD0E1]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Button
                                                size="icon"
                                                className="rounded-full bg-white/95 hover:bg-white text-[#5B7CFA] shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300 ease-out"
                                            >
                                                <Play className="h-5 w-5" />
                                            </Button>
                                        </div>
                                        <div className="absolute top-3 left-3">
                                            <Badge className="bg-gradient-to-r from-[#5B7CFA] to-[#4DD0E1] text-white border-0 shadow-sm text-xs px-2 py-1">
                                                🆕
                                            </Badge>
                                        </div>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 hover:bg-white text-[#718096] hover:text-[#FF6B6B] transition-colors duration-200 shadow-sm"
                                        >
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                        <div className="absolute bottom-3 right-3">
                                            <Badge className="text-xs px-2 py-1 text-white border-0 bg-gradient-to-r from-[#F56565] to-[#FC8181]">
                                                Advanced
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <Badge
                                                variant="outline"
                                                className="text-xs px-2 py-1 text-[#5B7CFA] border-[#5B7CFA]/20 bg-[#5B7CFA]/5"
                                            >
                                                Frontend
                                            </Badge>
                                            <div className="flex items-center gap-1">
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`h-3 w-3 ${i < 5 ? "text-[#F6AD55] fill-[#F6AD55]" : "text-[#E2E8F0]"}`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-xs font-medium text-[#718096] ml-1">4.9</span>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#2D3748] mb-1 line-clamp-2 leading-tight group-hover:text-[#5B7CFA] transition-colors duration-200">
                                            Next.js 14 Complete Guide
                                        </h3>
                                        <p className="text-sm text-[#718096] mb-4">by David Kim</p>
                                        <div className="mb-4">
                                            <div className="flex justify-between text-xs text-[#718096] mb-2">
                                                <span>Progress</span>
                                                <span>95%</span>
                                            </div>
                                            <Progress value={95} className="h-1.5 bg-[#E2E8F0]" />
                                        </div>
                                        <div className="flex gap-4 mb-4 text-xs text-[#718096]">
                                            <div className="flex items-center gap-1">
                                                <BookOpen className="h-3.5 w-3.5" />
                                                <span>28 lessons</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3.5 w-3.5" />
                                                <span>9h 15m</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="h-3.5 w-3.5" />
                                                <span>1,200</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl font-bold text-[#2D3748]">$95</span>
                                                <span className="text-sm text-[#A0AEC0] line-through">$135</span>
                                            </div>
                                            <Button
                                                size="sm"
                                                className="bg-gradient-to-r from-[#5B7CFA] to-[#4DD0E1] hover:from-[#5B7CFA]/90 hover:to-[#4DD0E1]/90 text-white shadow-sm border-0"
                                            >
                                                Enroll
                                            </Button>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                            {/* Add more new course cards here */}
                        </div>
                    </TabsContent>

                    <TabsContent value="free" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 courses-grid">
                            {/* Free Course Cards */}
                            <Card className="group relative overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 course-card">
                                <div className="relative">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            width={100}
                                            height={100}
                                            src="/placeholder.svg?height=200&width=300"
                                            alt="HTML & CSS Fundamentals"
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#5B7CFA]/80 to-[#4DD0E1]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Button
                                                size="icon"
                                                className="rounded-full bg-white/95 hover:bg-white text-[#5B7CFA] shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300 ease-out"
                                            >
                                                <Play className="h-5 w-5" />
                                            </Button>
                                        </div>
                                        <div className="absolute top-3 left-3">
                                            <Badge className="bg-gradient-to-r from-[#5B7CFA] to-[#4DD0E1] text-white border-0 shadow-sm text-xs px-2 py-1">
                                                🎓
                                            </Badge>
                                        </div>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 hover:bg-white text-[#718096] hover:text-[#FF6B6B] transition-colors duration-200 shadow-sm"
                                        >
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                        <div className="absolute bottom-3 right-3">
                                            <Badge className="text-xs px-2 py-1 text-white border-0 bg-gradient-to-r from-[#48BB78] to-[#68D391]">
                                                Beginner
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <Badge
                                                variant="outline"
                                                className="text-xs px-2 py-1 text-[#5B7CFA] border-[#5B7CFA]/20 bg-[#5B7CFA]/5"
                                            >
                                                Web Dev
                                            </Badge>
                                            <div className="flex items-center gap-1">
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`h-3 w-3 ${i < 4 ? "text-[#F6AD55] fill-[#F6AD55]" : "text-[#E2E8F0]"}`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-xs font-medium text-[#718096] ml-1">4.5</span>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#2D3748] mb-1 line-clamp-2 leading-tight group-hover:text-[#5B7CFA] transition-colors duration-200">
                                            HTML & CSS Fundamentals
                                        </h3>
                                        <p className="text-sm text-[#718096] mb-4">by John Smith</p>
                                        <div className="mb-4">
                                            <div className="flex justify-between text-xs text-[#718096] mb-2">
                                                <span>Progress</span>
                                                <span>75%</span>
                                            </div>
                                            <Progress value={75} className="h-1.5 bg-[#E2E8F0]" />
                                        </div>
                                        <div className="flex gap-4 mb-4 text-xs text-[#718096]">
                                            <div className="flex items-center gap-1">
                                                <BookOpen className="h-3.5 w-3.5" />
                                                <span>18 lessons</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3.5 w-3.5" />
                                                <span>4h 30m</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="h-3.5 w-3.5" />
                                                <span>25,000</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl font-bold text-[#48BB78]">Free</span>
                                            </div>
                                            <Button
                                                size="sm"
                                                className="bg-gradient-to-r from-[#5B7CFA] to-[#4DD0E1] hover:from-[#5B7CFA]/90 hover:to-[#4DD0E1]/90 text-white shadow-sm border-0"
                                            >
                                                Enroll
                                            </Button>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                            {/* Add more free course cards here */}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
