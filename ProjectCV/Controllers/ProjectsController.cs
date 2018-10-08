using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjectCV.Models;

namespace ProjectCV.Controllers
{
    public class ProjectsController : Controller
    {
        //Projects Page
        [HttpGet]
        [Route("Projects")]
        public IActionResult Index()
        {
            Console.WriteLine("*** We Made it to the Projects Controller Projects Route! ***");
            return View("Index");
        }
    }
}