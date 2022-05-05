
namespace DTO
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
    }
}