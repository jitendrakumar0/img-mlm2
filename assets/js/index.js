
// (function($){
//     $(window).on("load",function(){
//         $(".content").mCustomScrollbar();
//     });
// })(jQuery);

// Header & Footer include js
$(function(){
    $("#myHeader").load("layout/header.html"); 
    $("#myFooter").load("layout/footer.html");
    $(".emptState").load("layout/empty-state.html"); 
});

var prelodar = document.querySelector(".preLoader");
    window.addEventListener('load', function(){
    prelodar.classList.remove('active');
    document.body.style.overflow = 'hidden auto';
});

// header sticky   
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll <= 1) {
        $("nav.navbar").removeClass("nav-active");
    } else {
        $("nav.navbar").addClass("nav-active");
    }
});

// show back to top button   
$(window).scroll(function () {
    var pagescroll = $(window).scrollTop();
    if (pagescroll <= 500) {
        $(".backToTopbtn").removeClass("clickToTop");
    } else {
        $(".backToTopbtn").addClass("clickToTop");
    }
});

// form validation
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault()
        if (!form.checkValidity()) {
            event.stopPropagation()
        }else{
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


  
    // otp input tab change
    let digitValidate = function(ele){
    console.log(ele.value);
    ele.value = ele.value.replace(/[^0-9]/g,'');
    }
    let tabChange = function(val){
        let ele = document.querySelectorAll('.otp');
            if(ele[val-1].value != ''){
            ele[val].focus()
            }else if(ele[val-1].value == ''){
            ele[val-2].focus()
        }   
    }

//? ###################################### login Page JS ######################################
if ($("[page-name=loginPage]").length) {
    const passBtn = document.querySelectorAll('.passBtn');
    passBtn.forEach(passBtns =>{
        passBtns.addEventListener('click', (e)=>{
            let newVar = e.currentTarget;
            let inputType = newVar.previousElementSibling;
            inputType.getAttribute('type') === 'password' ? inputType.setAttribute('type', 'text') : inputType.setAttribute('type', 'password');
            let changeImg = newVar.firstElementChild;
            if (changeImg.src.match("eyeIconHide")) {
                changeImg.src = "assets/img/icons/eyeIconShow.svg";
            } else {
                changeImg.src = "assets/img/icons/eyeIconHide.svg";
            }
        });
    });
    


    // show forgot pass page 
    let sectionOuter = document.querySelector('.loginOuter');
    let forgotTxt = document.querySelector('#forgotTxt');
    let cancelBtn = document.querySelector('.cancelBtn');
    let otpSend = document.querySelector('.otpSend');
    let otpSubmit = document.querySelector('.otpSubmit');
    let passwordSubmit = document.querySelector('.passwordSubmit');
    forgotTxt.addEventListener('click', (e)=>{
        sectionOuter.classList.replace('login', 'forgotPass');
    });
    cancelBtn.addEventListener('click', ()=>{
        sectionOuter.classList.replace('forgotPass', 'login');
    });
    otpSend.addEventListener('click', ()=>{
        (() => {
            'use strict'
            
            const forms = document.querySelectorAll('.needs-validation')
          
            Array.from(forms).forEach(form => {
              form.addEventListener('submit', event => {
                event.preventDefault()
                if (!form.checkValidity()) {
                    event.stopPropagation()
                }else{
                    sectionOuter.classList.replace('forgotPass', 'enterOtp');
                }
          
                form.classList.add('was-validated')
              }, false)
            })
          })()
    });
    otpSubmit.addEventListener('click', ()=>{
        (() => {
            'use strict'
            const forms = document.querySelectorAll('.needs-validation')
            Array.from(forms).forEach(form => {
              form.addEventListener('submit', event => {
                event.preventDefault()
                if (!form.checkValidity()) {
                    event.stopPropagation()
                }else{
                    sectionOuter.classList.replace('enterOtp', 'createPass');
                }
          
                form.classList.add('was-validated')
              }, false)
            })
          })()
    })
    passwordSubmit.addEventListener('click', ()=>{
        (() => {
            'use strict'
            const forms = document.querySelectorAll('.needs-validation')
            Array.from(forms).forEach(form => {
              form.addEventListener('submit', event => {
                event.preventDefault()
                if (!form.checkValidity()) {
                    event.stopPropagation()
                }else{
                    swal("Successfully", "your new password is created.", "success");
                    sectionOuter.classList.replace('createPass', 'login');
                    var newBtn = document.querySelector('.swal-button');
                    newBtn.setAttribute('class', 'btn btn-theme2 btnStyle1 rounded-pill px-4 text-white');
                    newBtn.addEventListener('click', ()=>{
                        window.location.reload();
                    })
                }
          
                form.classList.add('was-validated')
              }, false)
            })
          })()
    })

}
//! ###################################### login Page JS ######################################

//? ###################################### Home Page JS ######################################
if ($("[page-name=homePage]").length) {
    // Main Event slider
    var owl = $('.mainEventSlider');
        owl.owlCarousel({
            margin: 20,
            loop: false,
            dots:true,
            nav:true,
            // autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:false,
            navText: ["<img class='w-100' src='assets/img/icons/leftArrow.svg'>","<img class='w-100' src='assets/img/icons/rightArrow.svg''>"],
            responsive: {
            0: {
                items: 1,
                stagePadding: 15,
                margin: 15,
            },
            361: {
                items: 1,
                stagePadding: 80,
                margin: 15,
            },
            576: {
                items: 1,
                stagePadding: 100,
            },
            992: {
                items: 3
            }
            }
        })
    
    // GLightbox js 
    var lightbox = GLightbox();
    lightbox.on('open', (target) => {
        console.log('lightbox opened');
    });
    var lightboxDescription = GLightbox({
        selector: '.glightbox2'
    });
    var lightboxVideo = GLightbox({
        selector: '.glightbox3'
    });
    lightboxVideo.on('slide_changed', ({ prev, current }) => {
        console.log('Prev slide', prev);
        console.log('Current slide', current);
    
        const { slideIndex, slideNode, slideConfig, player } = current;
    
        if (player) {
            if (!player.ready) {
                // If player is not ready
                player.on('ready', (event) => {
                    // Do something when video is ready
                });
            }
    
            player.on('play', (event) => {
                console.log('Started play');
            });
    
            player.on('volumechange', (event) => {
                console.log('Volume change');
            });
    
            player.on('ended', (event) => {
                console.log('Video ended');
            });
        }
    });
    
    var lightboxInlineIframe = GLightbox({
        selector: '.glightbox4'
    });
    
    
    
    //   top select 
    new TomSelect("#chooesQuery", {
        allowEmptyOption: false,
        create: false
    });
}
//! ###################################### Home Page JS ######################################

//? ###################################### Company Page JS ######################################
if ($("[page-name=companyPage]").length) {
    
    // Read More & Read Less 
    let redeMoreBtn = document.querySelectorAll('.redeMoreBtn');
    redeMoreBtn.forEach(redeMoreBtns =>{
        redeMoreBtns.addEventListener('click', (e)=>{
            let a = e.currentTarget;
            a.classList.toggle('newTxt');
            a.previousElementSibling.classList.toggle('showText');
            if($('.redeMoreBtn').hasClass('newTxt')) {
                a.innerHTML = 'Read Less';
                a.style = "color: red !important;";
            }else{
                a.innerHTML = 'Read More';
                a.style = "color: $theme2 !important;";
            };
        });
    });
}

//! ###################################### Company Page JS ######################################

//? ###################################### Gallery Page JS ######################################

if ($("[page-name=galleryPage]").length) {
    
    // GLightbox js 
    var lightbox = GLightbox();
    lightbox.on('open', (target) => {
        console.log('lightbox opened');
    });
    var lightboxDescription = GLightbox({
        selector: '.glightbox2'
    });
    var lightboxVideo = GLightbox({
        selector: '.glightbox3'
    });
    lightboxVideo.on('slide_changed', ({ prev, current }) => {
        console.log('Prev slide', prev);
        console.log('Current slide', current);
    
        const { slideIndex, slideNode, slideConfig, player } = current;
    
        if (player) {
            if (!player.ready) {
                // If player is not ready
                player.on('ready', (event) => {
                    // Do something when video is ready
                });
            }
    
            player.on('play', (event) => {
                console.log('Started play');
            });
    
            player.on('volumechange', (event) => {
                console.log('Volume change');
            });
    
            player.on('ended', (event) => {
                console.log('Video ended');
            });
        }
    });
    
    var lightboxInlineIframe = GLightbox({
        selector: '.glightbox4'
    });

    // Justify Gallery
    $(".myJustifyGallery").justifiedGallery({
        rowHeight: 240,
        lastRow: 'nojustify',
        margins: 16,
        captions: false
    });
}

//! ###################################### Gallery Page JS ######################################



//? ###################################### News Page JS ######################################
if ($("[page-name=newsPage]").length) {
    // Main Event slider
    var owl = $('.offerSlider');
    owl.owlCarousel({
        margin: 20,
        loop: true,
        dots:true,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        navText: ["<img class='w-100' src='assets/img/icons/leftArrow.svg'>","<img class='w-100' src='assets/img/icons/rightArrow.svg''>"],
        responsive: {
        0: {
            items: 1,
            nav:false,
            stagePadding: 30,
            margin: 15,
        },
        576: {
            items: 1,
            nav:false,
            stagePadding: 100,
        },
        992: {
            items: 3
        }
        }
    })

    // Event slider
    var owl = $('.eventVideoSlider');
    owl.owlCarousel({
        margin: 20,
        loop: true,
        dots:true,
        nav:true,
        // autoplay:true,
        // autoplayTimeout:3000,
        // autoplayHoverPause:false,
        navText: ["<img class='w-100' src='assets/img/icons/leftArrow.svg'>","<img class='w-100' src='assets/img/icons/rightArrow.svg''>"],
        responsive: {
        0: {
            items: 1,
            nav:false,
            stagePadding: 50,
            margin: 15,
        },
        380: {
            items: 1,
            nav:false,
            stagePadding: 60,
            margin: 15,
        },
        576: {
            items: 2,
            nav:false,
            stagePadding: 50,
        },
        992: {
            items: 4
        }
        }
    })

    // bootstrap tooltip 
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // GLightbox js 
    var lightbox = GLightbox();
    lightbox.on('open', (target) => {
        console.log('lightbox opened');
    });
    var lightboxDescription = GLightbox({
        selector: '.glightbox2'
    });
    var lightboxVideo = GLightbox({
        selector: '.glightbox3'
    });
    lightboxVideo.on('slide_changed', ({ prev, current }) => {
        console.log('Prev slide', prev);
        console.log('Current slide', current);
    
        const { slideIndex, slideNode, slideConfig, player } = current;
    
        if (player) {
            if (!player.ready) {
                // If player is not ready
                player.on('ready', (event) => {
                    // Do something when video is ready
                });
            }
    
            player.on('play', (event) => {
                console.log('Started play');
            });
    
            player.on('volumechange', (event) => {
                console.log('Volume change');
            });
    
            player.on('ended', (event) => {
                console.log('Video ended');
            });
        }
    });
    
    var lightboxInlineIframe = GLightbox({
        selector: '.glightbox4'
    });

    // Justify Gallery
    $(".myJustifyGallery").justifiedGallery({
        rowHeight: 180,
        lastRow: 'nojustify',
        margins: 16,
        captions: false
    });

    
}
//! ###################################### News Page JS ######################################


//? ###################################### Schedule Page JS ######################################
if ($("[page-name=schedulePage]").length) {

    $(document).ready(function() {
        $('.customDatatable').DataTable({
            responsive:true,
            destroy: true,
            "language": {
                "paginate": {
                    "previous": "<img class='w-100' src='assets/img/icons/arrowLeft.svg' alt=''>",
                    "next": "<img class='w-100' src='assets/img/icons/arrowRight.svg' alt=''>"
                }
            }
        });
        $('.nav-link').click(function () {
            $('.customDatatable').DataTable({
                destroy: true,
                "language": {
                    "paginate": {
                        "previous": "<img class='w-100' src='assets/img/icons/arrowLeft.svg' alt=''>",
                        "next": "<img class='w-100' src='assets/img/icons/arrowRight.svg' alt=''>"
                    }
                }
            }).reload;
          });
    });

    

    //   top select 
    new TomSelect("#monthSelect", {
        allowEmptyOption: false,
        create: false
    }); 
}
//! ###################################### Schedule Page JS ######################################

//? ###################################### Branches Page JS ######################################
if ($("[page-name=branchesPage]").length) {
    //   top select 
    new TomSelect("#countarySelect", {
        allowEmptyOption: false,
        create: false
    }); 
    new TomSelect("#stateSelect", {
        allowEmptyOption: false,
        create: false
    });
    new TomSelect("#zipCode", {
        allowEmptyOption: false,
        create: false
    }); 
    new TomSelect("#districtSelect", {
        allowEmptyOption: false,
        create: false
    }); 
}
//! ###################################### Branches Page JS ######################################

//? ###################################### Download Page JS ######################################
if ($("[page-name=downloadPage]").length) {

    $(document).ready(function() {
        $('.customDatatable').DataTable({
            responsive:false,
            scrollX: true,
            destroy: true,
            "language": {
                "paginate": {
                    "previous": "<img class='w-100' src='assets/img/icons/arrowLeft.svg' alt=''>",
                    "next": "<img class='w-100' src='assets/img/icons/arrowRight.svg' alt=''>"
                }
            }
        });
    });
}
//! ###################################### Download Page JS ######################################


//? ###################################### Career Page JS ######################################
if ($("[page-name=careerPage]").length) {
    var owl = $('.workCulture');
    owl.owlCarousel({
        margin: 10,
        loop: true,
        dots:true,
        nav:true,
        navText: ["<img class='' src='assets/img/icons/leftArrow.svg'>","<img class='' src='assets/img/icons/rightArrow.svg''>"],
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        responsive: {
        0: {
            items: 1,
            stagePadding: 30,
            nav: false,
        },
        576: {
            items: 1,
            stagePadding: 80,
            nav: false,
        },
        768: {
            items: 1,
            stagePadding: 80,
            dots: false
        },
        1000: {
            items: 3,
            dots:false
        }
        }
    })

    // GLightbox js 
    var lightbox = GLightbox();
    lightbox.on('open', (target) => {
        console.log('lightbox opened');
    });
    var lightboxDescription = GLightbox({
        selector: '.glightbox2'
    });
    var lightboxVideo = GLightbox({
        selector: '.glightbox3'
    });
    lightboxVideo.on('slide_changed', ({ prev, current }) => {
        console.log('Prev slide', prev);
        console.log('Current slide', current);
    
        const { slideIndex, slideNode, slideConfig, player } = current;
    
        if (player) {
            if (!player.ready) {
                // If player is not ready
                player.on('ready', (event) => {
                    // Do something when video is ready
                });
            }
    
            player.on('play', (event) => {
                console.log('Started play');
            });
    
            player.on('volumechange', (event) => {
                console.log('Volume change');
            });
    
            player.on('ended', (event) => {
                console.log('Video ended');
            });
        }
    });
    
    var lightboxInlineIframe = GLightbox({
        selector: '.glightbox4'
    });
}
//! ###################################### Career Page JS ######################################


//? ###################################### Contact Us Page JS ######################################
if ($("[page-name=contactUsPage]").length) {

    //   top select 
    
    new TomSelect("#chooesQuery2", {
        allowEmptyOption: false,
        create: false
    }); 

}
//! ###################################### Contact Us Page JS ######################################

//? ###################################### Contact Us Page JS ######################################
if ($("[page-name=productPage]").length) {

    var owl = $('.productImgSlider');
    owl.owlCarousel({
        margin: 10,
        loop: false,
        dots:false,
        nav:true,
        navText: ["<img class='' src='assets/img/icons/leftArrow.svg'>","<img class='' src='assets/img/icons/rightArrow.svg''>"],
        responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1000: {
            items: 1,
        }
        }
    })

    let productOuter = document.querySelectorAll('.productOuter');
    let productDec  = document.querySelectorAll('.productDec ');
    let viewMore = document.querySelectorAll('.viewMore');
    
    viewMore.forEach(viewMoreinner =>{
        viewMoreinner.addEventListener('click', (e)=>{
            var a = e.currentTarget.getAttribute('view-more');
            var b = document.getElementById(a);
            if(b.classList.contains('showDetail')){
                b.classList.remove('showDetail');
            }
            else{
                for(z=0; z<productOuter.length; z++){
                    productOuter[z].classList.remove('showDetail');
                };
                b.classList.add('showDetail');
            }
        });
    });
    productDec.forEach(productDecAll =>{
        productDecAll.addEventListener('click', (e)=>{
            for(x=0; x<productOuter.length; x++){
                productOuter[x].classList.remove('showDetail')
            };
        });
    });
    // productOuter.forEach(productOuters =>{
    //     productOuters.addEventListener('click', (e)=>{
    //         if(e.currentTarget.classList.contains('showDetail')){
    //             e.currentTarget.classList.remove('showDetail');
    //         }
    //         else{
    //             for(i=0; i<productOuter.length; i++){
    //                 productOuter[i].classList.remove('showDetail');
    //             };
    //             e.currentTarget.classList.add('showDetail');
    //         }
    //     });
    // });

}
//! ###################################### Contact Us Page JS ######################################