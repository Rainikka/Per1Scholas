// Provided Assignment Group
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};


const data = {
  users: [
    {
      id: 1,
      profile: {
        name: "John",
        age: 30,
        contacts: {
          email: "john@example.com",
          phone: "123-456-7890"
        }
      }
    },
    {
      id: 2,
      profile: {
        name: "Jane",
        age: 25,
        contacts: {
          email: "jane@example.com",
          phone: "987-654-3210"
        }
      }
    }
  ]
};


// Access Jane's email
let janesEmail = data.users[1].profile.contacts.email;

console.log(janesEmail);
// "jane@example.com"

// Sort by phone
// let sortedArray = janesEmail.sort((a, b) => a.email - b.email);
// console.log(sortedArray);