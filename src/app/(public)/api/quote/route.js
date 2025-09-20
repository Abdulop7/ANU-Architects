import nodemailer from "nodemailer";

// POST /api/quote
export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, phone, service, budget, message } = body

    // Basic validation
    if (!name || !email || !service || !message) {
      return new Response(
        JSON.stringify({ message: "Name, Email, Service, and Message are required." }),
        { status: 400 }
      )
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "abdulsaboora691@gmail.com", // Your Gmail or app email
        pass: "bght hqnw wytn uazq", // App password from Gmail
      },
    })

    // Email content
    const emailContent = `
You have received a new quote request:

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Service Needed: ${service}
Estimated Budget: ${budget || "N/A"}

Message:
${message}
    `

    // Send mail
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "info.anuarchitects@gmail.com", // Your receiving email
      subject: "New Quote Request Submission",
      text: emailContent,
    })

    return new Response(
      JSON.stringify({ success: true, message: "Quote request sent successfully!" }),
      { status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    )
  }
}
