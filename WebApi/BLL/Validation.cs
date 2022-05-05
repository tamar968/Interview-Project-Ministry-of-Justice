using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace BLL
{
    public static class Validation
    {
        public static bool RegexMatch(string input, string regex) {

            var match = Regex.Match(input, regex, RegexOptions.IgnoreCase);
            return match.Success;
        }
        public static bool IsNotEmpty(string input)
        {
            return !string.IsNullOrEmpty(input);
        }

        public static bool IsNotEmpty(int input)
        {
            return input != null;
        }
        public static bool IsNotEmpty(double input)
        {
            return  input != null;
        }

        public static bool IsOnlyHebrewAndEnglishChars(string input)
        {
            return RegexMatch(input, @"^[א-תa-zA-Z\s]+$");
        }
    }
}
