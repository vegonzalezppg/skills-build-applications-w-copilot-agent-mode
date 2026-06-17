/**
 * Seed script for octofit_db database
 * Description: Seed the octofit_db database with test data
 */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from '../models/User.js';
import { Team } from '../models/Team.js';
import { Activity } from '../models/Activity.js';
import { Workout } from '../models/Workout.js';
import { Leaderboard } from '../models/Leaderboard.js';
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
const seedDatabase = async () => {
    try {
        console.log('🌱 Seeding the octofit_db database with test data...\n');
        // Connect to MongoDB
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB\n');
        // Clear existing collections
        console.log('🗑️  Clearing existing data...');
        await User.deleteMany({});
        await Team.deleteMany({});
        await Activity.deleteMany({});
        await Workout.deleteMany({});
        await Leaderboard.deleteMany({});
        console.log('✅ Cleared all collections\n');
        // Create sample users
        console.log('👥 Creating sample users...');
        const users = await User.insertMany([
            {
                name: 'Alice Johnson',
                email: 'alice@example.com',
                password: 'hashed_password_1',
                profilePicture: 'https://i.pravatar.cc/150?img=1',
            },
            {
                name: 'Bob Smith',
                email: 'bob@example.com',
                password: 'hashed_password_2',
                profilePicture: 'https://i.pravatar.cc/150?img=2',
            },
            {
                name: 'Carol Davis',
                email: 'carol@example.com',
                password: 'hashed_password_3',
                profilePicture: 'https://i.pravatar.cc/150?img=3',
            },
            {
                name: 'David Wilson',
                email: 'david@example.com',
                password: 'hashed_password_4',
                profilePicture: 'https://i.pravatar.cc/150?img=4',
            },
        ]);
        console.log(`✅ Created ${users.length} users\n`);
        // Create sample teams
        console.log('🏆 Creating sample teams...');
        const teams = await Team.insertMany([
            {
                name: 'Fitness Warriors',
                description: 'A team dedicated to fitness excellence',
                members: [users[0]._id.toString(), users[1]._id.toString()],
                createdBy: users[0]._id.toString(),
            },
            {
                name: 'Cardio Champions',
                description: 'Team focused on cardio workouts',
                members: [users[2]._id.toString(), users[3]._id.toString()],
                createdBy: users[2]._id.toString(),
            },
        ]);
        console.log(`✅ Created ${teams.length} teams\n`);
        // Create sample activities
        console.log('🏃 Creating sample activities...');
        const activities = await Activity.insertMany([
            {
                userId: users[0]._id.toString(),
                type: 'Running',
                description: 'Morning jog',
                duration: 30,
                caloriesBurned: 300,
                timestamp: new Date(Date.now() - 86400000),
            },
            {
                userId: users[0]._id.toString(),
                type: 'Cycling',
                description: 'Weekend cycling',
                duration: 60,
                caloriesBurned: 500,
                timestamp: new Date(Date.now() - 172800000),
            },
            {
                userId: users[1]._id.toString(),
                type: 'Swimming',
                description: 'Pool workout',
                duration: 45,
                caloriesBurned: 400,
                timestamp: new Date(Date.now() - 86400000),
            },
            {
                userId: users[2]._id.toString(),
                type: 'Running',
                description: 'Evening run',
                duration: 25,
                caloriesBurned: 250,
                timestamp: new Date(Date.now() - 259200000),
            },
            {
                userId: users[3]._id.toString(),
                type: 'Weight Training',
                description: 'Gym session',
                duration: 50,
                caloriesBurned: 350,
                timestamp: new Date(Date.now() - 172800000),
            },
        ]);
        console.log(`✅ Created ${activities.length} activities\n`);
        // Create sample workouts
        console.log('💪 Creating sample workouts...');
        const workouts = await Workout.insertMany([
            {
                userId: users[0]._id.toString(),
                name: 'Full Body Strength',
                exercises: ['Squats', 'Bench Press', 'Deadlifts'],
                duration: 60,
                intensity: 'High',
            },
            {
                userId: users[1]._id.toString(),
                name: 'Cardio Blast',
                exercises: ['Treadmill', 'Rowing Machine', 'Jump Rope'],
                duration: 45,
                intensity: 'Medium',
            },
            {
                userId: users[2]._id.toString(),
                name: 'HIIT Workout',
                exercises: ['Burpees', 'Mountain Climbers', 'Sprints'],
                duration: 30,
                intensity: 'High',
            },
            {
                userId: users[3]._id.toString(),
                name: 'Yoga & Flexibility',
                exercises: ['Stretching', 'Yoga Poses', 'Breathing'],
                duration: 50,
                intensity: 'Low',
            },
        ]);
        console.log(`✅ Created ${workouts.length} workouts\n`);
        // Create leaderboard entries
        console.log('🏅 Creating leaderboard entries...');
        const leaderboardEntries = await Leaderboard.insertMany([
            {
                userId: users[0]._id.toString(),
                userName: users[0].name,
                totalPoints: 850,
                totalWorkouts: 15,
                totalCalories: 5250,
                teamId: teams[0]._id.toString(),
                rank: 1,
            },
            {
                userId: users[1]._id.toString(),
                userName: users[1].name,
                totalPoints: 720,
                totalWorkouts: 12,
                totalCalories: 4200,
                teamId: teams[0]._id.toString(),
                rank: 2,
            },
            {
                userId: users[2]._id.toString(),
                userName: users[2].name,
                totalPoints: 680,
                totalWorkouts: 11,
                totalCalories: 3800,
                teamId: teams[1]._id.toString(),
                rank: 3,
            },
            {
                userId: users[3]._id.toString(),
                userName: users[3].name,
                totalPoints: 620,
                totalWorkouts: 10,
                totalCalories: 3500,
                teamId: teams[1]._id.toString(),
                rank: 4,
            },
        ]);
        console.log(`✅ Created ${leaderboardEntries.length} leaderboard entries\n`);
        console.log('✨ Database seeding completed successfully!\n');
        console.log('📊 Summary:');
        console.log(`   - Users: ${users.length}`);
        console.log(`   - Teams: ${teams.length}`);
        console.log(`   - Activities: ${activities.length}`);
        console.log(`   - Workouts: ${workouts.length}`);
        console.log(`   - Leaderboard Entries: ${leaderboardEntries.length}\n`);
        await mongoose.disconnect();
        console.log('🔌 Disconnected from MongoDB\n');
        process.exit(0);
    }
    catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};
seedDatabase();
//# sourceMappingURL=seed.js.map