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
  const { name, contact, address, service } = req.body;

  if (!name || !contact || !address || !service) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net", //Only SMTP host
      port: 465, // SSL
      secure: true, // we use SSL
      auth: {
        user: "services@baitaltahzeeb.com", //email
        pass: "Smt@8076!", //password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const mailOptions = {
      from: "services@baitaltahzeeb.com",
      to: "services@baitaltahzeeb.com", // Recipient's email
      subject: `You have a New Service Request from ${name}`,
      html: `
    <h3>Hello Bait-Al-Tahzeeb Team,</h3>
    <h4>You have received a New Service Request for ${service}. Below are the details:</h4>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Contact Number:</strong> ${contact}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Selected Service:</strong> ${service}</p>
    <h4>Please follow up with the client for further discussions.</h4>
    <br/>
    <p>Thanks /Regards,</p>
    <p>Customer Care</p>
    <p>Bait-Al-Tahzeeb cleaning services and building maintenance IIC</p>
    <p>Business bin hareeb centre</p>
    <p>Business center shop 05</p>
    <p>Nakeel 2,Ajman (UAE)</p>
    <p>Mob No +971-504282001  +971589138900</p>
    <p>Email: services@baitaltahzeeb.com</p>
    <p>Website: www.baitaltahzeeb.com</p>
    <br/>
  
  `,
    
    };
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
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
