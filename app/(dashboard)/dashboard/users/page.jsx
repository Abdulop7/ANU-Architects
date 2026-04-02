"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Loader2, UserPlus, Edit2, Trash2, Eye, EyeOff } from "lucide-react";
import { useRole } from "@/lib/roleContext";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    role: "",
    phone: "",
    managerId: "",
  });
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { role, users: currentUsers, contextLoading } = useRole();
  const router = useRouter();

  const roleOrder = {
    executive: 1,
    accountant: 2,
    manager: 3,
    employee: 4,
  };

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
  }, [contextLoading, role, router]);

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
      setMessage("Missing parameters in directive.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const payload = {
        ...form,
        managerId: form.managerId ? parseInt(form.managerId, 10) : null,
      };

      if (editingUser) {
        const res = await axios.put(`/api/users/${editingUser.id}`, payload);
        setMessage(res.data.message || "Operative record updated.");
        setUsers((prev) =>
          sortUsers(prev.map((u) => (u.id === editingUser.id ? { ...u, ...payload } : u)))
        );
        setEditingUser(null);
      } else {
        const res = await axios.post("/api/auth/signup", payload);
        setMessage(res.data.message || "Operative successfully instantiated.");
        if (res.data.user) {
          setUsers((prev) => sortUsers([...prev, res.data.user]));
        } else {
          await fetchUsers();
        }
      }

      setForm({ name: "", username: "", password: "", role: "", phone: "", managerId: "" });
    } catch (err) {
      setMessage(err.response?.data?.error || "System failure. Check logs.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("CONFIRM TERMINATION OF OPERATIVE RECORD?")) return;
    try {
      await axios.delete(`/api/users/${id}`);
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

  if (contextLoading) {
    return (
      <div className="flex h-[50vh] w-full items-center justify-center">
        <Loader2 className="animate-spin text-white/20 h-10 w-10" />
      </div>
    );
  }

  return (
    <div className="w-full space-y-16 lg:space-y-24 pb-20">
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8 mt-12">
        <h1 className="headline-2 text-white uppercase tracking-[0.2em] flex items-center gap-4">
          <UserPlus className="h-10 w-10 text-accent" />
          Operative <span className="text-accent">Registry</span>
        </h1>
        <p className="text-secondary text-sm tracking-widest uppercase">Identity creation & System tracking</p>
        <div className="w-24 h-1 bg-accent mt-4"></div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative">
        
        {/* Left Side: Form */}
        <div className="lg:col-span-4 sticky top-8 border-b lg:border-b-0 lg:border-r border-white/5 pb-16 lg:pb-0 lg:pr-16">
          <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white">
              {editingUser ? "Edit Directive" : "Create Identity"}
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-[0.65rem] tracking-[0.2em] font-bold text-white/30 uppercase mb-2 block">System Name</label>
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-[#050505] p-4 text-sm font-serif border border-white/10 focus:border-accent text-white outline-none transition-colors"
              />
            </div>
            
            <div>
              <label className="text-[0.65rem] tracking-[0.2em] font-bold text-white/30 uppercase mb-2 block">Access Handle</label>
              <input
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                className="w-full bg-[#050505] p-4 text-sm font-serif border border-white/10 focus:border-accent text-white outline-none transition-colors"
              />
            </div>

            <div>
              <label className="text-[0.65rem] tracking-[0.2em] font-bold text-white/30 uppercase mb-2 block">Secure Key</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={editingUser ? "(Unchanged)" : "Password"}
                  value={form.password}
                  onChange={handleChange}
                  className="w-full bg-[#050505] p-4 text-sm font-serif border border-white/10 focus:border-accent text-white outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div>
              <label className="text-[0.65rem] tracking-[0.2em] font-bold text-white/30 uppercase mb-2 block">Comms Relay</label>
              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-[#050505] p-4 text-sm font-serif border border-white/10 focus:border-accent text-white outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[0.65rem] tracking-[0.2em] font-bold text-white/30 uppercase mb-2 block">Clearance</label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full bg-[#050505] p-4 text-[0.7rem] uppercase font-bold tracking-widest border border-white/10 focus:border-accent text-white outline-none transition-colors cursor-pointer appearance-none"
                >
                  <option value="">Role</option>
                  <option value="executive">Executive</option>
                  <option value="accountant">Accountant</option>
                  <option value="manager">Manager</option>
                  <option value="employee">Employee</option>
                </select>
              </div>
              <div>
                <label className="text-[0.65rem] tracking-[0.2em] font-bold text-white/30 uppercase mb-2 block">Supervisor Ref</label>
                <input
                  name="managerId"
                  placeholder="ID (opt.)"
                  value={form.managerId}
                  onChange={handleChange}
                  className="w-full bg-[#050505] p-4 text-sm font-serif border border-white/10 focus:border-accent text-white outline-none transition-colors"
                />
              </div>
            </div>

            <div className="pt-8 text-right">
              {message && (
                <div className={`mb-4 text-[0.6rem] font-bold tracking-[0.2em] uppercase text-left border-l-2 pl-4 ${message.includes("success") ? "text-green-500 border-green-500" : "text-red-500 border-red-500"}`}>
                  {message}
                </div>
              )}
              <button
                onClick={handleSignup}
                disabled={loading}
                className={`w-full bg-accent hover:bg-white text-white hover:text-black font-bold tracking-[0.2em] uppercase text-[0.65rem] py-4 transition-colors flex justify-center items-center gap-3 ${loading ? "opacity-50" : ""}`}
              >
                {loading ? <Loader2 className="animate-spin w-4 h-4" /> : null}
                {editingUser ? "Commmit Edit" : "Initialize User"}
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: List */}
        <div className="lg:col-span-8">
          <div className="flex justify-between items-end border-b border-white/5 pb-4 mb-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white">
               Active Directory
            </h2>
            <span className="text-[0.65rem] text-secondary tracking-[0.2em] uppercase font-black">{users.length} Indices</span>
          </div>

          <div className="space-y-0">
            {users.length === 0 ? (
              <p className="text-[0.65rem] tracking-[0.2em] text-white/30 font-serif italic py-6 uppercase">No user directives active.</p>
            ) : (
              users.map((user) => (
                <div key={user.id} className="border-b border-white/5 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group hover:bg-[#111] transition-colors -mx-4 px-4">
                  <div className="flex flex-col gap-2 w-full sm:w-auto">
                    <div className="flex items-center gap-4">
                       <span className="text-[0.65rem] font-black text-white/40 tracking-[0.3em]">ID:{String(user.id).padStart(3, '0')}</span>
                       <h3 className="text-[0.75rem] font-bold uppercase tracking-widest text-white">{user.name}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-[0.55rem] tracking-[0.2em] uppercase font-bold">
                       <span className="text-accent">{user.role}</span>
                       <span className="text-secondary">{user.username}</span>
                       {user.phone && <span className="text-white/60 font-serif">{user.phone}</span>}
                       {user.managerId && <span className="text-white/30 border border-white/10 px-2 py-0.5">SUP-ID: {user.managerId}</span>}
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 w-full sm:w-auto mt-4 sm:mt-0 opacity-100 sm:opacity-50 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleEdit(user)}
                      className="bg-white/5 hover:bg-accent text-white px-4 py-2 text-[0.55rem] tracking-[0.2em] font-bold uppercase transition-colors"
                    >
                      <Edit2 className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-white/5 hover:bg-red-500 text-white px-4 py-2 text-[0.55rem] tracking-[0.2em] font-bold uppercase transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
