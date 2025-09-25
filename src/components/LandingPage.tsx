import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Users, Building, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CurrentPage } from '../App';

interface LandingPageProps {
  onNavigate: (page: CurrentPage) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [stipend, setStipend] = useState('');

  const features = [
    {
      icon: Users,
      title: "Connect with Top Companies",
      description: "Access internships from leading companies across various industries"
    },
    {
      icon: TrendingUp,
      title: "Track Your Progress",
      description: "Monitor your applications and get real-time updates on your status"
    },
    {
      icon: CheckCircle,
      title: "Easy Application Process",
      description: "Apply to multiple internships with just a few clicks"
    }
  ];

  const stats = [
    { label: "Active Students", value: "10,000+" },
    { label: "Partner Companies", value: "500+" },
    { label: "Internships Posted", value: "2,500+" },
    { label: "Success Rate", value: "85%" }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-semibold">internportal</span>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => onNavigate('auth')}>
              Login
            </Button>
            <Button onClick={() => onNavigate('auth')} className="bg-blue-600 hover:bg-blue-700">
              Register
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-white py-30 bg-[rgba(255,0,0,0)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-black-900 mb-6">
            FIND YOUR PERFECT INTERNSHIP HERE
          </h1>
          <p className="text-xl text-black-600 mb-12 max-w-2xl mx-auto">
            Connect with top COMPANIES, discover amazing OPPERTUNITIE, and kickstart your career with our comprehensive internship platform.
          </p>

          {/* Search Bar */}
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                  <Search className="h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Domain or keyword"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-0 p-0 focus-visible:ring-0"
                  />
                </div>
                <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border-0 p-0 focus-visible:ring-0"
                  />
                </div>
                <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Min stipend"
                    value={stipend}
                    onChange={(e) => setStipend(e.target.value)}
                    className="border-0 p-0 focus-visible:ring-0"
                  />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 py-2">
                  Search Internships
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose InternConnect?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform provides everything you need to find and secure the perfect internship opportunity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-sm">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found their dream internships through our platform.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => onNavigate('auth')}
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-semibold text-white">InternConnect</span>
              </div>
              <p className="text-sm">
                Connecting students with their dream internships and helping companies find top talent.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">For Students</h3>
              <ul className="space-y-2 text-sm">
                <li>Browse Internships</li>
                <li>Application Tracking</li>
                <li>Resume Builder</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">For Companies</h3>
              <ul className="space-y-2 text-sm">
                <li>Post Internships</li>
                <li>Candidate Management</li>
                <li>Analytics Dashboard</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 InternConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}