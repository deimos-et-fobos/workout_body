const express = require('express');
const requireAuth = require('../middleware/requireAuth')

const { 
  createWorkout, 
  deleteWorkout, 
  getWorkout, 
  getWorkouts, 
  updateWorkout 
} = require('../controllers/workoutController');

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth)

// GET all workouts
router.get('/', getWorkouts)

// CREATE a new workout
router.post('/', createWorkout)

// GET a single workout
router.get('/:id', getWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router