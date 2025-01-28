// Add food modal component
/**Web Assessment Test Guidelines for Candidates
Overview
You will be required to implement a webpage using Next.js based on the provided Figma design. The goal is to implement as much of the design as possible within 2 hours. While we do not expect the entire design to be implemented, your focus should be on achieving functionality, proper component structure, and adherence to best practices.
Duration
Time Limit: 2 hours
No submissions or commits should be made after the timer ends. Pushing changes after the timer ends will result in disqualification.
Steps to Follow
Setup
Clone or set up a fresh Next.js project.
Use the Figma link provided found at the bottom of the doc as your design reference.
Implementation
Aim to implement as much of the Figma design as possible.
Use reusable components and clean code practices.
Adhere to accessibility and semantic HTML standards.
Follow the Candidate Submission Guidelines for UI and form elements (outlined below).
Version Control
Create a new public repository on GitHub for your submission.
Commit your progress regularly with meaningful commit messages (e.g., "Added header component").
Ensure all your code is pushed to the repository before the timer ends.
Submission
Submit your GitHub repository link through the provided Google Form.
Double-check that your repository is public and accessible.
Disqualification Criteria
Pushing changes to the repository after the timer ends.
Submitting incomplete or inaccessible repositories.
Candidate Submission Guidelines
General Structure
Use clear and descriptive names for components, classes, and IDs.
Ensure proper folder structure for components (e.g., /components, /pages, /styles).
Form Input Naming
	•	Use descriptive attributes for input elements to make them easily identifiable:
	•	Food Name: input[name="food_name"]
	•	Food Rating: input[name="food_rating"] (type should be number).
	•	Food Image URL: input[name="food_image"].
	•	Restaurant Name: input[name="restaurant_name"].
	•	Restaurant Logo URL: input[name="restaurant_logo"].
	•	Restaurant Status: input[name="restaurant_status"] (values should be “Open Now” or “Closed”).
	•	Include appropriate validation for required fields and display error messages where necessary.
Buttons
Use descriptive and clear labels for all buttons (e.g., "Add Food", "Subscribe").
Avoid vague labels like "Click Me" or "Submit".
Input Fields
Use meaningful placeholder text and labels (e.g., "Enter your email").
Include unique and identifiable classes or IDs for input fields (e.g., .email-input, #search-bar).
Cards and Lists
For any card (e.g., a restaurant card), ensure the following structure:
Name: .restaurant-name
Price: .restaurant-price
Rating: .restaurant-rating
Status: .restaurant-status (e.g., "Open Now" or "Closed").
Use semantic HTML elements like <div>, <section>, and <article> as needed.
Validation and Error Handling
Ensure all required fields are validated and display clear error messages for invalid inputs or actions.
Assign the following IDs for error message elements based on the input names to keep the structure consistent:
Food Name: food-name-error
Food Rating: food-rating-error
Food Image URL: food-image-error
Restaurant Name: restaurant-name-error
Restaurant Logo URL: restaurant-logo-error
Restaurant Status: restaurant-status-error

Use the following descriptive and user-friendly error messages:
“Food Name is required” for food-name-error.
“Food Rating must be a number” for food-rating-error.
“Food Image URL is required” for food-image-error.
“Restaurant Name is required” for restaurant-name-error.
“Restaurant Logo URL is required” for restaurant-logo-error.
“Restaurant Status must be ‘Open Now’ or ‘Closed’” for restaurant-status-error.
Empty States
Implement empty states with meaningful messages (e.g., "No items available" in a <div> with .empty-state-message).
Footer
Include navigation links and company information in the footer.
Modal
Trigger modals with a button labeled "Add Food".
Ensure all modal fields have descriptive names and IDs (e.g., input[name="food_name"]).
Include "Save" and "Cancel" buttons.
Assessment Criteria
Functionality: How well the implemented features match the Figma design.
Code Quality: Readability, reusability, and adherence to best practices.
UI/UX: Consistency with the provided design and user-friendly interactions.
Submission: Proper GitHub repository structure, accessibility, and compliance with the submission deadline.
Final Notes
Ensure your GitHub repository is fully pushed and accessible before the timer ends.
Follow all naming and structural conventions outlined in the Candidate Submission Guidelines.
Contact the examiner for any clarifications during the test.

Figma: Design Link
Figma: Prototype Link


Good luck! 👋

 */
import React, { useState } from 'react';


const AddFood = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}> Add Food </button>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold">Add Food</h2>
                        <input
                            type="text"
                            placeholder="Enter food name"
                            className="border border-gray-300 rounded-lg p-2 mt-2"
                        />
                        <button className="bg-blue-500 text-white rounded-lg p-2 mt-2">
                            Add Food
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-red-500 text-white rounded-lg p-2 mt-2"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddFood;

