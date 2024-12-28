// Select elements
const workoutForm = document.getElementById('workoutForm');
const workoutList = document.getElementById('workoutList');
const clearButton = document.getElementById('clearButton');
const markCompleteButton = document.getElementById('markCompleteButton');
const greeting = document.getElementById('greeting');
const tracker = document.getElementById('tracker');

// Track completed workouts
let totalWorkouts = 0;
let completedWorkouts = 0;

// Add workout event
workoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get input values
  const exercise = document.getElementById('exercise').value;
  const duration = document.getElementById('duration').value;
  
  // Create list item
  const listItem = document.createElement('li');
  listItem.textContent = `${exercise} - ${duration} mins`;

  // Add a "Complete" button to each workout
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Mark as Complete';
  completeButton.addEventListener('click', () => markWorkoutComplete(listItem, completeButton));
  
  listItem.appendChild(completeButton);
  
  // Append to list
  workoutList.appendChild(listItem);
  
  // Update the total workouts count
  totalWorkouts++;
  
  // Enable the "Mark as Complete" button if there are workouts
  markCompleteButton.disabled = false;
  
  // Clear form inputs
  workoutForm.reset();
});

// Mark a workout as complete
function markWorkoutComplete(listItem, completeButton) {
  completedWorkouts++;
  listItem.style.textDecoration = 'line-through';  // Cross out completed workout
  completeButton.disabled = true;  // Disable the "Complete" button
  
  // Update tracker and greeting
  updateTracker();
}

// Mark as complete event
markCompleteButton.addEventListener('click', () => {
  if (completedWorkouts === totalWorkouts) {
    greeting.textContent = "Great job! You've completed all your workouts today!";
    tracker.textContent = "⭐⭐⭐";  // 3 stars for completed workouts
    tracker.classList.add('star');
    tracker.classList.remove('thinking');
  } else {
    greeting.textContent = "Keep going! You have more to complete.";
    tracker.textContent = "🤔";  // Thinking emoji for incomplete workouts
    tracker.classList.add('thinking');
    tracker.classList.remove('star');
  }
});

// Clear workouts event
clearButton.addEventListener('click', () => {
  workoutList.innerHTML = ''; // Clear the list
  totalWorkouts = 0;  // Reset total workouts
  completedWorkouts = 0;  // Reset completed workouts
  markCompleteButton.disabled = true;  // Disable the button again
  greeting.textContent = '';  // Clear greeting
  tracker.textContent = '';  // Clear tracker
});

// Update the tracker and greeting based on completed workouts
function updateTracker() {
  if (completedWorkouts === totalWorkouts) {
    greeting.textContent = "Great job! You've completed all your workouts today!";
    tracker.textContent = "⭐⭐⭐";  // 3 stars for completed workouts
    tracker.classList.add('star');
    tracker.classList.remove('thinking');
  } else {
    greeting.textContent = "Keep going! You have more to complete.";
    tracker.textContent = "🤔";  // Thinking emoji for incomplete workouts
    tracker.classList.add('thinking');
    tracker.classList.remove('star');
  }
}
