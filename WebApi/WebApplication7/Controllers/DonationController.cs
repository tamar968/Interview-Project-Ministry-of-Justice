using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using BLL;

namespace API.Controllers
{
    [RoutePrefix("api/donation")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class DonationController : ApiController
    {
        [HttpGet]
        [Route("get")]
        public IHttpActionResult Get()
        {
            try
            {
                return Ok(DonationManager.GetDonationsList());
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }
        
        [HttpPost]
        [Route("add")]
        public IHttpActionResult Add([FromBody] Donation newDonation)
        {
           var res = DonationManager.AddDonation(newDonation);
            if (res != null)
            {
                return Ok(res);
            }
            return InternalServerError(new Exception("invalid donation"));
        }

        [HttpPost]
        [Route("update")]
        public IHttpActionResult Update([FromBody] Donation donation)
        {
            var res = DonationManager.UpdateDonation(donation);
            if (res != null)
            {
                return Ok(res);
            }
            return InternalServerError(new Exception("donation is not exist or not valid"));
        }
    }
}
