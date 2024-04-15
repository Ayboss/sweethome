import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { parse } from "next/dist/compiled/content-type";

export async function POST(request) {
  try {
    console.log("i am here");
    const data = await request.formData();
    let body = Object.fromEntries(data);
    console.log(body);
    let newstring = html.replace("{{firstname}}", body.firstname);
    newstring = newstring.replace("{{lastname}}", body.lastname);
    newstring = newstring.replace("{{number}}", body.phonenumber);
    newstring = newstring.replace("{{email}}", body.email);
    newstring = newstring.replace("{{comments}}", body.comments);

    await sendEmail(newstring);
    return NextResponse.json({ data: "success" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ data: "Error" }, { status: 400 });
  }
}

async function sendEmail(newstring) {
  // Replace with your SMTP credentials
  const smtpOptions = {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: "sweethomechandler@gmail.com",
    to: "sweethomechandler@gmail.com",
    subject: "SweetHome Contact", // Subject line
    text: "SweetHome Contact", // plain text body
    html: newstring,
    // attachments: [{ filename: "attachment.jpg", content: robot }],
  });
}

const html = `

<html>

<head>
    <style>
        .list{
            list-style: none;
        }
        .item{
            margin-bottom: 12px;
        }
        .title{
            font-weight: bold;
        }
        .value{}
        .heading{
            margin-top: 40px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
<h1>Prosthetic Information</h1>
<ul class="list">
    <h2 class="heading">PERSONAL INFORMATION</h2>
    <li class="item">
        <span class="title">Name:</span> 
        <span class="value">{{lastname}} {{firstname}}</span>
    </li>
    <li class="item">
        <span class="title">Email:</span> 
        <span class="value">{{email}}</span>
    </li>
    <li class="item">
        <span class="title">Mobile Number:</span> 
        <span class="value">{{number}}</span>
    </li>
    <li class="item">
        <span class="title">Country:</span> 
        <span class="value">{{comments}}</span>
    </li>

</ul>
</body>
</html>
`;

// hbzhawbttgvwkmkw
// hbzh awbt tgvw kmkw
