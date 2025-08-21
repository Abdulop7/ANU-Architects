"use client"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if (data.success) {
        setStatus({ type: "success", message: "Message sent successfully!" })
        setFormData({ name: "", email: "", message: "" }) // reset form
      } else {
        setStatus({ type: "error", message: data.error || "Something went wrong." })
      }
    } catch (err) {
      setStatus({ type: "error", message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Contact Info */}
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Let’s <span className="text-orange-500">Connect</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Have a project in mind? We’d love to hear from you.  
              Reach out and let’s bring your ideas to life.
            </p>
          </div>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-orange-400 transition-all">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-orange-500 text-white rounded-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p className="text-gray-600 text-sm">Level 2 of Building, Commercial Block next to Fort Avenue Society Gate, Multan Public School Road, Multan, 66000</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-orange-400 transition-all">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-orange-500 text-white rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600 text-sm">info.anuarchitects@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-orange-400 transition-all">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-orange-500 text-white rounded-xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600 text-sm">+92 306 6777691</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl p-10 border border-gray-100 hover:shadow-2xl transition-all">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full min-h-[140px]"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-6 text-lg transition-colors"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {status && (
              <p
                className={`mt-4 text-center text-sm font-medium ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
