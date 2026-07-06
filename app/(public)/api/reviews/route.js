import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, rating, feedback } = body;


    if (!name || !rating || !feedback) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "abdulsaboora691@gmail.com",          // ✅ Use env variable
        pass: "ehtf tbcn tbgk qzob", // ✅ App password
      },
    });

    // Send mail
    await transporter.sendMail({
      from: `"${name}"`,
      to: "info.anuarchitects@gmail.com",
      subject: "New Feedback Form Submission",
      text: `
        You received a new feedback:

        Name: ${name}
        Rating: ${rating}
        Feedback: ${feedback}
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Message sent!" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
