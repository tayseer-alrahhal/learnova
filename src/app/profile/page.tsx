"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import {
    Camera,
    Mail,
    MapPin,
    BookOpen,
    Edit2,
    Save,
    X,
    GraduationCap,
    Award,
    Target,
    Users,
    Phone,
} from "lucide-react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from "react-toastify"
import { signOut } from "next-auth/react"

export default function Component() {
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState<string>("")
    const [studentId, setStudentId] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [bio, setBio] = useState<string>()
    const [institution, setInstitution] = useState<string>("")
    const [program, setProgram] = useState<string>("")
    const [role, setRole] = useState<string>("")
    const [location, setLocation] = useState<string>("")
    const [avatar, setAvatar] = useState<string>("")
    const [joined, setJoined] = useState<string>("")

    const [showDeleteDialog, setShowDeleteDialog] = useState(false)
    const [deleteConfirmation, setDeleteConfirmation] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [loading, setLoading] = useState(true)

    const updateData = {
        name,
        role,
        studentId,
        phone,
        bio,
        institution,
        program,
        location,
        avatar,
    }

    const currentCourses = [{ name: "Software Engineering", code: "CS-350", progress: 85, grade: "A-" }]

    const achievements = [
        { title: "Dean's List", date: "Fall 2023", icon: Award },
        { title: "Hackathon Winner", date: "March 2024", icon: Target },
        { title: "Study Group Leader", date: "Ongoing", icon: Users },
    ]

    useEffect(() => {
        const getUserDAta = async () => {
            const res = await fetch("api/user/user-data")
            if (!res.ok) {
                throw new Error("Failed to fetch user data")
            }
            const data = await res.json()
            setStudentId(data._id)
            setName(data.name)
            setEmail(data.email)
            setPhone(data.phone)
            setBio(data.bio)
            setInstitution(data.institution)
            setProgram(data.program)
            setRole(data.role)
            setLocation(data.location)
            setAvatar(data.avatar)
            setJoined(data.createdAt)
        }
        getUserDAta().then(() => setLoading(false))
    }, [])

    const handleSaveChanges = async () => {
        setIsEditing(false)
        const res = await fetch("/api/user/update-profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
        })

        const data = await res.json()

        console.log("Response status:", res.status)
        console.log("Response data:", data)

        if (res.ok) {
            toast.success(data.message)
        } else if (res.status === 400) {
            toast.error(data.message)
        } else if (res.status === 500) {
            toast.error(data.message)
        }
    }

    const handleCancelEdit = () => {
        setIsEditing(false)
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                const newAvatar = e.target?.result as string
                setAvatar(newAvatar)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleDeleteAccount = async () => {
        setIsDeleting(true)
        const res = await fetch(`/api/user/${studentId}`, {
            method: "DELETE",
        })

        if (!res.ok) {
            toast.error("Failed to delete user")
        } else {
            toast.success("User deleted successfully")
            await signOut({ callbackUrl: "/" })
        }
        setIsDeleting(false)
    }

    // Profile Card Skeleton
    const ProfileCardSkeleton = () => (
        <Card className="bg-gradient-to-br from-[var(--color-background)] to-[var(--color-primary-light)]/10">
            <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                    <div className="relative">
                        <Skeleton className="h-24 w-24 rounded-full" />
                        <Skeleton className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full" />
                    </div>

                    <div className="mt-4 space-y-2 w-full flex flex-col items-center">
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-6 w-16 rounded-full" />
                    </div>

                    <div className="mt-6 w-full space-y-3">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <Skeleton className="h-4 w-4" />
                                <Skeleton className="h-4 flex-1" />
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )

    // Achievements Skeleton
    const AchievementsSkeleton = () => (
        <Card className="bg-gradient-to-br from-[var(--color-background)] to-[var(--color-primary-light)]/10">
            <CardHeader>
                <Skeleton className="h-6 w-24" />
            </CardHeader>
            <CardContent className="space-y-4">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="space-y-1 flex-1">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-3 w-16" />
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )

    // Current Courses Skeleton
    const CoursesSkeleton = () => (
        <Card className="bg-gradient-to-br from-[var(--color-background)] to-[var(--color-primary-light)]/10">
            <CardHeader>
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-48" />
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {[...Array(1)].map((_, i) => (
                        <div key={i} className="space-y-2">
                            <div className="flex justify-between items-center">
                                <div className="space-y-1">
                                    <Skeleton className="h-5 w-40" />
                                    <Skeleton className="h-4 w-16" />
                                </div>
                                <Skeleton className="h-6 w-8 rounded-full" />
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between">
                                    <Skeleton className="h-4 w-16" />
                                    <Skeleton className="h-4 w-8" />
                                </div>
                                <Skeleton className="h-2 w-full rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )

    // Academic Information Skeleton
    const AcademicInfoSkeleton = () => (
        <Card className="bg-gradient-to-br from-[var(--color-background)] to-[var(--color-primary-light)]/10">
            <CardHeader className="flex flex-row items-center justify-between">
                <div className="space-y-1">
                    <Skeleton className="h-6 w-40" />
                    <Skeleton className="h-4 w-56" />
                </div>
                <Skeleton className="h-9 w-16" />
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-full" />
                    </div>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-full" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-4 w-full" />
                </div>

                <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-full" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-full" />
                    </div>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-full" />
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-12" />
                        <Skeleton className="h-4 w-full" />
                    </div>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-full" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Skeleton className="h-4 w-8" />
                    <Skeleton className="h-16 w-full" />
                </div>
            </CardContent>
        </Card>
    )

    if (loading) {
        return (
            <div className="min-h-screen py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Student Profile</h1>
                        <p className="text-gray-600 mt-2">Manage your academic profile and learning preferences</p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {/* Profile Card Skeleton */}
                        <div className="lg:col-span-1 space-y-6">
                            <ProfileCardSkeleton />
                            <AchievementsSkeleton />
                        </div>

                        {/* Main Content Skeleton */}
                        <div className="lg:col-span-2 space-y-6">
                            <CoursesSkeleton />
                            <AcademicInfoSkeleton />

                            {/* Learning Preferences Skeleton */}
                            <Card className="bg-gradient-to-br from-[var(--color-background)] to-[var(--color-primary-light)]/10">
                                <CardHeader>
                                    <Skeleton className="h-6 w-36" />
                                    <Skeleton className="h-4 w-48" />
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i}>
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <Skeleton className="h-4 w-32" />
                                                    <Skeleton className="h-3 w-48" />
                                                </div>
                                                <Skeleton className="h-8 w-20" />
                                            </div>
                                            {i < 2 && <Separator className="mt-4" />}
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* Account Actions Skeleton */}
                            <Card className="border-red-200 bg-gradient-to-br from-[var(--color-background)] to-[var(--color-primary-light)]/10">
                                <CardHeader>
                                    <Skeleton className="h-6 w-32" />
                                    <Skeleton className="h-4 w-40" />
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <Skeleton className="h-4 w-28" />
                                            <Skeleton className="h-3 w-56" />
                                        </div>
                                        <Skeleton className="h-8 w-24" />
                                    </div>
                                    <Separator />
                                    <div className="flex justify-end">
                                        <Skeleton className="h-9 w-20" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Student Profile</h1>
                    <p className="text-gray-600 mt-2">Manage your academic profile and learning preferences</p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Profile Card */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card className="bg-gradient-to-br from-[var(--color-background)] to-[var(--color-primary-light)]/10">
                            <CardContent className="pt-6">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative">
                                        <Avatar className="h-24 w-24 border-1">
                                            <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
                                            <AvatarFallback className="text-lg">
                                                {name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="hidden"
                                            id="avatar-upload"
                                        />
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0 cursor-pointer"
                                            onClick={() => document.getElementById("avatar-upload")?.click()}
                                        >
                                            <Camera className="h-4 w-4" />
                                        </Button>
                                    </div>

                                    <div className="mt-4 space-y-1">
                                        <h3 className="text-xl font-semibold">{name}</h3>
                                        <p className="text-sm text-muted-foreground">{`Joined in ${joined.slice(0, 10).split("-").reverse().join("-")}`}</p>
                                        <Badge variant="secondary" className="mt-2">
                                            {role}
                                        </Badge>
                                    </div>

                                    <div className="mt-6 w-full space-y-3">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Mail className="h-4 w-4" />
                                            <span className="truncate">{email}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Phone className="h-4 w-4" />
                                            <span>{phone}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <GraduationCap className="h-4 w-4" />
                                            <span>{institution}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <BookOpen className="h-4 w-4" />
                                            <span>{program}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <MapPin className="h-4 w-4" />
                                            <span>{location}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Achievements */}
                        <Card className="bg-gradient-to-br from-[var(--color-background)] to-[var(--color-primary-light)]/10">
                            <CardHeader>
                                <CardTitle className="text-lg">Achievements</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {achievements.map((achievement, index) => {
                                    const Icon = achievement.icon
                                    return (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="p-2 bg-blue-100 rounded-full">
                                                <Icon className="h-4 w-4 text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">{achievement.title}</p>
                                                <p className="text-xs text-muted-foreground">{achievement.date}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Current Courses */}
                        <Card className="bg-gradient-to-br from-[var(--color-background)] to-[var(--color-primary-light)]/10">
                            <CardHeader>
                                <CardTitle>Current Courses</CardTitle>
                                <CardDescription>Your enrolled courses for this semester</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {currentCourses.map((course, index) => (
                                        <div key={index} className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h4 className="font-medium">{course.name}</h4>
                                                    <p className="text-sm text-muted-foreground">{course.code}</p>
                                                </div>
                                                <Badge variant="outline">{course.grade}</Badge>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="flex justify-between text-sm">
                                                    <span>Progress</span>
                                                    <span>{course.progress}%</span>
                                                </div>
                                                <Progress value={course.progress} className="h-2 [&>div]:bg-[var(--color-primary)]" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Personal Information */}
                        <Card className="bg-gradient-to-br from-[var(--color-background)] to-[var(--color-primary-light)]/10">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <div>
                                    <CardTitle>Academic Information</CardTitle>
                                    <CardDescription>Update your academic details and preferences</CardDescription>
                                </div>
                                {!isEditing ? (
                                    <Button className="cursor-pointer" variant="outline" onClick={() => setIsEditing(true)}>
                                        <Edit2 className="h-4 w-4 mr-2" />
                                        Edit
                                    </Button>
                                ) : (
                                    <div className="flex gap-2">
                                        <Button className="cursor-pointer" variant="outline" size="sm" onClick={handleCancelEdit}>
                                            <X className="h-4 w-4 mr-2" />
                                            Cancel
                                        </Button>
                                        <Button className="cursor-pointer" size="sm" onClick={handleSaveChanges}>
                                            <Save className="h-4 w-4 mr-2" />
                                            Save
                                        </Button>
                                    </div>
                                )}
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        {isEditing ? (
                                            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                                        ) : (
                                            <p className="text-sm py-2">{name}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="studentId">Student ID</Label>
                                        <p className="text-sm py-2 text-muted-foreground">{studentId}</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    {isEditing ? (
                                        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    ) : (
                                        <p className="text-sm py-2">{email}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    {isEditing ? (
                                        <Input
                                            id="phone"
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    ) : (
                                        <p className="text-sm py-2">{phone}</p>
                                    )}
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="institution">Institution</Label>
                                        {isEditing ? (
                                            <Input id="institution" value={institution} onChange={(e) => setInstitution(e.target.value)} />
                                        ) : (
                                            <p className="text-sm py-2">{institution}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="program">Program</Label>
                                        {isEditing ? (
                                            <Input id="program" value={program} onChange={(e) => setProgram(e.target.value)} />
                                        ) : (
                                            <p className="text-sm py-2">{program}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="year">I am a</Label>
                                        {isEditing ? (
                                            <Select value={role} onValueChange={(value) => setRole(value)}>
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Student">Student</SelectItem>
                                                    <SelectItem value="Teacher">Teacher</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        ) : (
                                            <p className="text-sm py-2">{role}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="location">Location</Label>
                                        {isEditing ? (
                                            <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                                        ) : (
                                            <p className="text-sm py-2">{location}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="bio">Bio</Label>
                                    {isEditing ? (
                                        <Textarea
                                            id="bio"
                                            rows={3}
                                            value={bio}
                                            onChange={(e) => setBio(e.target.value)}
                                            placeholder="Tell us about your academic interests and goals..."
                                        />
                                    ) : (
                                        <p className="text-sm py-2">{bio}</p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Learning Preferences */}
                        <Card className="bg-gradient-to-br from-[var(--color-background)] to-[var(--color-primary-light)]/10">
                            <CardHeader>
                                <CardTitle>Learning Preferences</CardTitle>
                                <CardDescription>Customize your learning experience</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-sm font-medium">Email Notifications</h4>
                                        <p className="text-sm text-muted-foreground">Receive updates about assignments and grades</p>
                                    </div>
                                    <Button className="cursor-pointer" variant="outline" size="sm">
                                        Configure
                                    </Button>
                                </div>

                                <Separator />

                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-sm font-medium">Study Reminders</h4>
                                        <p className="text-sm text-muted-foreground">Get reminders for upcoming deadlines</p>
                                    </div>
                                    <Button className="cursor-pointer" variant="outline" size="sm">
                                        Set Up
                                    </Button>
                                </div>

                                <Separator />

                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-sm font-medium">Privacy Settings</h4>
                                        <p className="text-sm text-muted-foreground">Control who can see your academic progress</p>
                                    </div>
                                    <Button className="cursor-pointer" variant="outline" size="sm">
                                        Manage
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Account Actions */}
                        <Card className="border-red-200 bg-gradient-to-br from-[var(--color-background)] to-[var(--color-primary-light)]/10">
                            <CardHeader>
                                <CardTitle className="text-red-600">Account Actions</CardTitle>
                                <CardDescription>Manage your account settings</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-sm font-medium">Delete Account</h4>
                                        <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                                    </div>
                                    <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                                        <AlertDialogTrigger asChild>
                                            <Button className="cursor-pointer" variant="destructive" size="sm">
                                                Delete Account
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle className="text-red-600">Delete Account</AlertDialogTitle>
                                                <AlertDialogDescription className="space-y-3">
                                                    <p>
                                                        This action cannot be undone. This will permanently delete your account and remove all your
                                                        data from our servers.
                                                    </p>
                                                    <p className="font-medium">This includes:</p>
                                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                                        <li>Your profile information and academic records</li>
                                                        <li>Course enrollments and progress</li>
                                                        <li>Grades and achievements</li>
                                                        <li>All personal data and preferences</li>
                                                    </ul>
                                                    <div className="mt-4">
                                                        <Label htmlFor="delete-confirmation" className="text-sm font-medium">
                                                            Type <span className="font-bold text-red-600">DELETE</span> to confirm:
                                                        </Label>
                                                        <Input
                                                            id="delete-confirmation"
                                                            value={deleteConfirmation}
                                                            onChange={(e) => setDeleteConfirmation(e.target.value)}
                                                            placeholder="Type DELETE here"
                                                            className="mt-2"
                                                        />
                                                    </div>
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel onClick={() => setDeleteConfirmation("")}>Cancel</AlertDialogCancel>
                                                <AlertDialogAction
                                                    onClick={() => handleDeleteAccount()}
                                                    disabled={deleteConfirmation !== "DELETE" || isDeleting}
                                                    className="bg-red-600 hover:bg-red-700"
                                                >
                                                    {isDeleting ? "Deleting..." : "Delete Account"}
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>

                                <Separator />

                                <div className="flex justify-end">
                                    <Button className="cursor-pointer" onClick={() => signOut({ callbackUrl: "/" })} variant="outline">
                                        Sign Out
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
