using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BLL.Models;

namespace BLL
{
    public static class DonationManager
    {
        public static Donation AddDonation(Donation donation)
        {
            if (donation.isValid())
            {    
                donation.Id = DB.Donations.Count + 1;//for debug only
                DB.Donations.Add(donation);
                if (donation.DonationSum > 10000)
                {
                    MessagesManager.HighDonation();
                }
                return donation;
            }
            return null;
        }


        public static Donation UpdateDonation(Donation donation)
        {
            if (donation.isValid())
            {
                var res = DB.Donations.SingleOrDefault(d => d.Id == donation.Id);
                if (res != null)
                {
                    res.ForeignPoliticalEntityName = donation.ForeignPoliticalEntityName;
                    //and all other properties...
                    return res;
                }
            }

            return null;     
        }
    }
}
