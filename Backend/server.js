import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path"; 

const app = express();
const PORT = 5000;
const __dirname = path.resolve();
 
app.use(cors());
app.use(bodyParser.json());


app.post("/send-mail", async (req, res) => {
  const { name, contact, address, service, email } = req.body;

  if (!name || !contact || !address || !service || !email) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net", 
      port: 465, 
      secure: true, 
      auth: {
        user: "services@baitaltahzeeb.com",
        pass: "Smt@8076!",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });


  const teamMailOptions = {
    from: `${email}`,
    to: "services@baitaltahzeeb.com",
    subject: `New Service Request from ${name}`,
    html: `
    <div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5; color: #333;">
      <h3 style="margin: 0 0 10px;">Hello Bait-Al-Tahzeeb Team,</h3>
      <h4 style="margin: 0 0 10px;">You have received a new service request for ${service}. Below are the details:</h4>
      <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
      <p style="margin: 5px 0;"><strong>Contact Number:</strong> ${contact}</p>
      <p style="margin: 5px 0;"><strong>Address:</strong> ${address}</p>
      <p style="margin: 5px 0;"><strong>Selected Service:</strong> ${service}</p>
      <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
      <h4 style="margin: 10px 0;">Please follow up with the client for further discussions.</h4>
      <br/>
      <p style="margin: 5px 0;">Thanks / Regards,</p>
      <p style="margin: 5px 0;">Customer Care</p>
      <p style="margin: 5px 0;">Bait-Al-Tahzeeb Cleaning Services and Building Maintenance LLC.</p>
      <p style="margin: 5px 0;">Website: <a href="https://www.baitaltahzeeb.com" target="_blank">www.baitaltahzeeb.com</a></p>
    </div>
  `,
  };


   
    const clientMailOptions = {
      from: "services@baitaltahzeeb.com",
      to: `${email}`, 
      subject: "Thank You for Choosing Bait-Al-Tahzeeb Services!",
      html: `
        <h3>Dear ${name},</h3>
        <p>Thank you for choosing Bait-Al-Tahzeeb Cleaning Services and Building Maintenance. We have received your request for <strong> ${service} </strong>. Our team will contact you shortly to discuss further details.</p>
        <p>If you have any questions in the meantime, feel free to reach out to us at:</p>
        <p>Email: services@baitaltahzeeb.com</p>
        <p>Phone: +971-504282001, +971589138900</p>
        <br/>
        <p>Thanks / Regards,</p>
        <p>Customer Care</p>
        <p>Bait-Al-Tahzeeb Cleaning Services and Building Maintenance LLC.</p>
        <p>Website: www.baitaltahzeeb.com</p>
        <br/>
      `,
    };

  
    await Promise.all([
      transporter.sendMail(teamMailOptions), 
      transporter.sendMail(clientMailOptions), 
    ]);

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ error: "Failed to send emails" });
  }
});

app.get("/demo", (req, res) => {
  res.send("Hello World!");
});
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist" , "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


/* import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-mail", async (req, res) => {
  const { name, contact, address, service, email } = req.body;

  if (!name || !contact || !address || !service || !email) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net", 
      port: 465, 
      secure: true, 
      auth: {
        user: "services@baitaltahzeeb.com",
        pass: "Smt@8076!",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });


  const teamMailOptions = {
    from: email,
    to: "services@baitaltahzeeb.com",
    subject: New Service Request from ${name},
    html: `
    <div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5; color: #333;">
      <h3 style="margin: 0 0 10px;">Hello Bait-Al-Tahzeeb Team,</h3>
      <h4 style="margin: 0 0 10px;">You have received a new service request for ${service}. Below are the details:</h4>
      <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
      <p style="margin: 5px 0;"><strong>Contact Number:</strong> ${contact}</p>
      <p style="margin: 5px 0;"><strong>Address:</strong> ${address}</p>
      <p style="margin: 5px 0;"><strong>Selected Service:</strong> ${service}</p>
      <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
      <h4 style="margin: 10px 0;">Please follow up with the client for further discussions.</h4>
      <br/>
      <p style="margin: 5px 0;">Thanks / Regards,</p>
      <p style="margin: 5px 0;">Customer Care</p>
      <p style="margin: 5px 0;">Bait-Al-Tahzeeb Cleaning Services and Building Maintenance LLC.</p>
      <p style="margin: 5px 0;">Website: <a href="https://www.baitaltahzeeb.com" target="_blank">www.baitaltahzeeb.com</a></p>
    </div>
  `,
  };


   
    const clientMailOptions = {
      from: "services@baitaltahzeeb.com",
      to: email, 
      subject: "Thank You for Choosing Bait-Al-Tahzeeb Services!",
      html: `
        <h3>Dear ${name},</h3>
        <p>Thank you for choosing Bait-Al-Tahzeeb Cleaning Services and Building Maintenance. We have received your request for <strong> ${service} </strong>. Our team will contact you shortly to discuss further details.</p>
        <p>If you have any questions in the meantime, feel free to reach out to us at:</p>
        <p>Email: services@baitaltahzeeb.com</p>
        <p>Phone: +971-504282001, +971589138900</p>
        <br/>
        <p>Thanks / Regards,</p>
        <p>Customer Care</p>
        <p>Bait-Al-Tahzeeb Cleaning Services and Building Maintenance LLC.</p>
        <p>Website: www.baitaltahzeeb.com</p>
        <br/>
      `,
    };

  
    await Promise.all([
      transporter.sendMail(teamMailOptions), 
      transporter.sendMail(clientMailOptions), 
    ]);

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ error: "Failed to send emails" });
  }
});
app.listen(PORT, () => {
  console.log(Server running on http://localhost:${PORT});
});*/
