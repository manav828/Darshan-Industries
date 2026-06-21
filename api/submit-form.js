const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    // Enable CORS for frontend API calls
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    try {
        const { name, email, company, phone, inquiry_type, specific_product, quantity, message, category } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'Required fields (Name, Email, Message) are missing.' });
        }

        // Get SMTP configuration from Vercel Environment Variables
        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = parseInt(process.env.SMTP_PORT || '587');
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const smtpTo = process.env.SMTP_TO || 'info@darshanindustries.co';
        const smtpFrom = process.env.SMTP_FROM || `"Darshan Industries Form" <${smtpUser}>`;

        // If credentials are not configured, log error and return warning
        if (!smtpHost || !smtpUser || !smtpPass) {
            console.error('SMTP configuration missing: SMTP_HOST, SMTP_USER, or SMTP_PASS not set.');
            return res.status(500).json({ 
                success: false, 
                message: 'Mail server credentials are not fully set in Vercel Environment Variables.' 
            });
        }

        // Create the SMTP transporter
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465, // true for 465, false for 587 or other ports
            auth: {
                user: smtpUser,
                pass: smtpPass
            },
            tls: {
                rejectUnauthorized: false // Helps avoid SSL handshake issues on custom domains
            }
        });

        // Structure email subject and format depending on form source
        const isQuote = !!category;
        const subject = isQuote 
            ? `[Quote Request] ${category} - ${company || name}`
            : `[Web Inquiry] ${inquiry_type || 'General'} - ${company || name}`;

        // Construct a premium HTML email template
        const htmlContent = `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a1b1f; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                <div style="background-color: #00112c; color: #ffffff; padding: 30px 24px; text-align: center;">
                    <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.5px;">DARSHAN INDUSTRIES</h1>
                    <p style="margin: 8px 0 0; font-size: 14px; opacity: 0.8; text-transform: uppercase; letter-spacing: 1px;">
                        ${isQuote ? 'Procurement Quote Request' : 'General Sourcing Inquiry'}
                    </p>
                </div>
                <div style="padding: 32px 24px; background-color: #ffffff;">
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; color: #434750; width: 160px; border-bottom: 1px solid #f4f3f7; font-size: 14px;">Full Name:</td>
                            <td style="padding: 10px 0; color: #1a1b1f; border-bottom: 1px solid #f4f3f7; font-size: 14px;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; color: #434750; border-bottom: 1px solid #f4f3f7; font-size: 14px;">Email Address:</td>
                            <td style="padding: 10px 0; color: #1a1b1f; border-bottom: 1px solid #f4f3f7; font-size: 14px;">
                                <a href="mailto:${email}" style="color: #002552; text-decoration: none; font-weight: 500;">${email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; color: #434750; border-bottom: 1px solid #f4f3f7; font-size: 14px;">Company Name:</td>
                            <td style="padding: 10px 0; color: #1a1b1f; border-bottom: 1px solid #f4f3f7; font-size: 14px;">${company || 'N/A'}</td>
                        </tr>
                        ${phone ? `
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; color: #434750; border-bottom: 1px solid #f4f3f7; font-size: 14px;">Phone Number:</td>
                            <td style="padding: 10px 0; color: #1a1b1f; border-bottom: 1px solid #f4f3f7; font-size: 14px;">${phone}</td>
                        </tr>` : ''}
                        ${isQuote ? `
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; color: #434750; border-bottom: 1px solid #f4f3f7; font-size: 14px;">Product Category:</td>
                            <td style="padding: 10px 0; color: #1a1b1f; border-bottom: 1px solid #f4f3f7; font-size: 14px; font-weight: 600;">${category}</td>
                        </tr>
                        ` : `
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; color: #434750; border-bottom: 1px solid #f4f3f7; font-size: 14px;">Inquiry Type:</td>
                            <td style="padding: 10px 0; color: #1a1b1f; border-bottom: 1px solid #f4f3f7; font-size: 14px;">${inquiry_type}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; color: #434750; border-bottom: 1px solid #f4f3f7; font-size: 14px;">Specific Product:</td>
                            <td style="padding: 10px 0; color: #1a1b1f; border-bottom: 1px solid #f4f3f7; font-size: 14px;">${specific_product || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; font-weight: 600; color: #434750; border-bottom: 1px solid #f4f3f7; font-size: 14px;">Quantity:</td>
                            <td style="padding: 10px 0; color: #1a1b1f; border-bottom: 1px solid #f4f3f7; font-size: 14px;">${quantity || 'N/A'}</td>
                        </tr>
                        `}
                    </table>
                    
                    <div style="margin-top: 24px;">
                        <h4 style="margin: 0 0 10px; font-size: 14px; font-weight: 600; color: #434750; text-transform: uppercase; letter-spacing: 0.5px;">Message Details:</h4>
                        <div style="background-color: #f4f3f7; border: 1px solid #e0e0e0; padding: 18px; border-radius: 12px; white-space: pre-wrap; font-size: 14px; color: #1a1b1f; font-family: inherit;">${message}</div>
                    </div>
                </div>
                <div style="background-color: #f4f3f7; padding: 16px; text-align: center; font-size: 12px; color: #718096; border-top: 1px solid #e0e0e0;">
                    This inquiry was submitted from the Darshan Industries Website Contact Form.
                </div>
            </div>
        `;

        const mailOptions = {
            from: smtpFrom,
            to: smtpTo,
            replyTo: `"${name}" <${email}>`,
            subject: subject,
            html: htmlContent
        };

        // Send email securely
        await transporter.sendMail(mailOptions);

        return res.status(200).json({ success: true, message: 'Your inquiry has been successfully sent!' });
    } catch (error) {
        console.error('SMTP Error:', error);
        return res.status(500).json({ success: false, message: 'SMTP Mail dispatch failed: ' + error.message });
    }
};
