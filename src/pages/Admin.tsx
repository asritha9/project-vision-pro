
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Admin = () => {
  const [activeTab, setActiveTab] = useState('projects');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600 mb-8">Manage projects, resources, and access controls</p>
        
        <Tabs defaultValue="projects" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="projects" className="text-center py-2">Projects</TabsTrigger>
            <TabsTrigger value="users" className="text-center py-2">Users</TabsTrigger>
            <TabsTrigger value="results" className="text-center py-2">Results</TabsTrigger>
            <TabsTrigger value="permissions" className="text-center py-2">Permissions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-medium text-gray-800">All Projects</h3>
                    
                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 text-sm font-medium">
                        Filter
                      </button>
                      <button className="px-4 py-2 bg-brand-skyblue text-white rounded-lg shadow-sm hover:bg-brand-skyblue-dark text-sm font-medium">
                        New Project
                      </button>
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-4 px-4 text-sm text-gray-800">001</td>
                          <td className="py-4 px-4 text-sm text-gray-800 font-medium">Azmara</td>
                          <td className="py-4 px-4">
                            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                              Execution
                            </span>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-600">Jane Smith</td>
                          <td className="py-4 px-4">
                            <div className="flex gap-2">
                              <button className="text-brand-skyblue hover:text-brand-skyblue-dark text-sm">Edit</button>
                              <button className="text-brand-pink hover:text-brand-pink-dark text-sm">Delete</button>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-4 px-4 text-sm text-gray-800">002</td>
                          <td className="py-4 px-4 text-sm text-gray-800 font-medium">Nexeo</td>
                          <td className="py-4 px-4">
                            <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                              Planning
                            </span>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-600">Michael Chen</td>
                          <td className="py-4 px-4">
                            <div className="flex gap-2">
                              <button className="text-brand-skyblue hover:text-brand-skyblue-dark text-sm">Edit</button>
                              <button className="text-brand-pink hover:text-brand-pink-dark text-sm">Delete</button>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-4 px-4 text-sm text-gray-800">003</td>
                          <td className="py-4 px-4 text-sm text-gray-800 font-medium">Statefund</td>
                          <td className="py-4 px-4">
                            <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                              Completed
                            </span>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-600">Emily Rodriguez</td>
                          <td className="py-4 px-4">
                            <div className="flex gap-2">
                              <button className="text-brand-skyblue hover:text-brand-skyblue-dark text-sm">Edit</button>
                              <button className="text-brand-pink hover:text-brand-pink-dark text-sm">Delete</button>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-4 px-4 text-sm text-gray-800">004</td>
                          <td className="py-4 px-4 text-sm text-gray-800 font-medium">ASTM</td>
                          <td className="py-4 px-4">
                            <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                              Planning
                            </span>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-600">James Wilson</td>
                          <td className="py-4 px-4">
                            <div className="flex gap-2">
                              <button className="text-brand-skyblue hover:text-brand-skyblue-dark text-sm">Edit</button>
                              <button className="text-brand-pink hover:text-brand-pink-dark text-sm">Delete</button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Project Management</h3>
                  
                  <div className="space-y-4">
                    <button className="w-full px-4 py-3 bg-brand-skyblue text-white rounded-lg shadow-sm hover:bg-brand-skyblue-dark text-sm font-medium">
                      Create New Project
                    </button>
                    
                    <button className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 text-sm font-medium">
                      Manage Existing Projects
                    </button>
                    
                    <button className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 text-sm font-medium">
                      Create Database
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Quick Actions</h3>
                  
                  <div className="space-y-3">
                    <button className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-left text-sm font-medium hover:bg-gray-50">
                      Generate System Report
                    </button>
                    
                    <button className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-left text-sm font-medium hover:bg-gray-50">
                      User Activity Log
                    </button>
                    
                    <button className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-left text-sm font-medium hover:bg-gray-50">
                      Backup System Data
                    </button>
                    
                    <button className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-left text-sm font-medium hover:bg-gray-50">
                      Manage Email Notifications
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="users" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-medium text-gray-800">User Management</h3>
                    
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Search users..."
                        className="px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-skyblue text-sm"
                      />
                      <button className="px-4 py-2 bg-brand-skyblue text-white rounded-lg shadow-sm hover:bg-brand-skyblue-dark text-sm font-medium">
                        Add User
                      </button>
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-4 px-4 text-sm text-gray-800 font-medium">alex.johnson</td>
                          <td className="py-4 px-4 text-sm text-gray-600">alex.johnson@example.com</td>
                          <td className="py-4 px-4">
                            <span className="px-2 py-1 text-xs bg-brand-skyblue/10 text-brand-skyblue-dark rounded-full">
                              Admin
                            </span>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-600">Today, 10:45 AM</td>
                          <td className="py-4 px-4">
                            <div className="flex gap-2">
                              <button className="text-brand-skyblue hover:text-brand-skyblue-dark text-sm">Edit</button>
                              <button className="text-brand-pink hover:text-brand-pink-dark text-sm">Remove</button>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-4 px-4 text-sm text-gray-800 font-medium">maria.garcia</td>
                          <td className="py-4 px-4 text-sm text-gray-600">maria.garcia@example.com</td>
                          <td className="py-4 px-4">
                            <span className="px-2 py-1 text-xs bg-brand-pink/10 text-brand-pink-dark rounded-full">
                              Test Engineer
                            </span>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-600">Yesterday, 3:20 PM</td>
                          <td className="py-4 px-4">
                            <div className="flex gap-2">
                              <button className="text-brand-skyblue hover:text-brand-skyblue-dark text-sm">Edit</button>
                              <button className="text-brand-pink hover:text-brand-pink-dark text-sm">Remove</button>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-4 px-4 text-sm text-gray-800 font-medium">thomas.lee</td>
                          <td className="py-4 px-4 text-sm text-gray-600">thomas.lee@example.com</td>
                          <td className="py-4 px-4">
                            <span className="px-2 py-1 text-xs bg-pink-100 text-pink-800 rounded-full">
                              Guest
                            </span>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-600">2 days ago</td>
                          <td className="py-4 px-4">
                            <div className="flex gap-2">
                              <button className="text-brand-skyblue hover:text-brand-skyblue-dark text-sm">Edit</button>
                              <button className="text-brand-pink hover:text-brand-pink-dark text-sm">Remove</button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">User Actions</h3>
                  
                  <div className="space-y-4">
                    <button className="w-full px-4 py-3 bg-brand-skyblue text-white rounded-lg shadow-sm hover:bg-brand-skyblue-dark text-sm font-medium">
                      Add New User
                    </button>
                    
                    <button className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 text-sm font-medium">
                      Import Users (CSV)
                    </button>
                    
                    <button className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 text-sm font-medium">
                      Reset Passwords
                    </button>
                    
                    <button className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 text-sm font-medium">
                      Assign Bulk Roles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="results" className="animate-fade-in">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-800">Test Results Management</h3>
                
                <div className="flex gap-3">
                  <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-skyblue text-sm">
                    <option>All Projects</option>
                    <option>Azmara</option>
                    <option>Nexeo</option>
                    <option>Statefund</option>
                    <option>ASTM</option>
                  </select>
                  <button className="px-4 py-2 bg-brand-skyblue text-white rounded-lg shadow-sm hover:bg-brand-skyblue-dark text-sm font-medium">
                    Export Results
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Run ID</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-sm text-gray-800">TR-1001</td>
                      <td className="py-4 px-4 text-sm text-gray-800 font-medium">Azmara</td>
                      <td className="py-4 px-4 text-sm text-gray-600">2024-03-12</td>
                      <td className="py-4 px-4 text-sm text-gray-600">45 min</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                          Passed
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <button className="text-brand-skyblue hover:text-brand-skyblue-dark text-sm">View</button>
                          <button className="text-brand-pink hover:text-brand-pink-dark text-sm">Delete</button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-sm text-gray-800">TR-1002</td>
                      <td className="py-4 px-4 text-sm text-gray-800 font-medium">Nexeo</td>
                      <td className="py-4 px-4 text-sm text-gray-600">2024-03-10</td>
                      <td className="py-4 px-4 text-sm text-gray-600">32 min</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                          Failed
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <button className="text-brand-skyblue hover:text-brand-skyblue-dark text-sm">View</button>
                          <button className="text-brand-pink hover:text-brand-pink-dark text-sm">Delete</button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-sm text-gray-800">TR-1003</td>
                      <td className="py-4 px-4 text-sm text-gray-800 font-medium">Statefund</td>
                      <td className="py-4 px-4 text-sm text-gray-600">2024-03-08</td>
                      <td className="py-4 px-4 text-sm text-gray-600">60 min</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                          Passed
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <button className="text-brand-skyblue hover:text-brand-skyblue-dark text-sm">View</button>
                          <button className="text-brand-pink hover:text-brand-pink-dark text-sm">Delete</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="permissions" className="animate-fade-in">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium text-gray-800 mb-6">Permission Management</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature/Section</th>
                      <th className="py-3 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Admin Users</th>
                      <th className="py-3 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Test Engineers</th>
                      <th className="py-3 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Guest Users</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-sm text-gray-800 font-medium">Admin Dashboard</td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                            Full Access
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                            No Access
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                            No Access
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-sm text-gray-800 font-medium">Test Results</td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                            Full Access
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                            View Only
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                            No Access
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-sm text-gray-800 font-medium">Project Details</td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                            Full Access
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                            View Only
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                            View Only
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-sm text-gray-800 font-medium">Training Details</td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                            Full Access
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                            Full Access
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                            —
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-sm text-gray-800 font-medium">Reset Password</td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                            Yes
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                            Yes
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                            —
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-sm text-gray-800 font-medium">Assign Role</td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                            Yes
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                            No
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                            —
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button className="px-4 py-2 bg-brand-skyblue text-white rounded-lg shadow-sm hover:bg-brand-skyblue-dark text-sm font-medium">
                  Edit Permissions
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
