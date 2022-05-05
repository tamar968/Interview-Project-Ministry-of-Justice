using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public static class  MessagesManager
    {
        public static void SendEmail(string emailAddress,string subject, string body)
        {
            var fromAddress = new MailAddress("tha769880@gmail.com", "shar shar");
            var toAddress = new MailAddress(emailAddress);
            const string fromPassword = "15082020e";

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
            };
            using (var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body
            })
            {
                smtp.Send(message);
            }
        }

        public static void HighDonation()
        {
            SendEmail("tamar96880@gmail.com", "התקבלה תרומה גבוהה במיוחד", "סכום התרומה בשח גדול מ – 10000 ");
        }
    }
}
