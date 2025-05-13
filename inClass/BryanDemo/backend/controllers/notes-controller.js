const Note = require('../models/note-model.js');

const seedNotes = async (req, res) => {
  try {
    await Note.deleteMany({});
    await Note.create([
      {
        title: 'Title 1',
        body: 'Body 1'
      },
      {
        title: 'Title 2',
        body: 'Body 2'
      },
      {
        title: 'Title 3',
        body: 'Body 3'
      }
    ])
    console.log('Database seeded successfully')
    res.status(201).json({ success: 'Databse seeded' });
  } catch (error) {
    console.log('Error seeding database:', error.message);
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  seedNotes
};
