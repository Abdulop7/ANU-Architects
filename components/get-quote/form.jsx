"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/serviecCard"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { CheckCircle, Clock, DollarSign, Users } from "lucide-react"

export default function QuoteRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError("")

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        })
      } else {
        setError(data.message || data.error || "Something went wrong.")
      }
    } catch (err) {
      setError("Failed to send quote request. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="quote-form" className="py-20 px-6 lg:px-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Request a <span className="text-orange-500">Free Quote</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Let us know about your project, and our expert team will provide a tailored solution
            that fits your vision, budget, and timeline.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-orange-500 mt-1" />
              <span className="text-gray-700">Quick response within 24 hours</span>
            </div>
            <div className="flex items-start gap-3">
              <DollarSign className="w-6 h-6 text-orange-500 mt-1" />
              <span className="text-gray-700">Transparent pricing with no hidden costs</span>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 text-orange-500 mt-1" />
              <span className="text-gray-700">Expert team dedicated to your project</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-orange-500 mt-1" />
              <span className="text-gray-700">Flexible scheduling to suit your needs</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <Card className="shadow-xl rounded-3xl border border-gray-100">
          <CardHeader className="pb-2">
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-xl"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-xl"
                />
              </div>
              <Input
                name="phone"
                type="tel"
                required
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="rounded-xl"
              />
              <Input
                name="service"
                required
                placeholder="Service Needed like ( Architectural Design, Interior Design )"
                value={formData.service}
                onChange={handleChange}
                className="rounded-xl"
              />
              <Input
                name="budget"
                required
                placeholder="Estimated Budget in PKR"
                value={formData.budget}
                onChange={handleChange}
                className="rounded-xl"
              />
              <Textarea
                name="message"
                required
                placeholder="Tell us more about your project..."
                value={formData.message}
                onChange={handleChange}
                className="rounded-xl"
              />

              {/* Feedback Messages */}
              {loading && <p className="text-blue-600 font-medium">Sending your request...</p>}
              {success && <p className="text-green-600 font-medium">Your quote request has been sent successfully!</p>}
              {error && <p className="text-red-600 font-medium">{error}</p>}

              <Button
                type="submit"
                className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-2xl shadow-lg transition-all ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Request Quote"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
