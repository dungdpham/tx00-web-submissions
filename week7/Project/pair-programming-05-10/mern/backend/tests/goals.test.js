const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const User = require('../models/userModel');
const Goal = require('../models/goalModel');

let token = null;

const goals = [{ text: 'Goal 1' }, { text: 'Goal 2' }];

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api
    .post('/api/users')
    .send({ name: 'Kiran', email: 'kiran@matti.fi', password: 'One2345678#' });
  token = result.body.token;
});

describe('Goal API tests', () => {
  beforeEach(async () => {
    await Goal.deleteMany({});
    await api
      .post('/api/goals')
      .set('Authorization', `Bearer ${token}`)
      .send(goals[0])
      .send(goals[1]);
  });

  describe('GET /api/goals', () => {
    test('Goals are returned', async () => {
      await api
        .get('/api/goals')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
    });
    test('Goals are returned as json', async () => {
      await api
        .get('/api/goals')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .expect('Content-Type', /application\/json/);
    });
    test('Goals can be deleted', async () => {
      const goals = await Goal.find({});
      const res = await api
        .delete(`/api/goals/${goals[0].id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
      expect(res.body).toHaveProperty('text');
    });
  });

  describe('GET /api/goals/:id', () => {
    test('A specific goal is returned', async () => {
      const goalsAtStart = await Goal.find({});
      const goalToView = goalsAtStart[0];
      await api
        .get(`/api/goals/${goalToView.id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .expect('Content-Type', /application\/json/);
    });
  });

  describe('POST /api/goals', () => {
    test('A valid goal can be added', async () => {
      const newGoal = { text: 'yep' };
      await api
        .post('/api/goals')
        .set('Authorization', `Bearer ${token}`)
        .send(newGoal)
        .expect(200);
    });
    test("An invalid goal can't be added", async () => {
      const newGoal = { name: 'nope' };
      await api
        .post('/api/goals')
        .set('Authorization', `Bearer ${token}`)
        .send(newGoal)
        .expect(400);
    });
    describe('put /api/goals/:id', () => {
      test('A specific goal is updated', async () => {
        const goalsAtStart = await Goal.find({});
        const goalToView = goalsAtStart[0];
        console.log(goalsAtStart);
        const updatedGoalData = {
          text: 'Updated Workout',
        };
        await api
          .put(`/api/goals/${goalToView._id.toString()}`)
          .set('Authorization', `Bearer ${token}`)
          .send(updatedGoalData)
          .expect(200);

        const updatedGoal = await Goal.findById(goalToView._id.toString());
        expect(updatedGoal).toMatchObject(updatedGoalData);
      });
    });
  });
});
