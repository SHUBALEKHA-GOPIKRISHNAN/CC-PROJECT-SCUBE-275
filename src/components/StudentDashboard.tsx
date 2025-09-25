import React, { useState } from 'react';
import { User, Search, FileText, Bell, Filter, Upload, Eye } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { InternshipCard } from './InternshipCard';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';

interface StudentDashboardProps {
  onLogout: () => void;
}

export function StudentDashboard({ onLogout }: StudentDashboardProps) {
  const [activeSection, setActiveSection] = useState('browse');
  const [searchQuery, setSearchQuery] = useState('');

  const sidebarItems = [
    {
      icon: User,
      label: 'Profile',
      isActive: activeSection === 'profile',
      onClick: () => setActiveSection('profile')
    },
    {
      icon: Search,
      label: 'Browse Internships',
      isActive: activeSection === 'browse',
      onClick: () => setActiveSection('browse')
    },
    {
      icon: FileText,
      label: 'My Applications',
      isActive: activeSection === 'applications',
      onClick: () => setActiveSection('applications')
    },
    {
      icon: Bell,
      label: 'Notifications',
      isActive: activeSection === 'notifications',
      onClick: () => setActiveSection('notifications')
    }
  ];

  const mockInternships = [
    {
      title: "Frontend Developer Intern",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      stipend: "$2,000/month",
      duration: "3 months",
      description: "Work on cutting-edge web applications using React, TypeScript, and modern development tools. You'll be part of a dynamic team building user interfaces for enterprise clients.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Git", "REST APIs"],
      type: "onsite" as const,
      postedDate: "2 days ago"
    },
    {
      title: "Data Science Intern",
      company: "Analytics Pro",
      location: "Remote",
      stipend: "$1,800/month",
      duration: "4 months",
      description: "Dive into machine learning and data analysis projects. Work with large datasets and help build predictive models for business intelligence.",
      skills: ["Python", "Machine Learning", "SQL", "Pandas", "Tableau"],
      type: "remote" as const,
      postedDate: "1 week ago"
    },
    {
      title: "Marketing Intern",
      company: "Brand Builders",
      location: "New York, NY",
      stipend: "$1,500/month",
      duration: "6 months",
      description: "Support digital marketing campaigns and content creation. Learn about social media strategy, content marketing, and brand development.",
      skills: ["Social Media", "Content Creation", "Analytics", "Photoshop"],
      type: "hybrid" as const,
      postedDate: "3 days ago"
    }
  ];

  const mockApplications = [
    {
      title: "Backend Developer Intern",
      company: "StartupXYZ",
      appliedDate: "2024-01-15",
      status: "Under Review",
      statusColor: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "UI/UX Design Intern",
      company: "DesignStudio",
      appliedDate: "2024-01-10",
      status: "Shortlisted",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Mobile App Developer",
      company: "AppWorks",
      appliedDate: "2024-01-05",
      status: "Rejected",
      statusColor: "bg-red-100 text-red-800"
    }
  ];

  const renderMainContent = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">My Profile</h1>
              <p className="text-gray-600">Manage your personal information and preferences</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <Input value="John Doe" readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input value="john.doe@email.com" readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">University</label>
                    <Input placeholder="Enter your university" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Major</label>
                    <Input placeholder="Enter your major" />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Update Profile</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Resume & Documents</CardTitle>
                  <CardDescription>Upload and manage your application documents</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Upload your resume</p>
                    <Button variant="outline" size="sm">Choose File</Button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">resume_john_doe.pdf</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'browse':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Browse Internships</h1>
                <p className="text-gray-600">Discover opportunities that match your interests</p>
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Search internships..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {mockInternships.map((internship, index) => (
                <InternshipCard
                  key={index}
                  {...internship}
                  onApply={() => alert(`Applied to ${internship.title} at ${internship.company}`)}
                />
              ))}
            </div>
          </div>
        );

      case 'applications':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">My Applications</h1>
              <p className="text-gray-600">Track the status of your internship applications</p>
            </div>
            
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">All Applications</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="interview">Interview</TabsTrigger>
                <TabsTrigger value="rejected">Rejected</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4">
                {mockApplications.map((application, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{application.title}</h3>
                          <p className="text-gray-600 mb-2">{application.company}</p>
                          <p className="text-sm text-gray-500">Applied on {application.appliedDate}</p>
                        </div>
                        <Badge className={`${application.statusColor} border-0`}>
                          {application.status}
                        </Badge>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-600">
                            Application Progress
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">View Details</Button>
                            <Button variant="ghost" size="sm" className="text-red-600">
                              Withdraw
                            </Button>
                          </div>
                        </div>
                        <Progress value={application.status === 'Rejected' ? 25 : application.status === 'Under Review' ? 50 : 75} className="mt-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Notifications</h1>
              <p className="text-gray-600">Stay updated with your application status and new opportunities</p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  title: "Application Status Update",
                  message: "Your application for Frontend Developer Intern at TechCorp has been shortlisted!",
                  time: "2 hours ago",
                  type: "success"
                },
                {
                  title: "New Internship Match",
                  message: "3 new internships match your preferences. Check them out!",
                  time: "1 day ago",
                  type: "info"
                },
                {
                  title: "Application Deadline Reminder",
                  message: "The deadline for Data Science Intern at Analytics Pro is tomorrow.",
                  time: "2 days ago",
                  type: "warning"
                }
              ].map((notification, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        notification.type === 'success' ? 'bg-green-500' :
                        notification.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`} />
                      <div className="flex-1">
                        <h4 className="font-medium">{notification.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex bg-gray-50">
      <Sidebar
        title="Student Dashboard"
        items={sidebarItems}
        onLogout={onLogout}
      />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {renderMainContent()}
        </div>
      </main>
    </div>
  );
}