import React, { useState } from 'react';
import { ArrowLeft, Building, User, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { UserRole } from '../App';

interface AuthPageProps {
  onLogin: (role: UserRole) => void;
  onBack: () => void;
}

export function AuthPage({ onLogin, onBack }: AuthPageProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const roles = [
    {
      value: 'student',
      label: 'Student',
      icon: User,
      description: 'Looking for internship opportunities'
    },
    {
      value: 'company',
      label: 'Company',
      icon: Building,
      description: 'Hiring interns for your organization'
    },
    {
      value: 'admin',
      label: 'Admin',
      icon: Shield,
      description: 'Platform administration access'
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(selectedRole);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(selectedRole);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-semibold">InternConnect</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl text-center">Welcome</CardTitle>
              <CardDescription className="text-center">
                Sign in to your account or create a new one
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>

                <TabsContent value="login" className="space-y-4">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    {/* Role Selection */}
                    <div className="space-y-3">
                      <Label>Login as</Label>
                      <RadioGroup value={selectedRole} onValueChange={(value) => setSelectedRole(value as UserRole)}>
                        {roles.map((role) => (
                          <div key={role.value} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                            <RadioGroupItem value={role.value} id={role.value} />
                            <div className="flex items-center gap-3 flex-1">
                              <role.icon className="h-5 w-5 text-gray-600" />
                              <div>
                                <label htmlFor={role.value} className="font-medium cursor-pointer">
                                  {role.label}
                                </label>
                                <p className="text-sm text-gray-500">{role.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Sign In
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="register" className="space-y-4">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-name">Full Name</Label>
                      <Input
                        id="register-name"
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email</Label>
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password">Password</Label>
                      <Input
                        id="register-password"
                        type="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>

                    {/* Role Selection */}
                    <div className="space-y-3">
                      <Label>Register as</Label>
                      <RadioGroup value={selectedRole} onValueChange={(value) => setSelectedRole(value as UserRole)}>
                        {roles.map((role) => (
                          <div key={role.value} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                            <RadioGroupItem value={role.value} id={`register-${role.value}`} />
                            <div className="flex items-center gap-3 flex-1">
                              <role.icon className="h-5 w-5 text-gray-600" />
                              <div>
                                <label htmlFor={`register-${role.value}`} className="font-medium cursor-pointer">
                                  {role.label}
                                </label>
                                <p className="text-sm text-gray-500">{role.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Create Account
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center text-sm text-gray-600">
                <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}