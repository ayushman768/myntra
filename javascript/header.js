var body = document.getElementById('body');
var head_nav = document.createElement('header');
body.appendChild(head_nav);



var header_nav = [{
        logo_link: "index.html",
        logo: "images/logos/header-logo.png",


    },
    {
        nav_li01: "men.html",
        nav_li02: "women.html",
        nav_li03: "kids.html",
        nav_li04: "living.html",
        nav_li05: "offer.html"
    }
];

document.querySelector('header').innerHTML += `
 <div class="container-fluid">
    <div class="row">
        <div class="col-md-6">
            <div class="logo_nav flex">
                <a href="${header_nav[0].logo_link}"><img src="${header_nav[0].logo}"></a>
                <div class="navigation pad-10">
                    <ul class="nav navbar-nav">
                        <li><a href="${header_nav[1].nav_li01}">MEN</a></li>
                        <li><a href="${header_nav[1].nav_li02}">WOMEN</a></li>
                        <li><a href="${header_nav[1].nav_li03}">KIDS</a></li>
                        <li><a href="${header_nav[1].nav_li04}">HOME & LOVING</a></li>
                        <li><a href="${header_nav[1].nav_li05}">OFFERS</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="header_widget01 pad-10 margin-top text-right">
                <input type="search" class="form-control bg-gray" placeholder="Search for products, and brands">
              
            </div>
        </div>
        <div class="col-md-2">
        <div class="header_widget pad-10">
            <ul class="navbar-nav nav pad-10 ">
                <li><span>&nbsp;&nbsp;<i class='fas fa-user-alt' style='font-size:24px'></i></span></li>
                 
                <li><span>&nbsp;&nbsp;<i class='far fa-bookmark' style='font-size:24px'></i></span></li>

                <li><span>&nbsp;&nbsp;<i class="fa fa-shopping-bag" style="font-size:24px"></i></span></li>
            </ul>
          
        </div>
    </div>
    </div>
 </div>
`;



document.querySelector('header').innerHTML += `
 <div class="container-fluid">
    <div class="row">

        <div class="col-md-12">
        <div class="header_widget-mobile pad-10">
            <ul class="navbar-nav nav pad-10 ">
                <li><span>&nbsp;&nbsp;<i class='fas fa-user-alt' style='font-size:24px'></i></span></li>
                 
                <li><span>&nbsp;&nbsp;<i class='far fa-bookmark' style='font-size:24px'></i></span></li>

                <li><span>&nbsp;&nbsp;<i class="fa fa-shopping-bag" style="font-size:24px"></i></span></li>
            </ul>
          
        </div>
      </div>
    </div>
 </div>
`;


