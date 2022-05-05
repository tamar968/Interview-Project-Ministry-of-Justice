using BLL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BLL
{
    public class DB
    {
        public static List<Donation> Donations { get; set; } = new List<Donation>() { };
    }
}