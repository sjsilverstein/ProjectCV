using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjectCV.Models;

namespace ProjectCV.Controllers
{
    public class ContactController : Controller
    {
        //Contact Page
        [HttpGet]
        [Route("ContactInfo")]
        public IActionResult Index()
        {
            Console.WriteLine("*** We Made it to the Contact Controller ContactInfo Route! ***");
            return View("Index");
        }
    }
}