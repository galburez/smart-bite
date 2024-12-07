function your_plan_transformer() {
    const button = document.getElementById("button1");
    const img = document.getElementById("your-plan-img");

    if (img.style.display === "none") {
        let new_img = document.createElement('img');
        new_img.src = "images/Your Plan.png";
        new_img.alt = "Your Plan"
        new_img.id = "your-plan-img"
        new_img.style.display = "block";
        new_img.classList.add('responsive-img');
        document.getElementById("your-plan-img").replaceWith(new_img);
        button.textContent = "See Less"
    } else {
        document.getElementById("your-plan-img").style.display="none"
        button.textContent = "See More"
    }
}

function recipe_book_transformer() {
    const button = document.getElementById("button2");
    const img = document.getElementById("recipe-book-img");

    if (img.style.display === "none") {
        let new_img = document.createElement('img');
        new_img.src = "images/Recipe Book.png";
        new_img.alt = "Recipe Book"
        new_img.id = "recipe-book-img"
        new_img.style.display = "block";
        new_img.classList.add('responsive-img');
        document.getElementById("recipe-book-img").replaceWith(new_img);
        button.textContent = "See Less"
    } else {
        document.getElementById("recipe-book-img").style.display="none"
        button.textContent = "See More"
    }
}

function resources_transformer() {
    const button = document.getElementById("button3");
    const img = document.getElementById("resources-img");

    if (img.style.display === "none") {
        let new_img = document.createElement('img');
        new_img.src = "images/Resources.png";
        new_img.alt = "Resources"
        new_img.id = "resources-img"
        new_img.style.display = "block";
        new_img.classList.add('responsive-img');
        document.getElementById("resources-img").replaceWith(new_img);
        button.textContent = "See Less"
    } else {
        document.getElementById("resources-img").style.display="none"
        button.textContent = "See More"
    }
}

let imagePath = [
    "images/Onboarding Loading.png",
    "images/Main Onboarding.png",
    "images/New User Home Screen.png",
    "images/Onboarding-YourPlan.png",
    "images/Onboarding-RecipeBook.png",
    "images/Onboarding-Resources .png",
    "images/Homepage.png",
    "images/Recipe Book.png",
    "images/Favorites Book.png",
    "images/Recipe Book.png",
    "images/New Recipe 3.png"
    ];
    
    function changeImg(up_or_down) { 
      let imgNum = Number(document.getElementsByClassName("carousel")[0].id);
      let newImgNum = imgNum + up_or_down;
      let maxImgNum = imagePath.length - 1;
    
      if (up_or_down > 0) {
        if (newImgNum > maxImgNum) {
          newImgNum = 0;
        }
      } else {
        if (newImgNum < 0) {
          newImgNum = maxImgNum;
        }
      }
    
      let new_elt = document.createElement('img');
      new_elt.src = imagePath[newImgNum];
      new_elt.className = "carousel";
      new_elt.id = newImgNum.toString();
      document.querySelector('.carousel').replaceWith(new_elt);
    }