// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "../../config/nodemailer";


const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    //html
    let htmlContent = 

    `<div>
    <h4>Info</h4>
    <ul>
      <li>Name: ${data.name}</li>
      <li>Email: ${data.email}</li>
      <li>Phone Number: ${data.phone}</li>
      <li>When: ${data.date}</li>
      <li>Event Address: ${data.address}</li>
      <li>Type of Event: ${data.event}</li>
      <li>Number of Guests: ${data.count}</li>
      <li>Package: ${data.package}</li>
      <li>Social: ${data.social}</li>
      <li>Additional Notes: ${data.notes}</li>
    </ul>
    <h4>Addons</h4>
    `
    for (let i = 0; i < data.addons.length; i++) {
      htmlContent += `
        <li>${data.addons[i]}</li>
      `
    }

    htmlContent += `
          </ul>
        </body>
      </html>
      `;

    if (!data.name || !data.email || !data.phone || !data.date || !data.address || !data.event || !data.package) {
      return res.status(400).json({ message: 'Bad Request' })
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Quote request from ${data.name}`,
        text: "This is a test string",
        html: htmlContent
      });

      return res.status(200).json({ success: true })
    } catch(error) {
      console.log(error);
      return res.status(400).json({ message: error.message })
    }
  }

  return res.status(400).json({ message: 'Bad Request' })
}

export default handler;