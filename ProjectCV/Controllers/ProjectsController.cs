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
            return View("Index");
        }
        [HttpGet]
        [Route("Projects/LaserDefender")]
        public IActionResult LaserDefender()
        {
            return View("LaserDefender");
        }
    }
}