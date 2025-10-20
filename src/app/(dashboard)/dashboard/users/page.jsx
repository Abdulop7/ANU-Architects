"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "../../../../../components/ui/input";
import { Loader2, UserPlus, Edit2, Trash2, Eye, EyeOff } from "lucide-react";
import { Card, CardContent } from "../../../../../components/dashboard/card";
import { Button } from "../../../../../components/ui/button";
import { useRole } from "../../../../../lib/roleContext";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    role: "",
    phone: "",
    managerId: null,
  });
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { role, users: currentUsers, contextLoading } = useRole();
  const router = useRouter();

  // 👇 role priority order
  const roleOrder = {
    executive: 1,
    accountant: 2,
    manager: 3,
    employee: 4,
  };

  // 👇 sorting helper
  const sortUsers = (list) => {
    return [...list].sort((a, b) => {
      const roleA = roleOrder[a.role] || 99;
      const roleB = roleOrder[b.role] || 99;
      if (roleA === roleB) return a.id - b.id;
      return roleA - roleB;
    });
  };

  useEffect(() => {
    if (contextLoading) return;
    if (role && role !== "executive") {
      router.replace("/dashboard");
    } else {
      fetchUsers();
    }
  }, [contextLoading]);

  const fetchUsers = async () => {
    try {
      const sorted = sortUsers(currentUsers);
      setUsers(sorted);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    const { name, username, password, role, phone, managerId } = form;
    if ((!name || !username || (editingUser ? "" : !password) || !role || !phone)) {
      setMessage("Please fill all required fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // ✅ Ensure managerId is sent as an integer (or null if empty)
      const payload = {
        ...form,
        managerId: form.managerId ? parseInt(form.managerId, 10) : null,
      };

      if (editingUser) {
        const res = await axios.put(`/api/users/${editingUser.id}`, payload);
        console.log(res);
        
        setMessage(res.data.message || "User updated successfully!");

        setUsers((prev) =>
          sortUsers(prev.map((u) => (u.id === editingUser.id ? { ...u, ...payload } : u)))
        );
        setEditingUser(null);
      } else {
        const res = await axios.post("/api/auth/signup", payload);
        setMessage(res.data.message || "User created successfully!");

        if (res.data.user) {
          setUsers((prev) => sortUsers([...prev, res.data.user]));
        } else {
          await fetchUsers();
        }
      }

      setForm({ name: "", username: "", password: "", role: "", phone: "", managerId: "" });
    } catch (err) {
      setMessage(err.response?.data?.error || "Operation failed.");
      console.error("Signup/Update error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`/api/users/${id}`);

      // ✅ Update local list
      setUsers((prev) => sortUsers(prev.filter((u) => u.id !== id)));
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setForm({
      name: user.name,
      username: user.username,
      password: "",
      role: user.role,
      phone: user.phone || "",
      managerId: user.managerId || "",
    });
  };

  return (
    <div className="flex flex-col items-center w-full h-screen bg-gray-50 overflow-y-auto p-6 space-y-8">
      {/* Signup Form */}
      <Card className="w-full max-w-md border border-orange-100 rounded-2xl shadow-lg flex-shrink-0">
        <CardContent className="p-8 space-y-6">
          <div className="text-center">
            <UserPlus className="h-10 w-10 text-orange-500 mx-auto mb-3" />
            <h1 className="text-3xl font-extrabold text-gray-800">
              {editingUser ? "Edit User" : "Create Account"}
            </h1>
            <p className="text-gray-500 text-sm">
              {editingUser ? "Update user details below." : "Fill in details to create a new user."}
            </p>
          </div>

          <div className="space-y-4">
            <Input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
            <Input name="username" placeholder="Username" value={form.username} onChange={handleChange} />

            {/* 👁️ Password input with toggle */}
            <div className="relative">
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <Input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />

            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 bg-white text-gray-700 focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select Role</option>
              <option value="executive">Executive</option>
              <option value="accountant">Accountant</option>
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
            </select>

            <Input
              name="managerId"
              placeholder="Manager ID (optional)"
              value={form.managerId}
              onChange={handleChange}
            />
          </div>

          <Button
            onClick={handleSignup}
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-4 h-4" />{" "}
                {editingUser ? "Updating..." : "Signing Up..."}
              </>
            ) : editingUser ? (
              "Update User"
            ) : (
              "Sign Up"
            )}
          </Button>

          {message && (
            <p
              className={`text-center text-sm font-medium ${message.includes("success") ? "text-green-600" : "text-red-500"
                }`}
            >
              {message}
            </p>
          )}
        </CardContent>
      </Card>

      {/* Users List */}
      <Card className="w-full max-w-5xl border border-orange-100 rounded-2xl shadow-lg flex-shrink-0">
        <CardContent className="p-6">
          {users.length === 0 ? (
            <p className="text-gray-500 text-center italic">No users found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-orange-100 text-gray-800">
                    <th className="p-2 text-left">Id</th>
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Username</th>
                    <th className="p-2 text-left">Phone</th>
                    <th className="p-2 text-left">Role</th>
                    <th className="p-2 text-left">Manager ID</th>
                    <th className="p-2 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-orange-50 transition">
                      <td className="p-2">{user.id}</td>
                      <td className="p-2">{user.name}</td>
                      <td className="p-2">{user.username}</td>
                      <td className="p-2">{user.phone || "—"}</td>
                      <td className="p-2 capitalize">{user.role}</td>
                      <td className="p-2">{user.managerId || "—"}</td>
                      <td className="p-2 flex justify-center gap-3">
                        <button
                          onClick={() => handleEdit(user)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
