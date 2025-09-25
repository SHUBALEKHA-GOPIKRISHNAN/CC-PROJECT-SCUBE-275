import React, { useState } from 'react';
import { Users, Building, FileText, BarChart3, CheckCircle, XCircle, Eye, Shield } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface AdminPanelProps {
  onLogout: () => void;
}

export function AdminPanel({ onLogout }: AdminPanelProps) {
  const [activeSection, setActiveSection] = useState('analytics');

  const sidebarItems = [
    {
      icon: BarChart3,
      label: 'Analytics',
      isActive: activeSection === 'analytics',
      onClick: () => setActiveSection('analytics')
    },
    {
      icon: Users,
      label: 'Manage Students',
      isActive: activeSection === 'students',
      onClick: () => setActiveSection('students')
    },
    {
      icon: Building,
      label: 'Manage Companies',
      isActive: activeSection === 'companies',
      onClick: () => setActiveSection('companies')
    },
    {
      icon: FileText,
      label: 'Internship Approvals',
      isActive: activeSection === 'approvals',
      onClick: () => setActiveSection('approvals')
    }
  ];

  const mockStudents = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.j@email.com",
      university: "MIT",
      major: "Computer Science",
      year: "Junior",
      status: "Active",
      joinDate: "2024-01-10"
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.s@email.com",
      university: "Stanford",
      major: "Data Science",
      year: "Senior",
      status: "Active",
      joinDate: "2024-01-08"
    },
    {
      id: 3,
      name: "Carol Williams",
      email: "carol.w@email.com",
      university: "Berkeley",
      major: "Marketing",
      year: "Sophomore",
      status: "Pending",
      joinDate: "2024-01-15"
    }
  ];

  const mockCompanies = [
    {
      id: 1,
      name: "TechCorp Solutions",
      email: "hr@techcorp.com",
      industry: "Technology",
      size: "500-1000",
      status: "Verified",
      joinDate: "2023-12-01",
      activeListings: 5
    },
    {
      id: 2,
      name: "StartupXYZ",
      email: "careers@startupxyz.com",
      industry: "FinTech",
      size: "50-100",
      status: "Pending",
      joinDate: "2024-01-12",
      activeListings: 0
    },
    {
      id: 3,
      name: "Design Studios Inc",
      email: "jobs@designstudios.com",
      industry: "Design",
      size: "100-500",
      status: "Verified",
      joinDate: "2023-11-15",
      activeListings: 3
    }
  ];

  const mockInternships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp Solutions",
      department: "Engineering",
      location: "San Francisco, CA",
      stipend: "$2000/month",
      status: "Pending Review",
      submittedDate: "2024-01-14"
    },
    {
      id: 2,
      title: "UX Design Intern",
      company: "Design Studios Inc",
      department: "Design",
      location: "New York, NY",
      stipend: "$1800/month",
      status: "Approved",
      submittedDate: "2024-01-12"
    },
    {
      id: 3,
      title: "Data Analyst Intern",
      company: "StartupXYZ",
      department: "Analytics",
      location: "Remote",
      stipend: "$1500/month",
      status: "Needs Changes",
      submittedDate: "2024-01-10"
    }
  ];

  const handleApproveStudent = (studentId: number) => {
    alert(`Approved student ${studentId}`);
  };

  const handleApproveCompany = (companyId: number) => {
    alert(`Approved company ${companyId}`);
  };

  const handleApproveInternship = (internshipId: number) => {
    alert(`Approved internship ${internshipId}`);
  };

  const renderMainContent = () => {
    switch (activeSection) {
      case 'analytics':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Platform Analytics</h1>
              <p className="text-gray-600">Overview of platform performance and key metrics</p>
            </div>
            
            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Total Students
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">2,547</div>
                  <p className="text-xs text-green-600">+12% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Active Companies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">89</div>
                  <p className="text-xs text-green-600">+5 this month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Internships Posted
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">156</div>
                  <p className="text-xs text-green-600">+23 this week</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Applications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">1,284</div>
                  <p className="text-xs text-green-600">+8% conversion rate</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent User Registrations</CardTitle>
                  <CardDescription>New students and companies joining the platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Emma Thompson", type: "Student", university: "Harvard", time: "2 hours ago" },
                      { name: "TechStart Inc", type: "Company", industry: "AI/ML", time: "4 hours ago" },
                      { name: "John Davis", type: "Student", university: "Yale", time: "6 hours ago" },
                      { name: "Green Energy Co", type: "Company", industry: "Renewable Energy", time: "1 day ago" }
                    ].map((user, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-600">
                            {user.type === 'Student' ? user.university : user.industry}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge variant={user.type === 'Student' ? 'default' : 'secondary'}>
                            {user.type}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{user.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Pending Approvals</CardTitle>
                  <CardDescription>Items requiring admin attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border border-yellow-200 bg-yellow-50 rounded-lg">
                      <div>
                        <p className="font-medium">Company Verifications</p>
                        <p className="text-sm text-gray-600">3 companies pending review</p>
                      </div>
                      <Button size="sm" onClick={() => setActiveSection('companies')}>
                        Review
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-blue-200 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-medium">Internship Approvals</p>
                        <p className="text-sm text-gray-600">5 internships awaiting approval</p>
                      </div>
                      <Button size="sm" onClick={() => setActiveSection('approvals')}>
                        Review
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-green-200 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium">Student Profiles</p>
                        <p className="text-sm text-gray-600">2 profiles need verification</p>
                      </div>
                      <Button size="sm" onClick={() => setActiveSection('students')}>
                        Review
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'students':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Student Management</h1>
              <p className="text-gray-600">Monitor and manage student accounts</p>
            </div>
            
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>University</TableHead>
                    <TableHead>Major</TableHead>
                    <TableHead>Year</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-gray-600">{student.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>{student.university}</TableCell>
                      <TableCell>{student.major}</TableCell>
                      <TableCell>{student.year}</TableCell>
                      <TableCell>{student.joinDate}</TableCell>
                      <TableCell>
                        <Badge variant={student.status === 'Active' ? 'default' : 'secondary'}>
                          {student.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {student.status === 'Pending' && (
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => handleApproveStudent(student.id)}
                            >
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                          )}
                          <Button size="sm" variant="ghost" className="text-red-600">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        );

      case 'companies':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Company Management</h1>
              <p className="text-gray-600">Verify and manage company accounts</p>
            </div>
            
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Industry</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Active Listings</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockCompanies.map((company) => (
                    <TableRow key={company.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{company.name}</p>
                          <p className="text-sm text-gray-600">{company.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>{company.industry}</TableCell>
                      <TableCell>{company.size}</TableCell>
                      <TableCell>{company.activeListings}</TableCell>
                      <TableCell>{company.joinDate}</TableCell>
                      <TableCell>
                        <Badge variant={company.status === 'Verified' ? 'default' : 'secondary'}>
                          {company.status === 'Verified' && <Shield className="h-3 w-3 mr-1" />}
                          {company.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {company.status === 'Pending' && (
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => handleApproveCompany(company.id)}
                            >
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                          )}
                          <Button size="sm" variant="ghost" className="text-red-600">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        );

      case 'approvals':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Internship Approvals</h1>
              <p className="text-gray-600">Review and approve internship postings</p>
            </div>
            
            <Tabs defaultValue="pending" className="space-y-4">
              <TabsList>
                <TabsTrigger value="pending">Pending Review</TabsTrigger>
                <TabsTrigger value="approved">Approved</TabsTrigger>
                <TabsTrigger value="rejected">Needs Changes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="pending" className="space-y-4">
                {mockInternships.filter(i => i.status === 'Pending Review').map((internship) => (
                  <Card key={internship.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">{internship.title}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-4">
                            <div>
                              <span className="text-gray-600">Company:</span>
                              <span className="font-medium ml-2">{internship.company}</span>
                            </div>
                            <div>
                              <span className="text-gray-600">Department:</span>
                              <span className="font-medium ml-2">{internship.department}</span>
                            </div>
                            <div>
                              <span className="text-gray-600">Location:</span>
                              <span className="font-medium ml-2">{internship.location}</span>
                            </div>
                            <div>
                              <span className="text-gray-600">Stipend:</span>
                              <span className="font-medium ml-2">{internship.stipend}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm">Submitted on {internship.submittedDate}</p>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Review Details
                          </Button>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => handleApproveInternship(internship.id)}
                          >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Approve
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="h-4 w-4 mr-2" />
                            Request Changes
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="approved">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-600">Recently approved internships will appear here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="rejected">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-600">Internships requiring changes will appear here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex bg-gray-50">
      <Sidebar
        title="Admin Panel"
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