const container = document.getElementById("user-container");

document.getElementById("loadUsers").addEventListener("click", function () {
  fetch("https://randomuser.me/api/?results=20") // fetch 6 users at once
    .then((res) => res.json())
    .then((data) => {
      container.innerHTML = ""; // clear old cards

      data.results.forEach((user) => {
        // Create card wrapper
        const card = document.createElement("div");
        card.className =
          "bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition";

        // User image
        const img = document.createElement("img");
        img.src = user.picture.large;
        img.alt = "Profile";
        img.className =
          "w-24 h-24 rounded-full mx-auto border-2 border-blue-500";

        // User name
        const name = document.createElement("h2");
        name.className = "text-xl font-bold text-gray-800 mt-4";
        name.textContent = `${user.name.first} ${user.name.last}`;

        // User email
        const email = document.createElement("p");
        email.className = "text-gray-600";
        email.textContent = user.email;

        // User location
        const location = document.createElement("p");
        location.className = "text-gray-700 mt-2";
        location.textContent = `${user.location.city}, ${user.location.country}`;

        // Append children into card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(location);

        // Append card into container
        container.appendChild(card);
      });
    })
    .catch((err) => console.error("Error fetching users:", err));
});
