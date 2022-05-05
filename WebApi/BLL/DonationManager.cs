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
            return ValidationManager.IsNotEmpty(donation.ForeignPoliticalEntityName) && ValidationManager.IsOnlyHebrewAndEnglishChars(donation.ForeignPoliticalEntityName) &&
                ValidationManager.IsNotEmpty(donation.CoinType) &&
                ValidationManager.IsNotEmpty(donation.DonationDesignation) && ValidationManager.IsOnlyHebrewAndEnglishChars(donation.DonationDesignation) &&
                ValidationManager.IsNotEmpty(donation.DonationSum) &&
                ValidationManager.IsNotEmpty(donation.ExchangeRateType) &&
                ValidationManager.IsNotEmpty(donation.ForeignPoliticalEntityType);
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
