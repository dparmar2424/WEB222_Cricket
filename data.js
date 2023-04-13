window.reviewData = [
    {
        name: "Kiranpreet kaur",
        date: "2023-03-28",
        rating: 4,
        review: "I absolutely love playing Cricket with my friends! The game itself is complex and challenging, but also very rewarding once you start to get the hang of it. Cricket is rich and immersive, and I found myself getting really invested in the story and my character's progress. The only downside is that it can be a bit overwhelming at first, so make sure to plan your moves carefully and work together as a team."
    },
    {
        name: "Muskaan Tangri",
        date: "2023-03-29",
        rating: 5,
        review: "Cricket is the most fun, enjoyable, and nostalgic  game ever. The best thing about it is the objectives are up to you. This game has made several famous sportsperson all over the world that we know today like Sachin, Dhoni, Virat, and many more!."
    },
    {
        name: "Jessica",
        date: "2023-03-30",
        rating: 3,
        review: " I don't know how this idea came from but this game is just awesome. If you look deeply you will se there is the most creative and energetic game. I am playing this game not as the big fan of this game and not as a 15 aged child. This game is really amazing. Amazing sound equipments, playground, playability, rules. It has its own style of playing. Don't look at the players of this game. Just play this game. But this is not important who playing the game. Cricket is really amazing immersive game....."
    },
    {
        name: "Chirag Chand",
        date: "2023-03-31",
        rating: 4,
        review:  "It's hard to come across someone who hasn't played Cricket. It's one of thenest games of all time and it shows."
    },
    {
        name: "Diya Parmar",
        date: "2023-04-01",
        rating: 5,
        review: "Even if i take a break from playing from time to time I always go back. It's very epic to see what smart people do with the game and what they make. Even people with low IQ people (like me) will enjoy it! 10/10 long live this amazing game!"
    },
    {
        name: "Pinal Patel",
        date: "2022-03-20",
        rating: 4,
        review: "It's a good foundation, but it's not a good game on its own. You will grow tired and bored of this game beforehead. However, I tried to learn this from my friends and I am enyoing it now. Moral is: Never give up." 
    }
];


document.addEventListener('DOMContentLoaded', function() {
    createTable(reviewData);

    const form = document.querySelector('.review-form-input-area');
    form.addEventListener('submit', function(event) {
      // Prevent the default behavior of the form (i.e. reloading the page) when the form is submitted
      event.preventDefault();
  
      // Get the values entered by the user
      const name = document.querySelector('#name').value;
      const date = document.querySelector('#date').value;
      const rating = document.querySelector('input[name="rating"]:checked').value;
      const review = document.querySelector('#review').value;
  
      // Create a new object with the input data
      const newReview = { name, date, rating, review };
  
      // Add the new object to the reviewData array
      reviewData.push(newReview);
  
      // Clear the form
      form.reset();
  
      // Re-create the table with the updated data
      createTable(reviewData);
    });

  });

function createTable(reviews) {
    // Fetching the tbody element
    let table = document.querySelector("#reviews-table");
    let newRow, newCell, newText;
  
    // Iterating through the reviews and creating table
    reviews.forEach(function (review) {
      // creates a table row
      newRow = table.insertRow();
      newRow.className = "card";
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-name";
      newCell.textContent = "Name: ";
      newText = document.createTextNode(review.name);
      newCell.appendChild(newText);
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-date";
      newCell.textContent = "Date: ";
      newText = document.createTextNode(review.date);
      newCell.appendChild(newText);
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-rating";
      newCell.textContent = "Rating: ";
      newText = document.createTextNode(getRatingStars(review.rating));
      newCell.appendChild(newText);
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-review";
      newText = document.createTextNode(review.review);
      newCell.appendChild(newText);
    });
  }
  
  function getRatingStars(rating) {
    let starsHtml = '';
    for (let i = 0; i < rating; i++) {
      starsHtml += '★ ';
    }
    for (let i = rating; i < 5; i++) {
      starsHtml += '☆ ';
    }
    return starsHtml.trim();
  }