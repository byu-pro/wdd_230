document.addEventListener("DOMContentLoaded", function () {
    // Get the current year
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Get the last modified date of the document
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;

    // Populate learning activities (example)
    const learningActivities = [
        "Activity 1: Introduction to HTML",
        "Activity 2: CSS Styling",
        "Activity 3: JavaScript Fundamentals"
    ];

    const learningActivitiesList = document.getElementById("learningActivities");
    learningActivities.forEach(function (activity) {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = "#"; // Replace with actual activity links
        link.textContent = activity;
        listItem.appendChild(link);
        learningActivitiesList.appendChild(listItem);
    });

    // Update weather and visits information (example)
    document.getElementById("weather").textContent = "Weather: Sunny";
    document.getElementById("visits").textContent = "Visits: 1000";
});
