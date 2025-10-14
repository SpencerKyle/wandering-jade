// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { transporter } from "../../config/nodemailer";


const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    //date regex
    const newDate = data.date.replace(/\W/g, '')

    //html content for detailed email
    let htmlContent = `<!DOCTYPE html><html lang="en"><head></head><body style="margin:0 auto 0 auto;width:500px;font-family:'trebuchet ms';background-color:#fff!important"><div><div style="text-align:center"><img style="width:200px;height:200px" src="https://www.wanderingjademobilebar.com/_next/image?url=%2Fwandering-jade-4.png&w=640&q=75" alt="Wandering Jade Logo"></div><div style="text-align:center;padding:10px"><h1 style="margin:0 auto 0 auto;width:fit-content;border-radius:15px;background-color:#e6bdbe;padding:.75rem;color:#fff">New Quote!</h1></div><div style="padding:10px 30px"><p>Name:<span style="font-weight:700;font-size:larger">${data.name}</span></p><p>Email:<span style="font-weight:700;font-size:larger">${data.email}</span></p><p>Phone:<span style="font-weight:700;font-size:larger">${data.phone}</span></p><p>Date:<span style="font-weight:700;font-size:larger"><a href="https://calendar.google.com/event?action=TEMPLATE&dates=${newDate}/${newDate}&text=${data.name}&details=${data.event}">${data.date}</a></span></p><p>Address:<span style="font-weight:700;font-size:larger">${data.address}</span></p><p>City:<span style="font-weight:700;font-size:larger">${data.city}</span></p><p>Zip:<span style="font-weight:700;font-size:larger">${data.zip}</span></p><p>Type of Event:<span style="font-weight:700;font-size:larger">${data.event}</span></p><p>Coordinator Info (If Applicable):<span style="font-weight:700;font-size:larger">${data.weddingDetails}</span></p><p>Guests:<span style="font-weight:700;font-size:larger">${data.count}</span></p><p>Package:<span style="font-weight:700;font-size:larger">${data.package}</span></p><p>Social:<span style="font-weight:700;font-size:larger">${data.social}</span></p><p>Additional Notes:<span style="font-weight:700;font-size:larger">${data.notes}</span></p><h3>Addons:</h3><ul>`
    
    for (let i = 0; i < data.addons.length; i++) {
      htmlContent += `<li style=font-weight:700;font-size:larger;margin:5px>${data.addons[i]}</li>`
    }
    
    htmlContent += `</ul></div><div style=background-color:#5c7551!important;vertical-align:middle><div style=text-align:center;padding:30px><img alt="Wandering Jade Logo"src="https://www.wanderingjademobilebar.com/wandering-jade-4.png"style=width:100px;height:100px></div></div></div>`;

    if (!data.name || !data.email || !data.phone || !data.date || !data.address || !data.event || !data.package) {
      return res.status(400).json({ message: 'Bad Request' })
    }

    try {
      await Promise.all([transporter.sendMail({
        from: 'wanderingjadebar@gmail.com',
        to: 'wanderingjadebar@gmail.com',
        subject: `Quote request from ${data.name}`,
        text: "This is a test string",
        html: htmlContent,
      }), transporter.sendMail({
        from: 'wanderingjadebar@gmail.com',
        to: `${data.email}`,
        subject: `We've recieved your request!`,
        text: `test`,
        html: `<!doctypehtml><html lang=en><body style="margin:0 auto 0 auto;width:500px;font-family:'trebuchet ms';background-color:#fff!important"><div><div style=text-align:center><img src="https://www.wanderingjademobilebar.com/wandering-jade-4.png"alt="Wandering Jade Logo"style=width:200px;height:200px></div><div style=text-align:center;margin:30px><p style=width:75%;margin:auto;font-size:x-large>Thank you so much for submitting a quote through our website!<br><br>We will get back to you shortly.</div><div style=text-align:center;margin:30px><p style=width:75%;margin:auto;font-size:x-large>In the meantime please feel free to check us out at any of our socials below.<div style=margin-top:20px><a href="https://www.facebook.com/profile.php?id=100093143334442"target=_blank><img src=https://www.wanderingjademobilebar.com/facebook.svg height=45px width=45px></a><a href="https://www.tiktok.com/@wandering.jade_bar" target=_blank><img src=https://www.wanderingjademobilebar.com/tiktok-sq.svg height=45px width=45px><a href="https://instagram.com/wandering.jade.bar" target=_blank><img src=https://www.wanderingjademobilebar.com/instagram-fill.svg height=45px width=45px></div></div><div style=background-color:#5c7551!important;vertical-align:middle><div style=text-align:center;padding:30px><img src="https://www.wanderingjademobilebar.com/wandering-jade-4.png"alt="Wandering Jade Logo"style=width:100px;height:100px></div></div></div>`
      })]) 

      return res.status(200).json({ success: true })
    } catch(error) {
      console.log(error);
      return res.status(400).json({ message: error.message })
    }
  }

  return res.status(400).json({ message: 'Bad Request' })
}

export default handler;