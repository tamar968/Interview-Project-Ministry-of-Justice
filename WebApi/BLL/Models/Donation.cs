
namespace BLL.Models
{
    public class Donation
    {
        public int Id { get; set; }
        public string ForeignPoliticalEntityName { get; set; }
        public double DonationSum { get; set; }
        public string ForeignPoliticalEntityType { get; set; }
        public string DonationDesignation { get; set; }
        public string DonationConditions { get; set; }
        public string CoinType { get; set; }
        public double ExchangeRateType { get; set; }

        public bool isValid()
        {
            return Validation.IsNotEmpty(this.ForeignPoliticalEntityName) && Validation.IsOnlyHebrewAndEnglishChars(this.ForeignPoliticalEntityName) &&
                Validation.IsNotEmpty(this.CoinType) &&
                Validation.IsNotEmpty(this.DonationDesignation) && Validation.IsOnlyHebrewAndEnglishChars(this.DonationDesignation) &&
                //Validation.IsNotEmpty(this.DonationSum) &&
                //Validation.IsNotEmpty(this.ExchangeRateType) &&
                Validation.IsNotEmpty(this.ForeignPoliticalEntityType);
        }

        //public bool isValid()
        //{
        //    if (!Validation.IsNotEmpty(this.ForeignPoliticalEntityName))
        //    {
        //        return false;
        //    }
        //    if (!Validation.IsOnlyHebrewAndEnglishChars(this.ForeignPoliticalEntityName))
        //    {
        //        return false;
        //    }

        //    if (!Validation.IsNotEmpty(this.CoinType))
        //    {
        //        return false;
        //    }
        //    if (!Validation.IsNotEmpty(this.DonationDesignation))
        //    {
        //        return false;
        //    }
        //    if (!Validation.IsOnlyHebrewAndEnglishChars(this.DonationDesignation)){
        //        return false;
        //    }
        //    //Validation.IsNotEmpty(this.DonationSum) &&
        //    //Validation.IsNotEmpty(this.ExchangeRateType) &&
        //    if (!Validation.IsNotEmpty(this.ForeignPoliticalEntityType))
        //    {
        //        return false;
        //    }
        //    return true;
        //}
    }
}