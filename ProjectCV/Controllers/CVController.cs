using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjectCV.Models;

namespace ProjectCV.Controllers
{
    public class CVController : Controller
    {
        //Contact Page
        [HttpGet]
        [Route("Resume")]
        public IActionResult Index()
        {
            Console.WriteLine("*** We Made it to the CV Controller CV Route! ***");
            return View("Index");
        }
    }
}