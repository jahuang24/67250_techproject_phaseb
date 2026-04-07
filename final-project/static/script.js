var x = 5;
var y = 10;
var z = x + y;
// console.log(z);

var A = "hello";
var B = "world";
var C = A + B;
// console.log(C);

if (C.length > z) {
    console.log(C)
    if (C.length < z) {
        console.log(z)
    }
} else {
    console.log("good job")
}

L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

function findTheBanana(fruitList) {
    fruitList.forEach(fruit => {
        if (fruit === "Banana") {
            alert("Banana found in the list")
        }
    });
}

// findTheBanana(L1);
// findTheBanana(L2);

var now = new Date();
var hour = now.getHours();

function greeting(x) {
    var greetingElement = document.getElementById("greeting");
    var greetingText = ", and welcome to the MonoMuse Museum";
    if (!greetingElement) {
        return;
    }
    
    if (x < 5 || x >= 20) {
        greetingElement.innerHTML = "Good night" + greetingText;
    } else if (x < 12) {
        greetingElement.innerHTML = "Good morning" + greetingText;
    } else if (x < 18) {
        greetingElement.innerHTML = "Good afternoon" + greetingText;
    } else {
        greetingElement.innerHTML = "Good evening" + greetingText;
    }
}

greeting(hour);

function addYear() {
    var copyYearElement = document.getElementById("copyYear");
    if (!copyYearElement) {
        return;
    }
    copyYearElement.innerHTML = new Date().getFullYear();
}

/* Sets the 'active' class on the navigation link that matches the current page URL.*/

function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Iterate over each link
    navLinks.forEach(link => {
        // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Execute the function to set the active navigation link on page load
ActiveNav();

function toggleNav() {
    const nav = document.querySelector('.nav_bar');
    nav.classList.toggle('responsive');
}

// When the "Read Less" button is clicked
$("#homeReadLess").click(function(){ 
    $("#homeLongDescription").hide(); // Hide the long introduction text
    $("#homeReadLess").hide();  // Hide the "Read Less" button itself
    $("#homeReadMore").show();  // Show the "Read More" button  

  });
  
// When the "Read More" button is clicked
  $("#homeReadMore").click(function(){
    $("#homeLongDescription").show();  // Show the long introduction text
    $("#homeReadLess").show();   // Show the "Read Less" button
    $("#homeReadMore").hide();   // Hide the "Read More" button  
  });

// Reveal ticket checkout form when "Buy" button is clicked
$("#ticketBuyButton").click(function(){
    $("#ticketCheckoutForm").show();
    $("#ticketBuyButton").hide();
});

function loadConfirmation() {
    var orderDetails = document.getElementById('orderDetails');
    if (!orderDetails) return;

    var params = new URLSearchParams(window.location.search);
    var date = params.get('date') || '';
    var type = params.get('type') || '';
    var quantity = params.get('quantity') || '';
    var total = params.get('total') || '0';
    var email = params.get('email') || '';

    var displayDate = date;
    if (date) {
        var d = new Date(date + 'T00:00:00');
        displayDate = d.toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
    }

    var rows = [
        { label: 'Visit Date', value: displayDate },
        { label: 'Ticket Type', value: type },
        { label: 'Quantity', value: quantity + (quantity === '1' ? ' ticket' : ' tickets') },
        { label: 'Email', value: email },
        { label: 'Total Cost', value: '$' + total }
    ];

    var html = '';
    rows.forEach(function (row) {
        html += '<div class="order-row">'
            + '<span class="order-label">' + row.label + '</span>'
            + '<span class="order-value">' + row.value + '</span>'
            + '</div>';
    });
    orderDetails.innerHTML = html;
}

loadConfirmation();