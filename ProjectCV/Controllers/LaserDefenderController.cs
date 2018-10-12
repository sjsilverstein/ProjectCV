using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjectCV.Models;

namespace UnityMVC.Controllers
{
    public class LaserDefenderController : Controller
    {
        [HttpGet]
        [Route("LaserDefender")]
        public IActionResult Index()
        {
            return View("Index");
        }
    }
}
