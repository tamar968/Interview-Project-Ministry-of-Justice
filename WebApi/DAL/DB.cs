using DTO;
using System.Collections.Generic;

namespace DAL
{
    public class DB
    {
        public static List<Donation> Donations { get; set; } = new List<Donation>() {
           new Donation()  {
                  Id = 1,
                  ForeignPoliticalEntityName = "יישות1",
                  DonationSum= 100,
                  ForeignPoliticalEntityType= "מדינה זרה",
                  DonationDesignation= "donation Designation",
                  DonationConditions= "donationConditions",
                  CoinType= "שקל ישראלי חדש",
                  ExchangeRateType= 3.14
                },
           new Donation()  {
                  Id= 2,
                  ForeignPoliticalEntityName = "יישות2",
                  DonationSum= 100,
                  ForeignPoliticalEntityType= "מדינה זרה",
                  DonationDesignation= "donation Designation",
                  DonationConditions= "donationConditions",
                  CoinType= "שקל ישראלי חדש",
                  ExchangeRateType= 3.65
            }
        };
    }
}