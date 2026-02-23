# FSD Form - College Project

A simple yet functional contact management application built with vanilla HTML, CSS, and JavaScript. This is a Full Stack Development (FSD) college project that demonstrates fundamental web development concepts. The application allows users to create, read, update, and delete contacts with persistent storage using the browser's localStorage.

## 📋 Project Structure

```
Form/
├── index.html       # Main HTML markup for the contact form
├── style.css        # Styling for the application
├── script.js        # JavaScript logic for form and contact management
├── README.md        # Project documentation (this file)
└── .git/            # Git version control directory
```

## 🎓 Project Type

- **Course**: Full Stack Development (FSD)
- **Institution**: College Project
- **Student**: Sohan Agate
- **Level**: Beginner to Intermediate

## 📄 File Details

### index.html
The main HTML file that structures the user interface.

**Key Elements:**
- Contact form with input fields for Name, Email, and Phone Number
- "Add Contact" button to submit the form
- Contact List section that displays all saved contacts
- References to external CSS and JavaScript files

**Structure:**
```
- Container div (350px width, centered)
  - Heading: "Contact Form"
  - Input fields:
    - Name input
    - Email input
    - Phone input
  - Add Contact button
  - Contact List section (dynamically populated)
```

### style.css
Complete styling for the application with a modern, clean design.

**Key Styles:**
- **Body**: Arial font, light gray background (#f2f2f2)
- **Container**: White card-style container (350px wide) with shadow and rounded corners
- **Input Fields**: 95% width with padding, light border, border-radius
- **Main Button**: Blue background (#007bff) with hover effect (darker blue #0056b3)
- **Contact Box**: Light gray background (#fafafa) with border for displaying each contact
- **Action Buttons**:
  - Edit Button: Yellow/gold (#ffc107)
  - Delete Button: Red (#dc3545)

**Responsive Features:**
- Centered layout using margin auto
- Box shadow for depth
- Hover effects on buttons
- Rounded corners throughout

### script.js
The JavaScript file that handles all the application logic.

**Key Features:**

1. **Data Storage**:
   - Uses browser's `localStorage` to persistently save contacts
   - Loads contacts from localStorage on page initialization

2. **Main Functions**:
   - `addOrUpdateContact()`: Adds new contacts or updates existing ones
   - `displayContacts()`: Renders all contacts in the contact list
   - `editContact(i)`: Populates form fields with existing contact data
   - `deleteContact(i)`: Removes a contact from the list
   - `clearForm()`: Clears all input fields after submission

3. **Contact Object Structure**:
   ```javascript
   {
     name: string,
     email: string,
     phone: string
   }
   ```

4. **Edit Functionality**:
   - Uses `editIndex` variable to track which contact is being edited
   - When editing, the button changes from "Add" to "Update" behavior
   - After update, editIndex is reset to -1

5. **Validation**:
   - Checks that all fields (name, email, phone) are filled
   - Shows alert if any field is empty

6. **Auto-initialization**:
   - `displayContacts()` is called when the page loads
   - Shows all previously saved contacts

## ✨ Features

- ✅ **Add Contacts**: Enter name, email, and phone to add a new contact
- ✅ **View Contacts**: See all saved contacts in a list format
- ✅ **Edit Contacts**: Click Edit to modify existing contact information
- ✅ **Delete Contacts**: Remove contacts from the list with the Delete button
- ✅ **Persistent Storage**: All contacts are saved to browser localStorage
- ✅ **Form Validation**: Required field validation before submission
- ✅ **Clean UI**: Modern, user-friendly interface with responsive styling

## 🚀 How to Use

1. **Open the Application**:
   - Open `index.html` in a web browser

2. **Add a Contact**:
   - Enter Name, Email, and Phone Number in the input fields
   - Click "Add Contact" button
   - The contact will appear in the Contact List below

3. **Edit a Contact**:
   - Click the "Edit" button next to a contact
   - The form fields will be automatically filled with that contact's details
   - Modify the information as needed
   - Click "Add Contact" button to save the changes

4. **Delete a Contact**:
   - Click the "Delete" button next to a contact
   - The contact will be immediately removed from the list

5. **Data Persistence**:
   - All contacts are automatically saved to your browser's localStorage
   - Close and reopen the browser/tab, your contacts will still be there

## 💻 Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with flexbox and box shadow
- **JavaScript (Vanilla)**: No frameworks or libraries
- **Browser localStorage API**: For data persistence

## 📦 Browser Compatibility

- Chrome/Chromium ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Any modern browser with JavaScript and localStorage support

## 🔒 Data Storage

- **Storage Type**: Browser localStorage
- **Storage Key**: "contacts"
- **Data Format**: JSON array of contact objects
- **Persistence**: Until user clears browser data

## 🎨 Styling Highlights

- Card-based UI design
- Consistent color scheme (blue #007bff for primary, yellow for edit, red for delete)
- Smooth hover effects
- Professional typography
- Responsive padding and margins

## 📝 Notes

- This is a client-side only application
- No backend server or database required
- All data is stored locally in the browser
- Clearing browser data will delete all saved contacts
- Each browser/device has its own separate contact list

---

**Project Type**: Full Stack Development (FSD) - College Assignment  
**Created by**: Sohan Agate  
**Last Updated**: February 2026
