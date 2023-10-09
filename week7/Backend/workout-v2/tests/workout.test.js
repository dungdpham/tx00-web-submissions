const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const User = require('../models/userModel');
const Workout = require('../models/workoutModel');
const workouts = require('./data/workouts.js');

let token = null;

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api
    .post('/api/user/signup')
    .send({ email: 'mattiv@matti.fi', password: 'R3g5T7#gh' });
  token = result.body.token;
});

describe('Workout API', function () {
  describe('when there is initially some workouts saved', () => {
    beforeEach(async () => {
      await Workout.deleteMany({});
      // await api
      //   .post('/api/workouts')
      //   .set('Authorization', 'bearer ' + token)
      //   .send(workouts[0])
      //   .send(workouts[1]);
      await api
        .post('/api/workouts')
        .set('Authorization', 'bearer ' + token)
        .send(workouts[0])
        .then(async () => {
          await api
            .post('/api/workouts')
            .set('Authorization', 'bearer ' + token)
            .send(workouts[1]);
        })
        .then(async () => {
          await api
            .post('/api/workouts')
            .set('Authorization', 'bearer ' + token)
            .send(workouts[2]);
        });
    });

    describe('GET /workouts', function () {
      describe('when retrieving workouts', function () {
        it('should return workouts as json', async () => {
          await api
            .get('/api/workouts')
            .set('Authorization', 'bearer ' + token)
            .expect(200)
            .expect('Content-Type', /application\/json/);
        });
      });
    });

    describe('POST /workouts', function () {
      describe('when creating new workout', function () {
        it('should add new workout successfully', async () => {
          const newWorkout = {
            title: 'testworkout',
            reps: 10,
            load: 100,
          };
          await api
            .post('/api/workouts')
            .set('Authorization', 'bearer ' + token)
            .send(newWorkout)
            .expect(201);
        });
      });
    });

    describe('GET /workouts/:id', function () {
      describe('when retrieving a specific workout', function () {
        it('should return workout when ID is valid', async () => {
          const workoutsFromDb = await Workout.find({});
          //const workoutsAtStart = workoutsFromDb.map((workout) => workout.toJSON());

          const workoutToRead = workoutsFromDb[0];

          await api
            .get(`/api/workouts/${workoutToRead.id}`)
            .set('Authorization', 'bearer ' + token)
            .expect(200)
            .expect('Content-Type', /application\/json/);
        });
      });
    });

    describe('PATCH /workouts/:id', function () {
      describe('when updating a specific workout', function () {
        it('should update workout when ID is valid', async () => {
          const workoutsFromDb = await Workout.find({});
          const workoutToUpdate = workoutsFromDb[1];

          const update = { reps: 99 };

          await api
            .patch(`/api/workouts/${workoutToUpdate.id}`)
            .set('Authorization', 'bearer ' + token)
            .send(update)
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .expect((response) => {
              expect(response.body.reps).toEqual(workoutToUpdate.reps);
            });

          await api
            .get(`/api/workouts/${workoutToUpdate.id}`)
            .set('Authorization', 'bearer ' + token)
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .expect((response) => {
              expect(response.body.reps).toEqual(update.reps);
            });
        });
      });
    });

    describe('DELETE /workouts/:id', function () {
      describe('when deleting a specific workout', function () {
        it('should delete workout when ID is valid', async () => {
          const workoutsFromDb = await Workout.find({});
          const workoutToDelete = workoutsFromDb[1];

          await api
            .delete(`/api/workouts/${workoutToDelete.id}`)
            .set('Authorization', 'bearer ' + token)
            .expect(200);

          const workoutsAtEnd = await Workout.find({});
          expect(workoutsAtEnd).toHaveLength(workoutsFromDb.length - 1);

          const contents = workoutsAtEnd.map((r) => r.title);
          expect(contents).not.toContain(workoutToDelete.title);
        });
      });
    });
  });
});

afterAll(() => {
  mongoose.connection.close();
});
