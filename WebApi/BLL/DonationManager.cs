using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BLL
{
    public static class DonationManager
    {
        public static bool isValidDonation(Donation donation)
        {
            return Validation.IsNotEmpty(donation.ForeignPoliticalEntityName) && Validation.IsOnlyHebrewAndEnglishChars(donation.ForeignPoliticalEntityName) &&
                Validation.IsNotEmpty(donation.CoinType) &&
                Validation.IsNotEmpty(donation.DonationDesignation) && Validation.IsOnlyHebrewAndEnglishChars(donation.DonationDesignation) &&
                Validation.IsNotEmpty(donation.DonationSum) &&
                Validation.IsNotEmpty(donation.ExchangeRateType) &&
                Validation.IsNotEmpty(donation.ForeignPoliticalEntityType);
        }

        public static List<Donation> GetDonationsList()
        {
            return DB.Donations;
        }

        public static Donation AddDonation(Donation donation)
        {
            if (isValidDonation(donation))
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
            if (isValidDonation(donation))
            {
                var res = DB.Donations.SingleOrDefault(d => d.Id == donation.Id);
                if (res != null)
                {
                    res.ForeignPoliticalEntityName = donation.ForeignPoliticalEntityName;
                    res.CoinType = donation.CoinType;
                    res.ForeignPoliticalEntityType = donation.ForeignPoliticalEntityType;
                    res.DonationDesignation = donation.DonationDesignation;
                    res.DonationConditions = donation.DonationConditions;
                    res.DonationSum = donation.DonationSum;
                    res.ExchangeRateType = donation.ExchangeRateType;
   
                    return res;
                }
            }

            return null;     
        }
    }
}
